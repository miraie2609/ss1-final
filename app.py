from flask import Flask, redirect, url_for, session, render_template, request
from flask_oauthlib.client import OAuth
import sqlite3

app = Flask(__name__)
app.secret_key = 'a_secret_key_here'  # Đặt key bí mật bất kỳ
oauth = OAuth(app)

# Google OAuth setup
google = oauth.remote_app(
    'google',
    consumer_key='YOUR_CONSUMER_KEY',  # <- thay bằng thật
    consumer_secret='YOUR_CONSUMER_SECRET',  # <- thay bằng thật
    request_token_params={
        'scope': 'email profile'
    },
    base_url='https://www.googleapis.com/oauth2/v1/',
    request_token_url=None,
    access_token_method='POST',
    access_token_url='https://accounts.google.com/o/oauth2/token',
    authorize_url='https://accounts.google.com/o/oauth2/auth'
)

@google.tokengetter
def get_google_oauth_token():
    return session.get('google_token')

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/login')
def login():
    return google.authorize(callback=url_for('authorized', _external=True))

# @app.route('/login')
# def login():
#     callback_url = url_for('authorized', _external=True)
#     print("Redirect URI:", callback_url)
#     return google.authorize(callback=callback_url)

@app.route('/login/authorized')
def authorized():
    response = google.authorized_response()
    if response is None or response.get('access_token') is None:
        return 'Access Denied'

    session['google_token'] = (response['access_token'], '')
    user_info = google.get('userinfo').data
    email = user_info['email']
    name = user_info.get('name', 'No name')

    # Save user to DB if not exists
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("SELECT * FROM users WHERE email=?", (email,))
    if not c.fetchone():
        c.execute("INSERT INTO users (email, name) VALUES (?, ?)", (email, name))
        conn.commit()
    conn.close()

    session['user_email'] = email
    return redirect(url_for('word_input'))

@app.route('/word-input')
def word_input():
    if 'user_email' not in session:
        return redirect(url_for('login'))
    return render_template('word_input.html', email=session['user_email'])

if __name__ == '__main__':
    app.run(debug=True)
