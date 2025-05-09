
from flask import Flask, redirect, url_for, session, render_template, request
from authlib.integrations.flask_client import OAuth
from googletrans import Translator
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3
import os

app = Flask(__name__)
app.secret_key = 'a_secret_key_here'
oauth = OAuth(app)

# Google OAuth config
app.config['GOOGLE_CLIENT_ID'] = 'YOUR_ID'
app.config['GOOGLE_CLIENT_SECRET'] = 'YOUR_SECRET'
app.config['GOOGLE_DISCOVERY_URL'] = "https://accounts.google.com/.well-known/openid-configuration"

google = oauth.register(
    name='google',
    client_id=app.config['GOOGLE_CLIENT_ID'],
    client_secret=app.config['GOOGLE_CLIENT_SECRET'],
    server_metadata_url=app.config['GOOGLE_DISCOVERY_URL'],
    client_kwargs={'scope': 'openid email profile'}
)

# Ensure DB exists
def init_db():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users (
                    email TEXT PRIMARY KEY,
                    name TEXT,
                    password TEXT
                )''')
    conn.commit()
    conn.close()

init_db()

@app.route('/')
def index():
    session.pop('user_email', None)
    return render_template('home.html')

@app.route('/login')
def login():
    redirect_uri = url_for('authorize', _external=True)
    return google.authorize_redirect(redirect_uri)

@app.route('/login/authorized')
def authorize():
    token = google.authorize_access_token()
    user_info = token.get('userinfo')
    email = user_info['email']
    name = user_info.get('name', 'No name')

    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("SELECT * FROM users WHERE email=?", (email,))
    user = c.fetchone()
    conn.close()

    if not user:
        # Lưu tạm để dùng ở bước set password
        session['temp_email'] = email
        session['temp_name'] = name
        return redirect(url_for('set_password'))

    return redirect(url_for('password_input', user_email=email))

@app.route('/set-password', methods=['GET', 'POST'])
def set_password():
    email = session.get('temp_email')
    name = session.get('temp_name')

    if not email or not name:
        return redirect(url_for('index'))

    if request.method == 'POST':
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        if password != confirm_password:
            return render_template('set_password.html', user_email=email, error="Passwords do not match.")

        hashed_pw = generate_password_hash(password)

        conn = sqlite3.connect('database.db')
        c = conn.cursor()
        c.execute("INSERT INTO users (email, name, password) VALUES (?, ?, ?)", (email, name, hashed_pw))
        conn.commit()
        conn.close()

        session.pop('temp_email', None)
        session.pop('temp_name', None)
        session['user_email'] = email
        return redirect(url_for('word_input'))

    return render_template('set_password.html', user_email=email)

@app.route('/password-input', methods=['GET', 'POST'])
def password_input():
    user_email = request.args.get('user_email')

    if request.method == 'POST':
        password = request.form['password']
        conn = sqlite3.connect('database.db')
        c = conn.cursor()
        c.execute("SELECT password FROM users WHERE email=?", (user_email,))
        user = c.fetchone()
        conn.close()

        if user and check_password_hash(user[0], password):
            session['user_email'] = user_email
            return redirect(url_for('word_input'))
        else:
            return render_template('password_input.html', user_email=user_email, error="Incorrect password. Please try again.")

    return render_template('password_input.html', user_email=user_email)

@app.route('/word-input', methods=['GET', 'POST'])
def word_input():
    if 'user_email' not in session:
        return redirect(url_for('login'))

    translation = None
    word = None

    if request.method == 'POST':
        word = request.form.get('word')
        if word:
            translator = Translator()
            try:
                result = translator.translate(word, src='en', dest='vi')
                translation = result.text
            except Exception as e:
                translation = f"Lỗi khi dịch: {str(e)}"

    return render_template('word_input.html', email=session['user_email'], word=word, translation=translation)

if __name__ == '__main__':
    app.run(debug=True)
