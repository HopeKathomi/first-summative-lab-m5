# from flask import Flask
# from flask_cors import CORS
import sqlite3

# app = Flask(__name__)
# CORS(app)
def create_table():
    connection = sqlite3.connect("inventory.db")
    cursor = connection.cursor()

    sql = """CREATE TABLE IF NOT EXISTS inventory(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        external_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        category TEXT,
        supplier_id INTEGER,
        price REAL
        )"""

    cursor.execute(sql)
    connection.commit()
    connection.close()

# if __name__ == "__main__":
#     app.run(debug = True)