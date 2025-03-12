import random
number_aleatoire = int(random.randint(1, 100))
number_utilisateur = int(input('enter un nombre'))

print(number_aleatoire)
def guess_number(number):
    if 1<=number<=100 :
          if number_aleatoire == number_utilisateur :
               print('bravo! vous avez trouver le numero ')
          else:
               print("echec")
               
    else:
          print("Le nombre doit être entre 1 et 100.")

guess_number(number_utilisateur)






    