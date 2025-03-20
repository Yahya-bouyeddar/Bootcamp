import psycopg2
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '12345678'
DATABASE = 'dvdrental'
connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
cursor = connection.cursor()

# query = "SELECT * FROM customer LIMIT 20;"
# cursor.execute(query)
# results = cursor.fetchall()


# def create_table(table_name: str): 
#     """create new table with id, num"""

#     query = f'''

#     create table {table_name}(
#         id serial primary key,
#         num integer not null
#     );
#     '''
#     cursor.execute(query) 
#     connection.commit() 


# def insert_into_table(table_name: str, num_value: int):

#     query = f'''
#     insert into {table_name}(num)
#     values
#     ({num_value})
#     '''
#     cursor.execute(query)
#     connection.commit()



# def select_all(table_name: str):

#     query = f'''
#     select * from {table_name};
#     '''

#     cursor.execute(query)
#     connection.commit()
#     output = cursor.fetchall()
#     return output

import psycopg2   # importing a module to connect to postgres
import psycopg2.extras

# defining our connection criteria
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '12345678'
DATABASE = 'dvdrental'

# making the connection to the database
connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)

# accessing the query editor
# cursor = connection.cursor()
cursor = connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)

# defining the query
query = "SELECT * FROM actor"

# running the query
cursor.execute(query)

# fetching the results
results = cursor.fetchall()

# closing the connection
connection.close()
# display results
for item in results:
    print(item)

