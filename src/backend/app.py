from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow communication between React and Flask

# boilerplate flask
@app.route('/api/send-text', methods=['POST'])
def handle_text():
    data = request.get_json()
    input_text = data.get('text', '')
    return jsonify({'message': f'You sent: {input_text}'})

if __name__ == '__main__':
    app.run(debug=True)