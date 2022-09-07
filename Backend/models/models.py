import mysql.connector


def conn_db():
    conn = mysql.connector.connect(
        host='localhost',
        user='root',
        passwd='root_password',
        db='db'
    )
    return conn


class Commons:
    def _open(self):
        self.dbh = mysql.connector.MySQLConnection(**self.dns)

    def cookie2userid(self, cookie) -> str:
        conn = conn_db()  # ここでDBに接続
        cursor = conn.cursor()
        sql = "SELECT * FROM session WHERE session = '" + cookie + "';"
        try:
            cursor.execute(sql)
            a = cursor.fetchall()
            print(a[0][0])
            return a[0][0]
        except:
            return None

    def cookie_reg(self, user_id, session) -> str:
        conn = conn_db()  # ここでDBに接続
        cursor = conn.cursor()
        sql = "INSERT INTO session (user_id,session) VALUES (" + str(user_id) + ",'" + str(
            session) + "') ON DUPLICATE KEY UPDATE session = VALUES(session);"
        print(sql)
        try:
            cursor.execute(sql)
            conn.commit()
            return True
        except:
            return None


class Users:
    def _open(self):
        self.dbh = mysql.connector.MySQLConnection(**self.dns)

    def user_reg(self, user_name, email, password, isParent, description):
        conn = conn_db()
        cursor = conn.cursor()
        sql = "INSERT INTO users (user_name,email,password,description,isParent) VALUES( '" + user_name + \
            "','" + email + "','" + password + "','" + \
            description + "'," + str(isParent) + ");"

        print(sql)
        try:
            print(cursor.execute(sql))
            print(conn.commit())
            sql = "SELECT LAST_INSERT_ID();"
            cursor.execute(sql)
            result = cursor.fetchall()
            cursor.close
            conn.close
            return result
        except:
            cursor.close
            conn.close
            return False
    
    def user_login(self, email, password):
        conn = conn_db()
        cursor = conn.cursor()
        sql = "SELECT id FROM users WHERE email = '" + email + "' AND password = '" + password + "';"

        print(sql)
        try:
            cursor.execute(sql)
            return cursor.fetchall()
        except:
            cursor.close
            conn.close
            return False

    def get_all_users(self) -> list:
        conn = conn_db()  # ここでDBに接続
        cursor = conn.cursor()
        sql = "SELECT id,user_name,description FROM users;"
        try:
            cursor.execute(sql)
            return cursor.fetchall()
        except:
            return None

    def get_user(self, user_id) -> str:
        conn = conn_db()  # ここでDBに接続
        cursor = conn.cursor()
        sql = "SELECT user_name FROM users WHERE id = " + str(user_id) + ";"
        try:
            cursor.execute(sql)
            return cursor.fetchall()
        except:
            return None

    def get_user_post(self, user_id) -> list:
        conn = conn_db()
        cursor = conn.cursor()
        sql = "SELECT id,user_id,title,description,created_at FROM posts WHERE user_id = " + \
            str(user_id) + ";"
        try:
            cursor.execute(sql)
            return cursor.fetchall()
        except:
            return None

    def get_comment_cnt(self, post_id) -> str:
        conn = conn_db()
        cursor = conn.cursor()
        sql = "SELECT COUNT(comment) FROM comments WHERE id = " + \
            str(post_id) + ";"
        try:
            cursor.execute(sql)
            return cursor.fetchall()
        except:
            return None
