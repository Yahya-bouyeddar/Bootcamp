

class  Song() :
   
   def __init__(self,lycris):
      self.x = lycris
   def sing_me_a_song(self):
       for ligne in self.lycris:
            print(ligne)
         
      
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])



stairway.sing_me_a_song()     