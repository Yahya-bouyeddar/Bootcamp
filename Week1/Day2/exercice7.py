import random
def get_random_temp(saison):
      if saison == "hiver":
        return random.randint(-10, 5)
      elif saison== "printemps" :
          return random.randint(5, 10)
      elif  saison == "été":
           return random.randint(25, 40)
      elif  saison == "automne":
          return random.randint(10, 25)
  

def main():
    saison_utilisateur = input('donne moi une saison')
    var = get_random_temp(saison_utilisateur)
    print(f"La température actuelle est de {var} degrés Celsius")
    if var < 0 :
        print("Brrr, il fait un froid glacial ! Portez des couches supplémentaires aujourd'hui ")
    elif 0 <= var <= 12:
        print(" Il fait plutôt froid ! N'oubliez pas votre manteau")
    elif  16 <= var <= 23 :
        print("Il fait pas froid ! mais tu dois emmener votre jacket") 
    elif 24 <= var <= 32 :
        print("Il fait chaud ! n'oublie pas votre casquette")
    elif var > 32 :
        print("il fait tres chaud , allume ta climatisateur")

    
for i in range(3):
    main()
   
    





main()