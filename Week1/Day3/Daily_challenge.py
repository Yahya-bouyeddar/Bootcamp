class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}
    
    def add_animal(self, animal, quantity=1):
        if animal in self.animals:
            self.animals[animal] += quantity
        else:
            self.animals[animal] = quantity
    
    def get_info(self):
        farm_info = f"{self.name}'s farm\n"
        for animal, quantity in self.animals.items():
            farm_info += f"{animal} : {quantity}\n"
        farm_info += "\n    E-I-E-I-O!"
        return farm_info
    def get_animal_types(self):
        return sorted(self.animals.keys())
    
    def get_short_info(self):
        animal_types = self.get_animal_types()
        animal_types = [animal if animal == 'sheep' else animal + 's' for animal in animal_types]
        return f"La ferme {self.name} possède des {', '.join(animal_types)}."


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())