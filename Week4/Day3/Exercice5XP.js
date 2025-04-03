class Dog {
    constructor(name) {
      this.name = name;
    }
  };


//   option 2 est correcte 
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };