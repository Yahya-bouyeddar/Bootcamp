import psycopg2
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '12345678'
DATABASE = 'Restaurant'
connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )


class MenuItem():
    
    def __init__(self,item_name,item_price=0):
        self.item_name = item_name
        self.item_price = item_price
      

    def save(self,connection): 
       cursor = connection.cursor()
       query = f'''insert into Menu_Items(
       item_name, item_price)
       values('{self.item_name}',{self.item_price})
       
    '''
       cursor.execute(query)
   
       connection.commit()
       
       cursor.close()

    
    def delete(self,connection):
        cursor = connection.cursor()
        query =  f"DELETE FROM Menu_Items WHERE item_name = '{self.item_name}'"
        cursor.execute(query)
        connection.commit()
        cursor.close()
    
    def update(self,nameUp,priceUp,connection):
        cursor = connection.cursor()
        query =  f"update Menu_Items set item_name='{nameUp}' , item_price='{priceUp}' WHERE item_name = '{self.item_name}'"
        cursor.execute(query)
        connection.commit()
        cursor.close()




item = MenuItem('yhi')
# # item.save(connection)
item.update('burgerXL',130,connection)
# MenuItem().delete('pizza margarita')

  

    