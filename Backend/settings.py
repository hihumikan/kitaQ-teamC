class SystemConfig:

  DEBUG = True

  SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://{user}:{password}@{host}/{db_name}?charset=utf8'.format(**{
      'user': 'root',
      'password': 'root_password',
      'host': '127.0.0.1',
      'db_name': 'db'
  })

Config = SystemConfig