from flask import Flask, jsonify, request
import requests
from flask_cors import CORS
from database import create_table, save_database

app = Flask(__name__)
CORS(app)
create_table()

@app.route("/", methods=["GET"])
def get_inventory():
    response = requests.get("https://databasesample.com/mock/warehouse-management-insights/products")
    data = response.json()
    return jsonify(data)

@app.route("/edit", methods=["POST"])
def edit_inventory():
    response = request.get_json()
    name = response.get("name")
    category = response.get("category")
    price = response.get("price")
    save_database(name, category, price)
    # save_database()
    # print(name)
    return jsonify({
        "name": name,
        "category": category,
        "price": price
    }), 201

if __name__ == "__main__":
    app.run(debug=True)