class dog :
    def __init__(self , dog_name , dog_height):
        self.name = dog_name
        self.height = dog_height

    def bark(self):
        print(f'{self.name} fait ouaf !')

    def jump(self):
        print(f'{self.name} saute {self.height*2} cm de haut !')



davids_dog = dog('Rex',50 )
print(davids_dog.name)
print(davids_dog.height)
davids_dog.jump()
davids_dog.bark()


sarahs_dog = dog('Teacup',20 )
print(sarahs_dog.name)
print(sarahs_dog.height)
sarahs_dog.jump()
sarahs_dog.bark()


if sarahs_dog.height > davids_dog.height:
    print(f'le plus grand chien est {sarahs_dog.name}')
else:
    print(f'le plus grand chien est {davids_dog.name}')



   


