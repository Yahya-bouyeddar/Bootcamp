family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# n = input('combien les membre de famille')

def calcule_prix(age):
    if age<3 :
        return 0
    elif 3<=age<=12:
        return 10
    else :
        return 15
    


    
total = 0
nombre = 0
   
for nom , age in family.items():

    total += calcule_prix(age)
#     nombre+= 1

print(f'le cous total des film pour la famille est : {total}')
# print(f'le nombre des personnes qui vont payer est :  {nombre}')


# for item in range(1,n):
#  family2 = {}
#  nomBonus = input("Entrez le nom du membre de la famille : ")
#  ageBonus = int(input("Entrez l'âge  : "))
#  family2[nomBonus] = age




# total2 = 0
# for nom2,age2 in family2.items():
#     total2 =+ calcule_prix(age2)

# print(f'le cous total des film pour la famille est : {total2}')



