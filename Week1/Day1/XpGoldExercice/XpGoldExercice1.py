

mois = int(input('entrer un mois de 1 à 12'))

if   3 <= mois <= 5 :
    saison = "Spring"
elif 6 <= mois <= 8 :
     saison = "Summer"
elif 9 <= mois <= 11 :
      saison = "Autumn"
elif mois == 1 or mois == 12 or mois ==2 :
      saison = "Winterse"
     
else:
     saison = 'mois invalide'


if saison != 'mois invalide' :
     print(f"La saison du mois {mois} est : {saison}")
else :
     print("Veuillez entrer un numéro de mois valide (1-12).")
     
     

    

         

    


