function printObjectMethods(obj) {
        const properties = Object.getOwnPropertyNames(obj);
    
     const methods = properties.filter(prop => typeof obj[prop] === 'function');
    
        methods.forEach(method => console.log(method));
  }
  
   const exampleObject = {
    name: "Example",
    greet() {
      console.log("Hello!");
    },
    farewell() {
      console.log("Goodbye!");
    },
    nonMethodProperty: "Just a string"
  };
  
  printObjectMethods(exampleObject);
  