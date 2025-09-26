![Node.js Logo](https://camo.githubusercontent.com/08c3af511bac45a39004c14d832c11eefd5e8c2ed169047053fff96422a1956a/68747470733a2f2f656c7a65726f2e6f72672f6a732e706e67)
 # ElZero Platform Exercises

This repository contains my solutions to exercises from the Zero platform.

## 🏗️ Project Structure

- Each exercise is in its own folder: `exercises/exercise_[number]/`
- Solutions are in `solution.[ext]` files
- Tests (if any) are in `test_solution.[ext]`

## 📚 Exercises
# Assignment 01
You have the following Constructor Function and are required to convert it to Class Syntax.  
Do not rely on the program; do it yourself to ensure you know the Syntax.
## Requirements:
1. Add two methods:
   - One named `run`
   - One named `stop`
     
   Each method should contain a message:  
   - The first: `"Car Is Running Now"`  
   - The second: `"Car Is Stopped"`

2. Create three cars using this Class with any data you choose.
3. Print the data of the first car in the Console using the method shown below.
4. On the next line, print the method named `run`.

### Original Constructor Function:
```javascript
function Car(name, model, price) {
  this.n = name;
  this.m = model;
  this.p = price;
}
```

### Expected Output:
```
"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"
```

**Solution:** [Assignment.js](./assignment01.js)

---

# Assignment 02

We have the following Class named `Phone`.  
We need to create another Class named `Tablet` that inherits from the `Phone` Class.

## Requirements:
- The `Tablet` Class should have an additional property: `size`
- It should also contain a method named `fullDetails`
- We used the `Tablet` Class to create multiple tablets
- We then used the `fullDetails` method to print data about the tablet
- Your task is to create the `Tablet` Class to display the data as shown below
- If the user doesn't provide a `size`, it should display "Unknown"

### Original Class:
```javascript
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}
```

### Test Code:
```javascript
// Write Tablet Class Here

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
```

### Expected Output:
```
iPad Serial is 100200300 And Size Is 12.9
Nokia Serial is 350450650 And Size Is 10.5
LG Serial is 250450650 And Size Is Unknown
```


**Note:** Create the `Tablet` Class to achieve the expected output.

**Solution:** [assignment02.js](./assignment02.js)

---

# Assignment 03

We have the following Class named `User`.  
We need to modify it as required to achieve the functionality described below.

## Requirements:
1. Prevent direct access to the `card` property
2. When creating users, you'll notice each person wrote the Card Number differently
3. We need all numbers to be formatted as a String with a `-` after every 4 digits, as shown in the Output
4. You cannot modify the user creation lines or the console.log statements

### Original Class:
```javascript
// Edit The Class
class User {
  constructor(username, card) {
    this.u = username;
    this.c = card;
  }
}
```

### Test Code (Do Not Edit):
```javascript
// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
```

### Expected Output:
```
Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
Undefined
```

### Hints:
- You can use Getters to make a method behave like a property
- You can use Regular Expressions to format the number as a Credit Card
---

**Note:** Modify the `User` Class to achieve the expected functionality without changing the test code.

**Solution:** [exercises/exercise_3/solution.java](./exercises/exercise_3/solution.java)

## 🚀 How to Run

```bash
# Navigate to exercise folder
cd exercises/exercise_1

# Run the solution
python solution.py

# Run tests (if available)
python test_solution.py
```

![Static Badge]([https://img.shields.io/badge/:badgeContent](https://img.shields.io/badge/just%20the%20message-8A2BE2))










