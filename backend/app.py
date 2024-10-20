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
    # response = model.generate_content(f"you are a quiz master. Generate 5 random questions with 4 multiple choice answers. They should be related to the context of {input_text}. Also provide the answer separately. The response should be in the following JSON format: {{\"questions\":[{{\"id\": 0, \"question\": \"\", \"options\": [], \"answer\": \"\"}}, ...]}}")


    response = model.generate_content(f"you are a quiz master. Generate 5 random questions with 4 multiple choice answers. They should be related to the context of {input_text}. Also provide the answer separately. The response should be in the following JSON format, DO NOT use any line break, DO NOT PUT LINEBREAK AT THE END OF THE ANSWER:" + """
{"questions": [ { "question": "How are you doing?", "answer": ["a: pretty good", "b: not ok"], "key": "a: pretty good"} ]}
                                      """)
    
    # print(type(response))
    # print(response.to_dict())

    questions = response.to_dict()["candidates"][0]["content"]["parts"][0]["text"]
    
    # print(questions)
    print(json.loads(questions))
    return jsonify(json.loads(questions))

if __name__ == '__main__':
    app.run(debug=True)





# import os
# import json
# import logging
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import google.generativeai as genai

# app = Flask(__name__)
# CORS(app)

# # Configure logging
# logging.basicConfig(level=logging.DEBUG)

# # Set the API key
# os.environ["GEMINI_API_KEY"] = "AIzaSyD0tjgK4Id32UYGirw1fE6hHwD6SQCNbQk"
# genai.configure(api_key=os.environ["GEMINI_API_KEY"])

# model = genai.GenerativeModel(model_name="gemini-1.5-flash")

# @app.route('/send-text', methods=['POST'])
# def handle_text():
#     data = request.get_json()
#     input_text = data.get('inputText')
#     print(f'Received text: {input_text}')
    
#     prompt = (
#         f"you are a quiz master. Generate 5 random questions with 4 multiple choice answers. "
#         f"They should be related to the context of {input_text}. Also provide the answer separately. "
#         f"The response should be in the following JSON format: "
#         f"{{\"questions\": [{{\"id\": 0, \"question\": \"\", \"options\": [], \"answer\": \"\"}}, ...]}}"
#     )
    
#     response = model.generate_content(prompt)
#     logging.debug(f"AI response: {response}")

#     # Extract the JSON content from the response
#     try:
#         content = response.result.candidates[0].content.parts[0].text
#         logging.debug(f"Extracted content: {content}")

#         # Parse the JSON content
#         start_index = content.find('{')
#         end_index = content.rfind('}') + 1
#         json_content = content[start_index:end_index]
#         parsed_json = json.loads(json_content)
        
#         return jsonify(parsed_json)
#     except Exception as e:
#         logging.error(f"Error parsing response: {e}")
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)