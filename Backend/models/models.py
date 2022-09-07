import mysql.connector
def conn_db():
      conn = mysql.connector.connect(
              host = 'localhost',
              user = 'root',
              passwd = 'root_password',
              db = 'db'
      )
      return conn

class Users:
  def _open(self):
        self.dbh = mysql.connector.MySQLConnection(**self.dns)

  def get_all_users(self) -> list:
    conn = conn_db()              #ここでDBに接続
    cursor = conn.cursor()
    sql = "SELECT id,user_name,description FROM users;"
    try:
      cursor.execute(sql)
      return cursor.fetchall()
    except:
      return None

  def get_user(self,user_id) -> str:
    conn = conn_db()              #ここでDBに接続
    cursor = conn.cursor()
    sql = "SELECT user_name FROM users WHERE id = " + str(user_id) + ";"
    try:
      cursor.execute(sql)
      return cursor.fetchall()
    except:
      return None
  
  def get_user_post(self,user_id) -> list:
    conn = conn_db()
    cursor = conn.cursor()
    sql = "SELECT id,user_id,title,description,created_at FROM posts WHERE user_id = " + str(user_id) + ";"
    try:
      cursor.execute(sql)
      return cursor.fetchall()
    except:
      return None

  def get_comment_cnt(self,post_id) ->str:
    conn = conn_db()
    cursor = conn.cursor()
    sql = "SELECT COUNT(comment) FROM comments WHERE id = " + str(post_id) + ";"
    try:
      cursor.execute(sql)
      return cursor.fetchall()
    except:
      return None