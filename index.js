function sayHello() {
  const date = new Date().toLocaleDateString();  
    return "Hello, World! Today is the " + date + ". BTW je ne pense pas être un moteur pour cette classe.";
}

module.exports = sayHello;