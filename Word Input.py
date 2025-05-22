from flask import Flask, render_template, request, redirect, url_for
import csv
import io

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    words = []

    if request.method == "POST":
        # Handle text input
        text = request.form.get("words", "")
        if text:
            words += [w.strip() for w in text.replace('\n', ',').split(',') if w.strip()]

        # Handle CSV upload
        uploaded_file = request.files.get("file")
        if uploaded_file and uploaded_file.filename.endswith(".csv"):
            content = uploaded_file.read().decode("utf-8")
            reader = csv.reader(io.StringIO(content))
            for row in reader:
                words += [cell.strip() for cell in row if cell.strip()]

    return render_template("index.html", words=words)

@app.route("/login")
def login():
    # Placeholder for Google login logic
    return "Google login feature not implemented yet."

if __name__ == "__main__":
    app.run(debug=True)
