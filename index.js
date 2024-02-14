function sayHello() {
  const date = new Date().toLocaleDateString();  
    return "Hello, World! Today is the " + date + ".";
}

module.exports = sayHello;