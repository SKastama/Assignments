// Question 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // Prediction: The 1st car in the cars list, Tesla
console.log(otherRandomCar) // Prediction: The 2nd car in the cars list, Mercedes


// Question 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // Prediction: Cannot put key value into the curly braces, we must call it a different name
console.log(otherName); // Prediction: By calling it a different name than the key, we can assign it to variable


// Question 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // Prediction: Will produce "12345"
console.log(hashedPassword); // Prediction: Will produce undefined due to the person dictionary not containing a key with the name "password"


// Question 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);  // Prediction: Will be false due to the [,first] being actually the 2nd number, which is 2
console.log(first == third); // Prediction: Will be true due to the the 2nd value being 2 and the last value being 2


// Question 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // Prediction: Will return "value"
console.log(secondKey); // Prediction: Will return array of [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // Prediction: Will return the 1st value of the array which is 1
console.log(willThisWork); // Prediction: Will return the 2nd value of the array which is five



