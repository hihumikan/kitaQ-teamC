from flask import Blueprint, request, make_response
from models.models import Users, Commons
import os
import uuid

users_bp = Blueprint('app', __name__)


@users_bp.route("/users", methods=["GET"])
def get_all_users():
    db = Users()
    data = db.get_all_users()
    result = []
    for user in data:
        if os.path.isfile("static/users/" + str(user[0]) + ".jpg"):
            image = "http://api.kitaq.qqey.net/static/users/" + \
                str(user[0]) + ".jpg"
        else:
            image = None
        result.append({
            "user_id": user[0],
            "user_name": user[1],
            "description": user[2],
            "image_url": image
        })
    return result


@users_bp.route("/users/<user_id>", methods=["GET"])
def get_user(user_id):
    db = Users()
    user_data = db.get_user(user_id)
    posts_data = db.get_user_post(user_id)
    result = []
    posts = []
    if os.path.isfile("static/users/" + str(user_id) + ".jpg"):
        user_image = "http://api.kitaq.qqey.net/static/users/" + user_id + ".jpg"
    else:
        user_image = None

    for post in posts_data:
        if os.path.isfile("static/posts/" + str(post[0]) + ".jpg"):
            post_image = "http://api.kitaq.qqey.net/static/posts/" + \
                str(post[0]) + ".jpg"
        else:
            post_image = None
        posts.append({
            "post_id": post[0],
            "created_at": post[4].strftime('%Y-%m-%d %H:%M:%S'),
            "image_url": post_image,
            "title": post[2],
            "description": post[3],
            "comments": db.get_comment_cnt(post[0])[0][0]
        })

    result.append({
        "user_name": user_data[0],
        "image_url": user_image,
        "posts": posts
    })
    return result


@users_bp.route("/user", methods=["PATCH"])
def user_patch():
    session = request.cookies.get('session', None)
    db = Commons()
    user_id = db.cookie2userid(session)
    print(user_id)

    user_name = request.form['user_name']
    description = request.form['description']
    image = request.files['image']
    image.save("static/users/" + "hoge" + ".webp")
    return


@users_bp.route("/signin", methods=["POST"])
def user_reg():
    db = Users()

    user_name = request.form['user_name']
    email = request.form['email']
    password = request.form['password']
    isParent = request.form['isParent']
    file = request.files['file']
    description = request.form['description']

    result = db.user_reg(user_name, email, password, isParent, description)
    user_id = result[0][0]

    file.save("static/users/" + str(user_id) + ".webp")

    db = Commons()
    # make_responseでレスポンスオブジェクトを生成する
    response = make_response('signin:OK')

    # Cookieの設定を行う
    max_age = 60 * 60 * 24 * 30  # 30日有効のセッションを発行
    session_id = str(uuid.uuid4()).replace('-', '')  # -の影響で32文字にならないので-を抜く
    print(db.cookie_reg(user_id, session_id))
    response.set_cookie('session', value=session_id,
                        max_age=max_age, path='/', secure=None, httponly=True)
    return response

@users_bp.route("/login", methods=["POST"])
def user_login():
    db = Users()

    email = request.form['email']
    password = request.form['password']

    result = db.user_login(email, password)
    print(result)
    user_id = result[0][0]
    print(user_id)
    
    db = Commons()
    # make_responseでレスポンスオブジェクトを生成する
    response = make_response('login:OK')

    # Cookieの設定を行う
    max_age = 60 * 60 * 24 * 30  # 30日有効のセッションを発行
    session_id = str(uuid.uuid4()).replace('-', '')  # -の影響で32文字にならないので-を抜く
    print(db.cookie_reg(user_id, session_id))
    response.set_cookie('session', value=session_id,
                        max_age=max_age, path='/', secure=None, httponly=True)
    return response


@users_bp.route("/cookietest", methods=["GET"])
def cookie_set():
    session = request.cookies.get('session', None)
    if session == None:
        return {"user_id": None}
    db = Commons()
    user_id = db.cookie2userid(session)
    print(user_id)

    # make_responseでレスポンスオブジェクトを生成する
    response = make_response({"user_id": user_id})

    # Cookieの設定を行う
    max_age = 60 * 60 * 24 * 30  # 30日有効のセッションを発行
    response.set_cookie('uid', value="1234", max_age=max_age,
                        path='/', secure=None, httponly=True)

    return response


@users_bp.route("/cookie_reg_test", methods=["GET"])
def cookie_reg():
    session = request.cookies.get('session', None)
    if session == None:
        return {"user_id": None}
    db = Commons()

    # make_responseでレスポンスオブジェクトを生成する
    response = make_response()

    # Cookieの設定を行う
    max_age = 60 * 60 * 24 * 30  # 30日有効のセッションを発行
    session_id = str(uuid.uuid4()).replace('-', '')  # -の影響で32文字にならないので-を抜く
    if db.cookie_reg(2, session_id):
        response.set_cookie('session', value=session_id,
                            max_age=max_age, path='/', secure=None, httponly=True)
    else:
        return response

    return response
