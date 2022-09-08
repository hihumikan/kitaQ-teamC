from flask import Flask
from controller.users import users_bp
from controller.posts import posts_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.register_blueprint(users_bp)
app.register_blueprint(posts_bp)


@app.route("/")
def index():
    return "index page"


if __name__ == "__main__":
    # debugモードが不要の場合は、debug=Trueを消してください
    app.run(host="localhost", port=8888, debug=True)
