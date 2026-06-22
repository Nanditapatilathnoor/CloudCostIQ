from flask import Flask, jsonify
from flask_cors import CORS
import psutil
from pymongo import MongoClient
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Connect to MongoDB running on your computer
client = MongoClient("mongodb://mongodb:27017/")
db = client["cloudcostiq"]
collection = db["metrics"]


@app.route("/metrics")
def metrics():
    # Collect system metrics
    data = {
        "cpu_usage": psutil.cpu_percent(),
        "memory_usage": psutil.virtual_memory().percent,
        "timestamp": datetime.now()
    }

    # Store in MongoDB
    collection.insert_one(data)

    # Return JSON response
    return jsonify({
        "cpu_usage": data["cpu_usage"],
        "memory_usage": data["memory_usage"]
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)