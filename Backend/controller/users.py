from flask import jsonify, Blueprint, request, json

users = Blueprint("users", __name__)
@app.route("/users")
def users():
    