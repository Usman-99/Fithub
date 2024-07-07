from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/upload", methods=["POST"])
def upload():
    # Assuming you just want to send back a prediction.
    # Here, you can add your logic to process the audio file and generate a prediction.
    print(request.files['file'])
    data = {"prediction": "audio received and prediction sent"}
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True, port=8000)
