import mysql.connector


def conn_db():
    conn = mysql.connector.connect(
        host='mysql',
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
        sql = "SELECT id,user_name,description,isParent FROM users WHERE email = '" + \
            email + "' AND password = '" + password + "';"

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

    def patch_user_name(self, user_id, user_name):
        conn = conn_db()
        cursor = conn.cursor()
        sql = "UPDATE users SET user_name = '" + user_name + \
            "' WHERE id = " + str(user_id) + ";"
        print(sql)
        try:
            cursor.execute(sql)
            conn.commit()
            return True
        except:
            return None

    def patch_user_description(self, user_id, description):
        conn = conn_db()
        cursor = conn.cursor()
        sql = "UPDATE users SET description = '" + description + \
            "' WHERE id = " + str(user_id) + ";"
        print(sql)
        try:
            cursor.execute(sql)
            conn.commit()
            return True
        except:
            return None

    def get_comment_cnt(self, post_id) -> str:
        conn = conn_db()
        cursor = conn.cursor()
        sql = "SELECT COUNT(comment) FROM comments WHERE post_id = " + \
            str(post_id) + ";"
        try:
            cursor.execute(sql)
            return cursor.fetchall()
        except:
            return None


class Posts:
    def _open(self):
        self.dbh = mysql.connector.MySQLConnection(**self.dns)

    def get_post(self, post_id) -> list:
        conn = conn_db()
        cursor = conn.cursor()
        sql = "SELECT id,user_id,title,description,created_at FROM posts WHERE id = " + \
            str(post_id) + ";"
        try:
            cursor.execute(sql)
            return cursor.fetchall()
        except:
            return None

    def get_comments(self, post_id) -> list:
        conn = conn_db()
        cursor = conn.cursor()
        sql = "SELECT id,post_id,user_id,comment,created_at FROM comments WHERE post_id = " + \
            str(post_id) + ";"
        print(sql)
        try:
            cursor.execute(sql)
            return cursor.fetchall()
        except:
            return None

    def post(self, user_id, title, description) -> list:
        conn = conn_db()
        cursor = conn.cursor()
        sql = "INSERT INTO posts (user_id,title,description) VALUES(" + \
            str(user_id) + ",'" + str(title) + \
            "','" + str(description) + "');"
        try:
            cursor.execute(sql)
            conn.commit()
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

    def post_comment(self, id, user_id, comment) -> list:
        conn = conn_db()
        cursor = conn.cursor()
        sql = "INSERT INTO comments (post_id,user_id,comment) VALUES('" + \
            str(id) + "','" + str(user_id) + "','" + str(comment) + "');"
        print(sql)

        try:
            cursor.execute(sql)
            conn.commit()
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

    def comment_user_get(self, id) -> list:
        conn = conn_db()
        cursor = conn.cursor()
        sql = "SELECT user_id FROM comments WHERE id = " + str(id) + ";"
        cursor.execute(sql)
        result = cursor.fetchall()
        cursor.close
        conn.close
        return result

    def delete_comment(self, id) -> list:
        conn = conn_db()
        cursor = conn.cursor()
        try:
            sql = "DELETE FROM comments WHERE id = " + str(id) + ";"
            cursor.execute(sql)
            conn.commit()
            cursor.close
            conn.close
            return True
        except:
            cursor.close
            conn.close
            return False

    def delete_post(self, id) -> list:
        conn = conn_db()
        cursor = conn.cursor()
        try:
            sql = "DELETE FROM posts WHERE id = " + str(id) + ";"
            cursor.execute(sql)
            conn.commit()
            cursor.close
            conn.close
            return True
        except:
            cursor.close
            conn.close
            return False

    def delete_comment_post(self, id) -> list:
        conn = conn_db()
        cursor = conn.cursor()
        try:
            sql = "DELETE FROM comments WHERE post_id = " + str(id) + ";"
            cursor.execute(sql)
            conn.commit()
            cursor.close
            conn.close
            return True
        except:
            cursor.close
            conn.close
            return False
