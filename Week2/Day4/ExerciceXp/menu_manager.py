import psycopg2
from menu_item import MenuItem
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '12345678'
DATABASE = 'Restaurant'
connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )

class MenuManager():
    @staticmethod
    def get_by_name(name,connection):
        cursor = connection.cursor()
        query =  "select * FROM Menu_Items WHERE item_name = %s"
        cursor.execute(query, (name,))
        result = cursor.fetchone()
        return result
    
        
    @staticmethod
    def all_items(connection):
        cursor = connection.cursor()
        query =  f"select * FROM Menu_Items "
        cursor.execute(query)
        result = cursor.fetchall()
        connection.commit()
        return result






# item = MenuItem('Burger', 35)
# item2 = MenuManager()
# item.save(connection)
# item.delete('burgerXL',connection)
# item.update('Burger', 'tacos',37,connection)
# item2 = MenuManager.get_by_name('Pizza',connection)
# item3 = MenuManager.all_items(connection)
# print(item2)
# print(item3)



