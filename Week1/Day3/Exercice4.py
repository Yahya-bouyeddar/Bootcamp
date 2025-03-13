

class Zoo():
    def __init__(self,zoo_name):
        self.name = zoo_name
        self.animals = []
    def add_animal(self , new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"nouvou annimal {new_animal} est ajouté au {self.name}")
        else:
            print(f"{new_animal} est déjà présent dans le zoo {self.name}.")
    def get_animals(self):
        print(self.animals)

    def sell_animal(self,animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} a été vendu.")
        else:
            print(f"{animal_sold} n'est pas dans le zoo.")
    def sort_animals(self):
        sorted_animals=sorted(self.animals)
        animals_dictionnaire = {}
        for animal in sorted_animals:
            first_letter=animal[0]
            if first_letter not in animals_dictionnaire:
                animals_dictionnaire[first_letter]=[animal]
            else:
                animals_dictionnaire[first_letter].append(animal)
        return animals_dictionnaire
    def get_groups(self):
        animals_by_letter = self.sort_animals()  
        for letter, animals in animals_by_letter.items():
            print(f"{letter}:")
            for animal in animals:
                print(f" {animal}")

new_york_zoo = Zoo("New York Zoo")
new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Elephant")
new_york_zoo.add_animal("Bee")

new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Lion")
new_york_zoo.add_animal("Zebra")

new_york_zoo.get_animals()
new_york_zoo.sell_animal("Lion")
new_york_zoo.sort_animals()
new_york_zoo.get_groups()



                


    