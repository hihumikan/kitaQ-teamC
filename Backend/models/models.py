Class User:
  def get_users(self) -> list:
    sql = "SELECT * FROM user;"
    try:
      self.cur.execute(sql, data)
      return self.cur.fetchall()
    except:
      return None