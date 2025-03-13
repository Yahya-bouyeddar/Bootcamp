class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age




cat1 = Cat('rosé',5)
cat2 = Cat('mimir',3)
cat3 = Cat('fulla',9)

print(cat1.age)
print(f'Cat1 sappelle {cat1.name} et son age est {cat1.age}')
print(f'Cat2 sappelle {cat2.name} et son age est {cat2.age}')
print(f'Cat3 sappelle {cat3.name} et son age est {cat3.age}')

cats = [cat1,cat2,cat3]

def Big_cat():
    max_age=0
    for x in cats:
        if x.age > max_age:
            max_age = x.age
    print(f"Le chat le plus âgé est {x.name}, et a {x.age}ans.")


Big_cat()





