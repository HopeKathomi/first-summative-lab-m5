from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    response = requests.get("https://databasesample.com/mock/warehouse-management-insights/products")
    data = response.json()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)