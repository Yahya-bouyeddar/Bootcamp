# La classe Family
class Family:
    def __init__(self, nom_de_famille, membres):
        self.nom_de_famille = nom_de_famille
        self.membres = membres

    def born(self, **kwargs):
        self.membres.append(kwargs)
        print(f"Félicitations à la famille {self.nom_de_famille} pour l'arrivée de {kwargs.get('name')}")

    def is_18(self, nom):
        for membre in self.membres:
            if nom == membre.get('name'):
                if membre.get('age') >= 18:
                    return True
                else:
                    return False

    def family_presentation(self):
        print(f"Voici la famille {self.nom_de_famille}:")
        for membre in self.membres:
            print(f"Nom: {membre.get('name')}, Âge: {membre.get('age')}, Genre: {membre.get('gender')}, Est-ce un enfant: {membre.get('is_child')}")
            print(f"Pouvoir: {membre.get('power')}, Nom incroyable: {membre.get('incredible_name')}")


class TheIncredibles(Family):
    def __init__(self, nom_de_famille, membres):
        super().__init__(nom_de_famille, membres)

    def use_power(self, nom):
        for membre in self.membres:
            if membre.get('name') == nom:
                if membre.get('age') >= 18:
                    print(f"{membre.get('name')} utilise son pouvoir: {membre.get('power')}")
                    return
                else:
                    raise Exception(f"{membre.get('name')} n'a pas plus de 18 ans pour utiliser son pouvoir.")
    
    def incredible_presentation(self):
        print(f"Voici notre puissante famille {self.nom_de_famille}:")
        super().family_presentation()


membres_incredibles = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

famille_incredible = TheIncredibles('Incredibles', membres_incredibles)


famille_incredible.incredible_presentation()

famille_incredible.born(name='Baby Jack', age=1, gender='Male', is_child=True, power='Unknown power', incredible_name='BabyJack')

famille_incredible.incredible_presentation()


famille_incredible.use_power('Michael')  

