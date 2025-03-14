class Family:
    def __init__(self,nom_de_famille,membres):
        self.nom_de_famille = nom_de_famille 
        self.membres = membres
    def born(self,**kwargs):
        self.membres.append(kwargs)
        print(f"Félicitations à la famille {self.nom_de_famille} pour l'arrivée de {kwargs.get('name')}")
    def is_18(self,nom):
        for membre in self.membres:
            if nom == membre.get('name'):
                if membre.get('age')>=18:
                    return True
                else:
                    return False
                
    def family_presentation(self):
        for membre in self.membres:
            for key , value in membre.items():
                print(f"  {key}: {value}")

family = Family( "elouazzani",[
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
])
family.born(name="Emily", age=3, gender="Female", is_child=True)
print(f"Is Sarah 18 or older? {family.is_18('Sarah')}") 
family.family_presentation()