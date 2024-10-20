import google.generativeai as genai
import os
import json

os.environ["GEMINI_API_KEY"] = "AIzaSyD0tjgK4Id32UYGirw1fE6hHwD6SQCNbQk"

genai.configure(api_key=os.environ["GEMINI_API_KEY"])

model = genai.GenerativeModel(model_name="gemini-1.5-flash")
response = model.generate_content("you are a quiz master. Generate 5 random questions with 4 multiple choice answers. Also provide the answer seperately. The response should be in the following JSON format: {"questions": [{"id": 0, "question": "", "options": [], "answer": ""}, ...]}")
print(response.text)