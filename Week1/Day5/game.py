import random

class Game():
    array = ["ciseaux","pierre","feuille"]

   
       
    
    def get_user_item(self):
        
         while True :
            choice_uti= input('entrer (pierre/feuille/ciseaux').lower()
            print(choice_uti)
            if choice_uti in self.array:
                return choice_uti
            print("Choix invalide, essayez encore.")


    def get_computer_item(self):
         choice_comp = random.choice(self.array)
         
         return choice_comp
    def get_game_result(self,user_item , computer_item):
        if user_item==computer_item:
            return "match nul"
        elif  (user_item == "pierre" and computer_item == "ciseaux") or (user_item == "feuille" and computer_item == "pierre") or (user_item == "ciseaux" and computer_item == "feuille"):
            return "victoire"
        
        else:
            return "perte"
    def play(self):
        user_choice = self.get_user_item()
        comp_choice = self.get_computer_item()
        resultat = self.get_game_result(user_choice,comp_choice)
        if resultat =="match nul":
              print(f"C'est un match nul !  vous avez choisi {user_choice} et le computer a choisi {comp_choice} ")
              
        elif resultat == "perte":
             print(f"Dommage, vous avez perdu  ! vous avez choisi {user_choice} et le computer a choisi {comp_choice} ")
        else :
            print(f"Félicitations, vous avez gagné !  vous avez choisi {user_choice} et le computer a choisi {comp_choice}")
        print(resultat)
        return resultat
        
