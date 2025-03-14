
class Dog():
    def __init__(self,name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        print(f'{self.name} aboie')

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        self_score = self.run_speed() * self.weight 
        other_dog_score = other_dog.run_speed() * other_dog.weight
        if self_score > other_dog_score:
            print(f"{self.name} a remporté le combat !") 
        else: 
            print(f"{other_dog.name} a remporté le combat !") 
        
dog1 = Dog("Rex", 5, 20)  
dog2 = Dog("Bella", 3, 25)  
dog3 = Dog("Max", 4, 22) 

print(f'{dog1.name} a {dog1.age} ans et il a {dog1.weight} kg' )
print(f'{dog2.name} a {dog2.age} ans et il a {dog2.weight} kg' )
print(f'{dog3.name} a {dog3.age} ans et il a {dog3.weight} kg' )
dog1.bark()
dog2.bark()
dog3.bark()
print(dog1.run_speed())
print(dog2.run_speed())
print(dog3.run_speed())

dog1.fight(dog2)
dog2.fight(dog3)
dog3.fight(dog1)