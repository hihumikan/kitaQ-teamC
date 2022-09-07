from flask import Flask
import os
from models.models import Users

app = Flask(__name__)

@app.route("/")
def index():
    return "index page"

@app.route("/users")
def get_all_users():
    db = Users()
    data = db.get_all_users()
    result = []
    for user in data:
        if os.path.isfile("static/users/" + str(user[0]) + ".jpg"):
            image = "static/users/" + str(user[0]) + ".jpg"
        else:
            image = 'null'
        result.append({
        "user_id": user[0],
        "user_name": user[1],
        "description": user[2],
        "image_url": image
        })
    return result

@app.route("/users/<user_id>", methods=["GET"])
def get_user(user_id):
    db = Users()
    data = db.get_user(user_id)
    result = []
    for user in data:
        if os.path.isfile("static/users/" + str(user[0]) + ".jpg"):
            image = "static/users/" + str(user[0]) + ".jpg"
        else:
            image = 'null'
        result.append({
        "user_id": user[0],
        "user_name": user[1],
        "description": user[2],
        "image_url": image
        })
    return result


if __name__ == "__main__":
    # debugモードが不要の場合は、debug=Trueを消してください
    app.run(host="localhost", port=8888, debug=True)