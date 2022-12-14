from flask import Blueprint, request, make_response
from models.models import Users, Commons
import os
import uuid
import hashlib
import json
import base64

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
    data = request.data.decode('utf-8')
    data = json.loads(data)
    session = request.cookies.get('session', None)
    if session == None:
        print("session err")
        return {"status": "NG"}, 401

    com = Commons()
    user_id = com.cookie2userid(session)
    if user_id == None:
        return {"status": "NG"}, 401

    try:
        user_name = str(data['user_name'])
        db = Users()
        db.patch_user_name(user_id, user_name)
        # print(str(data['user_name']))
    except:
        pass
    try:
        description = str(data['description'])
        db = Users()
        db.patch_user_description(user_id, description)
        # print(str(data['descripton']))
    except:
        pass
    try:
        encode = base64.b64decode((data['file']))
        with open("static/users/" + str(user_id) + ".webp", "wb") as f:
            f.write(encode)
        #file.save("static/users/" + str(user_id) + ".webp")
        print("file")
    except:
        pass

    return {"status": "OK"}, 200


@users_bp.route("/signup", methods=["POST"])
def user_reg():
    user_data = {}
    output = {}
    db = Users()
    try:
        data = request.data.decode('utf-8')
        data = json.loads(data)
        user_name = str(data['user_name'])
        email = str(data['email'])
        password = hashlib.md5(str(data['password']).encode()).hexdigest()
        isParent = str(data['isParent'])
        file = data['file']
        description = str(data['description'])
    except:
        return {"status": "NG"}, 400

    try:
        result = db.user_reg(user_name, email, password, isParent, description)
        user_id = result[0][0]

        decode = base64.b64decode(file)
        with open("static/users/" + str(user_id) + ".webp", "wb") as f:
            f.write(decode)

        if os.path.isfile("static/users/" + str(user_id) + ".webp"):
            image = "http://api.kitaq.qqey.net/static/users/" + \
                str(user_id) + ".webp"
        else:
            image = None

        user_data.update({
            "user_id": user_id,
            "user_name": user_name,
            "description": description,
            "isParent": isParent,
            "image_url": image
        })

        output.update({
            "status": "OK",
            "user_data": user_data
        })
        response = make_response(output)

        # Cookie??????????????????
        db = Commons()
        max_age = 60 * 60 * 24 * 30  # 30????????????????????????????????????
        session_id = str(uuid.uuid4()).replace('-', '')  # -????????????32???????????????????????????-?????????
        print(db.cookie_reg(user_id, session_id))
        response.set_cookie('session', value=session_id,
                            max_age=max_age, path='/', domain='kitaq.qqey.net', secure=True, samesite=None, httponly=True)
        return response
    except:
        response = {"status": "NG"}, 400
    finally:
        return response


@users_bp.route("/login", methods=["POST"])
def user_login():
    db = Users()

    data = request.data.decode('utf-8')
    data = json.loads(data)

    email = str(data['email'])
    password = hashlib.md5(str(data['password']).encode()).hexdigest()

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
        # make_response???????????????????????????????????????????????????
        response = make_response(output)

        # Cookie??????????????????
        max_age = 60 * 60 * 24 * 30  # 30????????????????????????????????????
        session_id = str(uuid.uuid4()).replace('-', '')  # -????????????32???????????????????????????-?????????
        print(db.cookie_reg(user_id, session_id))
        response.set_cookie('session', value=session_id,
                            max_age=max_age, path='/', domain='kitaq.qqey.net', secure=True, samesite=None, httponly=True)
    except:
        response = {"status": "NG"}, 401
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

    # make_response???????????????????????????????????????????????????
    response = make_response({"user_id": user_id})

    # Cookie??????????????????
    max_age = 60 * 60 * 24 * 30  # 30????????????????????????????????????
    response.set_cookie('uid', value="1234", max_age=max_age,
                        path='/', secure=None, httponly=True)

    return response


@users_bp.route("/cookie_reg_test", methods=["GET"])
def cookie_reg():
    session = request.cookies.get('session', None)
    if session == None:
        return {"user_id": None}
    db = Commons()

    # make_response???????????????????????????????????????????????????
    response = make_response()

    # Cookie??????????????????
    max_age = 60 * 60 * 24 * 30  # 30????????????????????????????????????
    session_id = str(uuid.uuid4()).replace('-', '')  # -????????????32???????????????????????????-?????????
    if db.cookie_reg(2, session_id):
        response.set_cookie('session', value=session_id,
                            max_age=max_age, path='/', domain='kitaq.qqey.net', secure=None, httponly=True)
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

    # make_response???????????????????????????????????????????????????
    response = make_response({"user_id": user_id})

    return response
'''
