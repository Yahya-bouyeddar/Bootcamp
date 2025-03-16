mois  = int(input("donner moi un mois "))


if 3 <= mois <= 5:
    print('la saison est Spring ')
elif 6 <= mois <= 8:
    print('la saison est Summer ')
elif mois == 1 and mois == 2 and mois == 12:
    print('la saison est Winter ')
else  :
    print('la saison est autumn ')

