from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
import json

os.environ["GEMINI_API_KEY"] = "AIzaSyD0tjgK4Id32UYGirw1fE6hHwD6SQCNbQk"

genai.configure(api_key=os.environ["GEMINI_API_KEY"])

model = genai.GenerativeModel(model_name="gemini-1.5-flash")
app = Flask(__name__)
CORS(app)  # Enable CORS to allow communication between React and Flask

@app.route('/send-text', methods=['POST'])
def handle_text():
    data = request.get_json()  # Correct method to get JSON data
    input_text = data.get('inputText')
    print(f'Received text: {input_text}')
    response = model.generate_content(f"you are a quiz master. Generate 5 random questions with 4 multiple choice answers. They should be related to the context of {input_text}. Also provide the answer separately. The response should be in the following JSON format: {{\"questions\": [{{\"id\": 0, \"question\": \"\", \"options\": [], \"answer\": \"\"}}, ...]}}")
    print(type(response))
    return jsonify(response.to_dict())

if __name__ == '__main__':
    app.run(debug=True)