from flask import Flask, request    # Flaskは必須、requestはリクエストパラメータを処理する場合に使用します。
app = Flask(__name__)


# http://localhost:8888/hello
@app.route('/hello')
def hello():
    return "<html><h1>Hello, Flask!!</h1></html>"
    print("Hello, Flask!!")
    print("Hello, Flask!!")

# GETパラメータの取得（クエリストリングより）
# http://localhost:8888/
@app.route('/')
def index():
    html = "<html><h3>index page</h3><ol>"

    # URL中のクエリストリングを処理(個別に取得したい場合は、request.args.get("hoge")が使えます)
    for key, value in request.args.items():
        html += "<li>{}: {}</li>".format(key, value)

    html += "</ol></html>"
    return html


# GETパラメータの取得（REST APIに対応可能）
# http://localhost:8888/get/
# http://localhost:8888/get/<String>
@app.route('/get/')
@app.route('/get/<name>')
def get_param(name="no name"):  # nameパラメータが渡されなかった場合、「no name」が渡されます
    return "<html><h1>Hello, {}!!</h1></html>".format(name)


# GET,POSTどちらでもリクエストを受け付け、POSTの場合はリクエストボディを取得
# http://localhost:8888/post/
@app.route('/post/', methods=["GET", "POST"])  # methods=["POST"]のみにすればGETメソッドでのリクエストはエラーにできる
def post_param():
    if request.method == 'POST':
        # name = request.form['name']
        name = request.form.get("name")
        return "<html><h1>Hello, {}!!</h1></html>".format(name)
    else:
        name = "no name"
        return "<html><h1>Hello, {}!!</h1></html>".format(name)


if __name__ == "__main__":
    # debugモードが不要の場合は、debug=Trueを消してください
    app.run(host="localhost", port=8888, debug=True)