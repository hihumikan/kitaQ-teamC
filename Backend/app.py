from flask import Flask
from controller.users import users

app = Flask(__name__)

app.register_blueprint(users)
@app.route("/")
def index():
    return "index page"