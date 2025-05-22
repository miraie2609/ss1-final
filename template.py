from flask import Flask, render_template, request
from collections import Counter

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def text_processor():
    unique_words = None
    duplicate_words = []

    if request.method == "POST":
        raw_text = request.form.get("text", "")
        # Split by commas or newlines, strip whitespace, and filter empty entries
        words = [w.strip() for w in raw_text.replace("\n", ",").split(",") if w.strip()]

        # Count occurrences
        word_counts = Counter(words)
        unique_words = list(word_counts.keys())
        duplicate_words = [word for word, count in word_counts.items() if count > 1]

    return render_template("text_processor.html", unique_words=unique_words, duplicate_words=duplicate_words)

if __name__ == "__main__":
    app.run(debug=True)