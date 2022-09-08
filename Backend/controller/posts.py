from urllib import request
from flask import Blueprint, request
from models.models import Posts, Commons, Users
import os

posts_bp = Blueprint('posts_bp', __name__)


@posts_bp.route("/posts/<post_id>", methods=['GET'])
def posts_get(post_id):
    db = Posts()
    db_user = Users()
    result = {}
    data = []
    try:
        if bool(post_id) == False:
            return {"status": "NG"}, 404
        posts_data = db.get_post(post_id)
        if os.path.isfile("static/posts/" + str(post_id) + ".webp"):
            image = "http://api.kitaq.qqey.net/static/users/" + post_id + ".webp"
        else:
            image = None

        result.update({
            "posts_id": posts_data[0][0],
            "user_id": posts_data[0][1],
            "title": posts_data[0][2],
            "description": posts_data[0][3],
            "image_url": image})

        comments_data = db.get_comments(post_id)
        print(comments_data)
        for comment in comments_data:
            if os.path.isfile("static/users/" + str(comment[2]) + ".webp"):
                image = "http://api.kitaq.qqey.net/static/users/" + \
                    str(comment[2]) + ".webp"
            else:
                image = None
            user_name = db_user.get_user(comment[2])
            data.append({
                "id": comment[0],
                "post_id": comment[1],
                "user_name": user_name[0][0],
                "image_url": image,
                "comment": comment[3],
                "created_at": comment[4].strftime('%Y-%m-%d %H:%M:%S')
            })
        result.update({
            "comments": data
        })
    except:
        result = {"status": "NG"}, 404
    finally:
        return result


@posts_bp.route("/posts/<id>/comments", methods=['POST'])
def post_comment(id):
    com = Commons()
    db_post = Posts()
    session = request.cookies.get('session', None)
    comment = request.form['comment']
    user_id = com.cookie2userid(session)
    if user_id == None:
        return {"status": "NG"}, 401
    try:
        return_id = db_post.post_comment(id, user_id, comment)
        return {"status": "OK",
                "comment_id": return_id[0][0]}
    except:
        return {"status": "NG"}, 404


@posts_bp.route("/posts/<id>/comments", methods=['DELETE'])
def delete_comment(id):
    com = Commons()
    db_post = Posts()
    session = request.cookies.get('session', None)
    comment_id = request.form['comment_id']
    if session == None:
        return {"status": "NG"}, 401
    user_id = com.cookie2userid(session)
    if user_id == None:
        return {"status": "NG"}, 401
    get = db_post.comment_user_get(comment_id)
    try:
        if user_id == get[0][0]:
            db_post.delete_comment(comment_id)
            return {"status": "OK",
                    "comment_id": comment_id}, 200
        else:
            return {"status": "NG"}, 403
    except:
        return {"status": "NG"}, 404


@posts_bp.route("/post", methods=['POST'])
def post():
    com = Commons()
    db_post = Posts()
    session = request.cookies.get('session', None)
    if session == None:
        return {"status": "NG"}, 401
    try:
        title = request.form['title']
        file = request.files['file']
        description = request.form['description']
    except:
        return {"status": "NG"}, 404
    user_id = com.cookie2userid(session)
    if user_id == None:
        return {"status": "NG"}, 401
    try:
        post_id = db_post.post(user_id, title, description)
        file.save("static/posts/" + str(post_id[0][0]) + ".webp")
        return {"status": "OK",
                "post_id": post_id[0][0]}, 200
    except:
        return {"status": "NG"}, 500


@posts_bp.route("/post/<post_id>", methods=['DELETE'])
def post_del(post_id):
    com = Commons()
    db = Posts()
    session = request.cookies.get('session', None)
    if session == None:
        return {"status": "NG"}, 401
    user_id = com.cookie2userid(session)
    if user_id == None:
        return {"status": "NG"}, 401
    post_data = db.get_post(post_id)
    if user_id != post_data[0][1]:
        return {"status": "NG"}, 403
    try:
        db.delete_comment_post(post_id)
        db.delete_post(post_id)
        return {"status": "OK",
                "posts_id": post_id}
    except:
        return {"status": "NG"}, 500


'''
@posts_bp.route("/comment_user_test", methods=['GET'])
def comment_user_test():
    db_post = Posts()
    get = db_post.comment_user_get(1)
    return get
'''
