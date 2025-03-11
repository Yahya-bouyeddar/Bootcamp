

chaine =input('enter une chaine de caractaire') 
length = len(chaine)
list = chaine[0]



for i in range(1,length):
    
   if chaine[i]!=chaine[i-1]:
      
      list += chaine[i]
     


print(list)
   



