import math

class Circle:
    def __init__(self, radius):
       
        self.radius = radius

    @property
    def diameter(self):
        
        return self.radius * 2

    @property
    def area(self):
        
        return math.pi * (self.radius ** 2)

    def __str__(self):
       
        return f"Cercle de rayon {self.radius}, diamètre {self.diameter}, aire {self.area:.2f}"

    def __add__(self, other):
      
        if isinstance(other, Circle):
            return Circle(self.radius + other.radius)
        

    def __lt__(self, other):
       
        if isinstance(other, Circle):
            return self.radius < other.radius
        

    def __eq__(self, other):
        
        if isinstance(other, Circle):
            return self.radius == other.radius
        return False


c1 = Circle(5)
c2 = Circle(8)
c3 = Circle(3)

print(c1)  
print(c2)  
print(f"Aire du cercle 1: {c1.area}")
print(f"Diamètre du cercle 2: {c2.diameter}")


c4 = c1 + c2
print(f"Nouveau cercle après addition : {c4}")




circles = [c1, c2, c3, c4]
sorted_circles = sorted(circles)  
print("Cercles triés par rayon :")
for c in sorted_circles:
    print(c)
