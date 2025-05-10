import sqlite3

conn = sqlite3.connect('database.db')
c = conn.cursor()

# Tạo bảng users nếu chưa tồn tại
c.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        name TEXT,
        password TEXT
    )
''')
conn.commit()
conn.close()

print("Bảng 'users' đã được tạo hoặc đã tồn tại.")

