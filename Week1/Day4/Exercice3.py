from Exercice2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
         super().__init__(name, age, weight)
         self.trained = trained
    def train(self):
         self.bark()
         self.trained = True
    def play(self,*args):
        dog_names = " et ".join(args)
        print(f"{dog_names} tous jouent ensemble")
    def do_a_trick(self):
         array = [
                f"{self.name} fait un tonneau.",
                f"{self.name} se tient sur ses pattes arrières.",
                f"{self.name} te serre la main.",
                f"{self.name} fait le mort."
            ]
         if self.trained:
              print(f'{random.choice(array)}')
         else:
               print(f"{self.name} n'est pas encore formé pour faire un tour.")
         
dog1 = PetDog("Buddy", 3, 20)
dog2 = PetDog("Max", 5, 25)
dog3 = PetDog("Charlie", 2, 15)
dog1.do_a_trick()  
dog2.do_a_trick()  
dog3.do_a_trick()

dog1.train()  
dog2.train()  
dog3.train()


dog1.do_a_trick()  
dog2.do_a_trick()  
dog3.do_a_trick()

