from flask import Flask
import os
from controller.users import users_bp

app = Flask(__name__)
app.register_blueprint(users_bp)

@app.route("/")
def index():
    return "index page"

if __name__ == "__main__":
    # debugモードが不要の場合は、debug=Trueを消してください
    app.run(host="localhost", port=8888, debug=True)