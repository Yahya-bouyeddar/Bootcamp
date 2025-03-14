from game import Game 

def get_user_menu_choice():
    print("\nMenu :")
    print("1. Jouer à une nouvelle partie")
    print("2. Afficher les scores")
    print("3. Quitter")
    choix = {"1":"Jouer à une nouvelle partie","2":"Afficher les scores","3":"Quitter"}
    choix_utilisateur = input("enter 1,2,3")
    if choix_utilisateur in choix.keys():
        print(f'{choix[choix_utilisateur]}')
    else:
        print("Choix invalide. Veuillez entrer 1, 2 ou 3.")
    return choix_utilisateur
    
def print_results(results):
    if len(results) == 0:
        print("Aucune partie n'a été jouée.")
    else:
        print(f'Victoir:{results.get('win',0)}')
        print(f'pertes:{results.get('loss',0)}')
        print(f'egalité:{results.get('draw',0)}')
        victoires= results.get('win',0)
        pertes = results.get('loss',0)
        egalites = results.get('draw',0)
        print(f"Victoires : {victoires}, Pertes : {pertes}, Egalités : {egalites}")


def main():
     dic={"victoire":0,"perte":0,"match nul":0}
     while True:
        user = get_user_menu_choice()
       
        if user == "1":
            game = Game()
            result = game.play()
            print("Vous avez choisi de jouer à une nouvelle partie.")
            dic[result]=dic[result]+1

           
        elif user == "2":
            print("Vous avez choisi d'afficher les scores.")
            print(f'Victoir : {dic["victoire"]} \n perte : {dic["perte"]}\n draw : {dic["match nul"]}')
            
        elif user == "3":
            print("Vous avez choisi de quitter.")
            print(f'Victoir : {dic["victoire"]} \n perte : {dic["perte"]}\n draw : {dic["match nul"]}')
            
            break  
        elif user.lower() in ["x", "q"]:
            print("Merci d'avoir joué ! À bientôt.")
            print(f'Victoir : {dic["victoire"]} \n perte : {dic["perte"]}\n draw : {dic["match nul"]}')
            break  
        else:
            print("Choix invalide, veuillez entrer 1, 2, 3 ou q/x pour quitter.")
        


main()                      
            
        




