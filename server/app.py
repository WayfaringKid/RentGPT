from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv
from flask_cors import CORS
import random

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}}) 

@app.route('/api/message', methods=['POST'])
def message():
    user_input = request.json['message']
    openai_response = call_openai(user_input)
    return jsonify({'reply': openai_response})

# ----this should be ready with api key----
# def call_openai(text):
#     openai_api_key = os.environ.get('OPENAI_API_KEY')
#     headers = {
#         'Authorization': f'Bearer {openai_api_key}'
#     }
#     data = {
#         'prompt': text,
#         'max_tokens': 150
#     }
#     response = requests.post('https://api.openai.com/v1/engines/davinci/completions', headers=headers, json=data)
#     return response.json()['choices'][0]['text'].strip()

# ----temp fixed response for testing----
def call_openai(text):
    # Mock responses
    mock_responses = [
        "Hello! How can I help you today?",
        "I'm a mock chatbot. How's your day going?",
        "This is a simulated response. What else would you like to know?"
    ]
    # Return a random response
    return random.choice(mock_responses)

if __name__ == '__main__':
    app.run(debug=True)
