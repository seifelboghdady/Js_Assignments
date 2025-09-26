![Node.js Logo](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg)
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

---

**Note:** Create the `Tablet` Class to achieve the expected output.
**Solution:** [exercises/exercise_2/solution.js](./exercises/exercise_2/solution.js)

---

### Exercise 3: [Exercise Title]
**Question:** [Paste the exercise question here]

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








