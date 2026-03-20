from flask import Flask, request, jsonify
from flask_cors import CORS

# Initialize the Flask application
app = Flask(__name__)
CORS(app)

@app.route('/get-data', methods=['GET'])
def process_image():
    
    print("Received request to process image.")
    return jsonify({"message": "Image processed successfully!"})
    

if __name__ == '__main__':
    app.run(port=5000, debug=True)