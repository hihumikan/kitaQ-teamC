from flask import Blueprint, request, make_response
from models.models import Users, Commons
import os
import uuid
import hashlib

users_bp = Blueprint('app', __name__)


@users_bp.route("/users", methods=["GET"])
def get_all_users():
    db = Users()
    data = db.get_all_users()
    result = []
    for user in data:
        if os.path.isfile("static/users/" + str(user[0]) + ".webp"):
            image = "http://api.kitaq.qqey.net/static/users/" + \
                str(user[0]) + ".webp"
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
    if bool(user_data) == False:
        return {"status": "NG"}, 404
    posts_data = db.get_user_post(user_id)
    result = {}
    posts = []
    if os.path.isfile("static/users/" + str(user_id) + ".webp"):
        user_image = "http://api.kitaq.qqey.net/static/users/" + user_id + ".webp"
    else:
        user_image = None

    for post in posts_data:
        if os.path.isfile("static/posts/" + str(post[0]) + ".webp"):
            post_image = "http://api.kitaq.qqey.net/static/posts/" + \
                str(post[0]) + ".webp"
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

    result.update({
        "user_name": user_data[0][0],
        "image_url": user_image,
        "posts": posts,
        "status": "OK"
    })
    return result


@users_bp.route("/user", methods=["PATCH"])
def user_patch():

    session = request.cookies.get('session', None)
    if session == None:
        print("session err")
        return {"status": "NG"}, 401

    com = Commons()
    user_id = com.cookie2userid(session)
    if user_id == None:
        return {"status": "NG"}, 401

    if (request.form["user_name"] != None):
        db = Users()
        db.patch_user_name(user_id, request.form["user_name"])
    if (request.form["description"] != None):
        db = Users()
        db.patch_user_description(session, request.form["description"])
    if (request.files['file'] != None):
        file = request.files['file']
        file.save("static/users/" + str(user_id) + ".webp")

    return {"status": "OK"}, 200


@users_bp.route("/signup", methods=["POST"])
def user_reg():
    data = {}
    output = {}
    db = Users()
    try:
        user_name = request.form['user_name']
        email = request.form['email']
        password = hashlib.md5(request.form['password'].encode()).hexdigest()
        isParent = request.form['isParent']
        file = request.files['file']
        description = request.form['description']
    except:
        return {"status": "NG"}, 401

    try:
        result = db.user_reg(user_name, email, password, isParent, description)
        user_id = result[0][0]

        file.save("static/users/" + str(user_id) + ".webp")

        if os.path.isfile("static/users/" + str(user_id) + ".webp"):
            image = "http://api.kitaq.qqey.net/static/users/" + \
                str(user_id) + ".webp"
        else:
            image = None

        data.update({
            "user_id": user_id,
            "user_name": user_name,
            "description": description,
            "isParent": isParent,
            "image_url": image
        })

        output.update({
            "status": "OK",
            "user_data": data
        })
        response = make_response(output)

        # Cookieの設定を行う
        db = Commons()
        max_age = 60 * 60 * 24 * 30  # 30日有効のセッションを発行
        session_id = str(uuid.uuid4()).replace('-', '')  # -の影響で32文字にならないので-を抜く
        print(db.cookie_reg(user_id, session_id))
        response.set_cookie('session', value=session_id,
                            max_age=max_age, path='/', secure=None, httponly=True)
        return response
    except:
        response = {"status": "NG"}
    finally:
        return response


@users_bp.route("/login", methods=["POST"])
def user_login():
    db = Users()

    email = request.form['email']
    password = hashlib.md5(request.form['password'].encode()).hexdigest()

    result = db.user_login(email, password)
    print(result)
    try:
        data = {}
        output = {}

        user_id = result[0][0]
        user_name = result[0][1]
        description = result[0][2]
        isParent = result[0][3]
        if os.path.isfile("static/users/" + str(user_id) + ".webp"):
            image = "http://api.kitaq.qqey.net/static/users/" + \
                str(user_id) + ".webp"
        else:
            image = None

        data.update({
            "user_id": user_id,
            "user_name": user_name,
            "description": description,
            "isParent": isParent,
            "image_url": image
        })

        print(user_id)
        print(data)
        output.update({
            "status": "OK",
            "user_data": data
        })

        db = Commons()
        # make_responseでレスポンスオブジェクトを生成する
        response = make_response(output)

        # Cookieの設定を行う
        max_age = 60 * 60 * 24 * 30  # 30日有効のセッションを発行
        session_id = str(uuid.uuid4()).replace('-', '')  # -の影響で32文字にならないので-を抜く
        print(db.cookie_reg(user_id, session_id))
        response.set_cookie('session', value=session_id,
                            max_age=max_age, path='/', secure=None, httponly=True)
    except:
        response = {"status": "NG"}
    finally:
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


'''
@users_bp.route("/cookie2user", methods=["GET"])
def cookie_get():
    session = request.cookies.get('session', None)
    if session == None:
        return {"user_id": None}
    db = Commons()
    user_id = db.cookie2userid(session)
    print(user_id)

    # make_responseでレスポンスオブジェクトを生成する
    response = make_response({"user_id": user_id})

    return response
'''
