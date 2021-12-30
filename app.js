const menu = {
    _courses: {
      appetizers: [],
      mains:[],
      desserts: []
    },
    // getters are ways for us to return an object's specific values whereas setters are ways for us to reassign an object's specific values
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(newAppetizer) {
      this._courses.appetizers = newAppetizer
    },
    set mains(newMain) {
      this._courses.mains = newMain
    },
    set desserts(newDessert) {
      this._courses.desserts = newDessert
    },
    get courses() { // courses() is the name of the getter method (function) and is referencing _courses
      return { // this will return the arrays from the respective getter methods when invoking with menu.courses, we could also use return this._courses
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = { // _courses is a property with other properties nested inside of it whereas dish is a new object and should be declared with a const
        dishName: dishName,
        dishPrice: dishPrice
        };
        return this._courses[courseName].push(dish); // since we are entering in courseName as a string, we need to use brackets instead of dot notation
    },
    getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex]; // should we be using .this?
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      // important: values of properties will either be numbers are strings, if they are strings they should be entered with quotation marks
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice;
      return `Your meal is ${appetizer.dishName}, ${main.dishName}, and ${dessert.dishName}. Your total is $${totalPrice}.`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25)
  menu.addDishToCourse('appetizers', 'French Fries', 4.00)
  menu.addDishToCourse('appetizers', 'Soup', 5.00)
  
  menu.addDishToCourse('mains', 'Cheeseburger', 8.00)
  menu.addDishToCourse('mains', 'Pasta', 7.00)
  menu.addDishToCourse('mains', 'Steak', 9.00)
  
  menu.addDishToCourse('desserts', 'Ice Cream', 3.00)
  menu.addDishToCourse('desserts', 'Cake', 4.00)
  menu.addDishToCourse('desserts', 'Creme Brulee', 5.00)
  
  let randomMeal = menu.generateRandomMeal();
  console.log(randomMeal);