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
            image = "http://api.kitaq.qqey.net/static/users/" + str(user[0]) + ".jpg"
        else:
            image = None
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
    user_data = db.get_user(user_id)
    posts_data = db.get_user_post(user_id)
    result = []
    posts = []
    if os.path.isfile("static/users/" + user_id + ".jpg"):
        image = "http://api.kitaq.qqey.net/static/users/" + user_id + ".jpg"
    else:
        image = None

    for post in posts_data:
        if os.path.isfile("static/posts/" + str(post[0]) + ".jpg"):
            image = "http://api.kitaq.qqey.net/static/posts/" + str(post[0]) + ".jpg"
        else:
            image = None
        posts.append({
        "post_id":post[0],
        "created_at": post[4],
        "image_url": image,
        "title": post[2],
        "description": post[3],
        "comments": db.get_comment_cnt(post[0])[0]
        })

    result.append({
        "user_name": user_data[0],
        "image_url": image,
        "posts": posts
    })
    return result


if __name__ == "__main__":
    # debugモードが不要の場合は、debug=Trueを消してください
    app.run(host="localhost", port=8888, debug=True)