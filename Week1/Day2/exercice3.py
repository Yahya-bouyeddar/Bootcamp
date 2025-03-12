#  Créez un dictionnaire appelé branddont la valeur est l'information de la première partie (transformez les informations en clés et valeurs).
brand ={
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": "pink, green"
    }
}
# 2. Modifiez le nombre de magasins à 2.
brand["number_stores"] = 2
print(brand['type_of_clothes'])
brand['country_creation'] = "Espagne"

if "international_competitors" in brand:
    brand["international_competitors"].append('Desigual')

del brand["creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]['US'])

print(len(brand))
print(brand.keys())

more_on_zara = {
     "creation_date":1975,
     "number_stores": 10000
}
brand.update(more_on_zara)
print(brand)
print(brand["number_stores"])