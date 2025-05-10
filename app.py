from flask import Flask, redirect, url_for, session, render_template, request
from authlib.integrations.flask_client import OAuth
import sqlite3
from werkzeug.security import generate_password_hash
import os

app = Flask(__name__)
app.secret_key = 'a_secret_key_here'

oauth = OAuth(app)

google = oauth.register(
    name='google',
    client_id='YOUR_CLIENT_KEY',
    client_secret='YOUR_CLIENT_SECRET',
    access_token_url='https://oauth2.googleapis.com/token',
    authorize_url='https://accounts.google.com/o/oauth2/auth',
    api_base_url='https://www.googleapis.com/oauth2/v2/',
    userinfo_endpoint='https://www.googleapis.com/oauth2/v2/userinfo',
    client_kwargs={
        'scope': 'openid email profile'
    },
    jwks_uri='https://www.googleapis.com/oauth2/v3/certs'  # Thêm dòng này
)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/login')
def login():
    redirect_uri = url_for('authorized', _external=True)
    return google.authorize_redirect(redirect_uri)

@app.route('/login/authorized')
def authorized():
    token = google.authorize_access_token()
    resp = google.get('userinfo', token=token)
    userinfo = resp.json()  # Thay đổi từ user_info thành userinfo
    email = userinfo['email']  # Sử dụng userinfo thay vì user_info
    name = userinfo.get('name', 'No name')  # Cũng thay đổi ở đây

    session['user_email'] = email

    # Lưu vào database nếu chưa tồn tại
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("SELECT * FROM users WHERE email=?", (email,))
    user = c.fetchone()
    if not user:
        c.execute("INSERT INTO users (email, name) VALUES (?, ?)", (email, name))
        conn.commit()
    conn.close()

    # Nếu chưa có password
    if not user or (len(user) >= 4 and user[3] is None):
        return redirect(url_for('set_password'))
    
    return redirect(url_for('word_input'))

@app.route('/set-password', methods=['GET', 'POST'])
def set_password():
    if 'user_email' not in session:
        return redirect(url_for('login'))
    
    if request.method == 'POST':
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        if password != confirm_password:
            return render_template('set_password.html', error="Passwords do not match")

        hashed_password = generate_password_hash(password)
        conn = sqlite3.connect('database.db')
        c = conn.cursor()
        c.execute("UPDATE users SET password=? WHERE email=?", (hashed_password, session['user_email']))
        conn.commit()
        conn.close()

        return redirect(url_for('word_input'))

    return render_template('set_password.html')

@app.route('/word-input')
def word_input():
    if 'user_email' not in session:
        return redirect(url_for('login'))
    return render_template('word_input.html', email=session['user_email'])

if __name__ == '__main__':
    app.run(debug=True)
