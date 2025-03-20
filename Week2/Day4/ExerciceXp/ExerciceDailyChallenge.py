import requests
import psycopg2
import random
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '12345678'
DATABASE = 'ExerciceDailyChallenge'
connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )

def insert_country(name, capital, population, flag, subregion):
    cursor = connection.cursor()
    query = f'''insert into Countries (name, capital, population, region, subregion)
    values ('{name}','{capital}','{population}','{flag}','{subregion}')'''
    cursor.execute(query)
    

def get_countries():
    url = "https://restcountries.com/v3.1/all"
    response = requests.get(url)
    
    if response.status_code == 200:  
        all_countries = response.json()
        random_countries = random.sample(all_countries, 10)
        for country in random_countries:
            name = country.get('name', {}).get('common', 'Unknown')  
            capital = country.get('capital', ['Unknown'])[0] if 'capital' in country else 'Unknown'  
            population = country.get('population', 0) 
            region = country.get('region', 'Unknown')  
            subregion = country.get('subregion', 'Unknown')
            insert_country(name, capital, population, region, subregion)  
            print(f"Ajouté : {name} - Capitale : {capital}")
        connection.commit()
    
        connection.close() 
          
    else:
        print("Erreur lors de la récupération des pays depuis l'API.") 
  
if __name__ == "__main__":
    get_countries()
