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

  def get_user(user_id) -> list:
    conn = conn_db()              #ここでDBに接続
    cursor = conn.cursor()
    sql = "SELECT * FROM users WHERE user_id = " + user_id + ";"
    try:
      cursor.execute(sql)
      return cursor.fetchall()
    except:
      return None