from flask import Flask, jsonify, request
from flask_cors import CORS
import google.generativeai as genai
import os
import json

app = Flask(__name__)
CORS(app)

os.environ["GEMINI_API_KEY"] = "YOUR_API_KEY"
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

@app.route('/generate-questions', methods=['POST'])
def generate_questions():
    data = request.json
    subject = data.get('subject', '')

    model = genai.GenerativeModel(model_name="gemini-1.5-flash")
    response = model.generate_content(
        f"Generate 5 random questions about {subject} with 4 multiple choice answers. "
        "Provide the answer separately in JSON format: "
        "{\"questions\": [{\"id\": 0, \"question\": \"\", \"options\": [], \"answer\": \"\"}, ...]}"
    )

    return jsonify(json.loads(response.text))

if __name__ == '__main__':
    app.run(debug=True)