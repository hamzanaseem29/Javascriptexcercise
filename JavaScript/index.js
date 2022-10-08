// Q2 Hamza 29/9/2022 This program will print the message to the person
let person = "Hamza";
console.log("Hi " + person + ", would you like to learn some Python today?");

//Q3 Hamza 29/9/2022 This program will print the personname in lower,Upper and title case

let personName = "Hamza";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
//TitleCase

//Q4 Hamza 29/9/2022 This program will print the quotes and Quotation

let quote =
    "Your time is limited, so don't waste it living someone else's life.";
console.log('"' + quote + '"');

//Q5 Hamza 29/9/2022 This program will print the name of famous person and his quote

let famous_person = "Elon Musk:";
let message =
    famous_person +
    '"Some people don\'t like change, but you need to embrace change if the alternative is disaster."';
console.log(message);

//Q6 Hamza 29/9/2022 This program will remove whiteSpaces

let whiteSpaceName = "\tHamza Naseem\n";
console.log(whiteSpaceName);
console.log(whiteSpaceName.trim());

//Q7 Hamza 29/9/2022 This program will print addition,subtraction,multiplication and division

console.log(16 - 8);
console.log(4 + 4);
console.log(2 * 4);
console.log(16 / 2);

//Q9 Hamza 29/9/2022 This program will print the favorite number of a person with a message

let num = 80;
let msg = "My favorite number is " + num;
console.log(msg);

//Q10 Hamza 29/9/2022 Comments done

//Q11 Hamza 29/9/2022 This program stores names in an Array and print them

let names = ["hamza", "Asad", "Asif", "Ehsan", "Ahmed", "Salman", "Shahid"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
console.log(names[6]);

//Q12 Hamza 29/9/2022 This program stores names in an Array and print them and a message to

const names1 = ["hamza", "Asad", "Asif", "Ehsan", "Ahmed", "Salman", "Shahid"];
console.log(names[0] + " Hey, How are you?");
console.log(names[1] + " Hey, How are you?");
console.log(names[2] + " Hey, How are you?");
console.log(names[3] + " Hey, How are you?");
console.log(names[4] + " Hey, How are you?");
console.log(names[5] + " Hey, How are you?");
console.log(names[6] + " Hey, How are you?");

//Q13 Hamza 29/9/2022

const mode = ["motocycle", "car"];
console.log("I would like to own buy a honda " + mode[0]);
console.log("I would like to drive Prius " + mode[1]);

//Q14 Hamza 29/9/2022

const guest = ["Ahmed Ali", "Zeeshan Rauf", "Adam Bukhari"];
let guest_msg = ", You are invited to dinner";
console.log("Hey " + guest[0] + guest_msg);
console.log("Hey " + guest[1] + guest_msg);
console.log("Hey " + guest[2] + guest_msg);

//Q15 Hamza 30/9/2022
const changing_guest = ["Ahmed Ali", "Zeeshan Rauf", "Adam Bukhari"];
let changing_guest_msg = ", You are invited to dinner";
console.log("Hey " + guest[0] + changing_guest_msg);
console.log("Hey " + guest[1] + changing_guest_msg);
console.log("Hey " + guest[2] + changing_guest_msg);
console.log("Adam Bukhari will can’t make it.");
// Delete the last person in the list
changing_guest.pop();
//Adding new person in the list
changing_guest.push("Adeel Kami");
console.log(changing_guest[0] + changing_guest_msg);
console.log(changing_guest[1] + changing_guest_msg);
console.log(changing_guest[2] + changing_guest_msg);

//Q16 Hamza 30/9/2022

const changing_guest1 = ["Ahmed Ali", "Zeeshan Rauf", "Adam Bukhari"];
let changing_guest_msg1 = ", You are invited to dinner";
console.log("Hey " + guest[0] + changing_guest_msg1);
console.log("Hey " + guest[1] + changing_guest_msg1);
console.log("Hey " + guest[2] + changing_guest_msg1);
console.log("Adam Bukhari will can’t make it.");
// Delete the last person in the list
changing_guest1.pop();
//Adding new person in the list
changing_guest1.push("Adeel Kami");
console.log(changing_guest1[0] + changing_guest_msg1);
console.log(changing_guest1[1] + changing_guest_msg1);
console.log(changing_guest1[2] + changing_guest_msg1);

console.log("I found a bigger dinner table");

changing_guest1.unshift("Asad Ahmed");
changing_guest1.splice(2, 0, "hamza");
changing_guest1.push("Irfan");

console.log(changing_guest1[0] + changing_guest_msg1);
console.log(changing_guest1[1] + changing_guest_msg1);
console.log(changing_guest1[2] + changing_guest_msg1);
console.log(changing_guest1[3] + changing_guest_msg1);
console.log(changing_guest1[4] + changing_guest_msg1);
console.log(changing_guest1[5] + changing_guest_msg1);

//Q17 Hamza 5/10/2022
const changing_guest2 = ["Ahmed Ali", "Zeeshan Rauf", "Adam Bukhari"];
let changing_guest_msg2 = ", You are invited to dinner";
console.log("Hey " + guest[0] + changing_guest_msg2);
console.log("Hey " + guest[1] + changing_guest_msg2);
console.log("Hey " + guest[2] + changing_guest_msg2);
console.log("Adam Bukhari will can’t make it.");
// Delete the last person in the list
changing_guest1.pop();
//Adding new person in the list
changing_guest1.push("Adeel Kami");
console.log(changing_guest2[0] + changing_guest_msg2);
console.log(changing_guest2[1] + changing_guest_msg2);
console.log(changing_guest2[2] + changing_guest_msg2);

console.log("I found a bigger dinner table");
//Add new guest at the begining of an array
changing_guest2.unshift("Asad Ahmed");
//Add new guest in the middle of an array
changing_guest2.splice(2, 0, "hamza");
//Add new guest at the end of an array
changing_guest2.push("Irfan");

console.log(changing_guest2[0] + changing_guest_msg2);
console.log(changing_guest2[1] + changing_guest_msg2);
console.log(changing_guest2[2] + changing_guest_msg2);
console.log(changing_guest2[3] + changing_guest_msg2);
console.log(changing_guest2[4] + changing_guest_msg2);
console.log(changing_guest2[5] + changing_guest_msg2);

console.log("I can invite only two people for dinner");
sorry_msg = "I'm sorry I can’t invite you to dinner";
deleted_guest = changing_guest2.pop();
console.log(deleted_guest + ", " + sorry_msg);
deleted_guest1 = changing_guest2.pop();
console.log(deleted_guest1 + ", " + sorry_msg);
deleted_guest2 = changing_guest2.pop();
console.log(deleted_guest2 + ", " + sorry_msg);
deleted_guest2 = changing_guest2.pop();
console.log(deleted_guest2 + ", " + sorry_msg);
invited_guest_msg = ", You are still invited";
console.log("Hey " + changing_guest2[0] + invited_guest_msg);
console.log("Hey " + changing_guest2[1] + invited_guest_msg);
changing_guest2.pop();
changing_guest2.pop();
console.log(changing_guest2[0]);

//Q18 hamza 05/10/2022
const country_names = ["New York", "Canada", "America", "China", "England"];

console.log(country_names);
let sorting = country_names.slice().sort();
console.log(sorting);
console.log(country_names);

let reverse_order = country_names.slice().reverse();
console.log(reverse_order);
console.log(country_names);

country_names.reverse();
console.log(country_names);

console.log(country_names.reverse());
console.log(country_names.sort());
sortReverse = country_names.sort().reverse();
console.log(sortReverse);

//Q19 hamza 05/10/2022
const guest_names = ["Ahmed Ali", "Zeeshan Rauf", "Adam Bukhari"];
let number_of_people = guest_names.length;
console.log(number_of_people + " number of people I'm inviting to dinner!");

//Q20 hamza 05/10/2022
const languages = [
    "K2",
    "Himaliya",
    "Mount Everest",
    "Aconcagua",
    "Denali",
    "Urdu",
    "English",
    "French",
    "Arabic",
    "Hindi",
    "Spanish",
    "Nile",
    "Amazon",
    "Yangtze (Chang Jiang)",
    "Mississippi - Missouri",
    "Karachi",
    "Lahore",
    "Faislabad",
    "Islamabad",
    "Sialkot",
    "Pakistan",
    "China",
    "Japan",
    "America",
    "Canada",
    "Dubai",
];

//Q21 hamza 05/10/2022
let car_obj = {
    car_name: "Civic",
    car_model: "2022",
    car_color: "Gray",
    car_number: "KES 2312",
};
console.log(car_obj);

//Q23 hamza 05/10/2022
let car = "audi";
console.log("Is car == 'audi'? I predict True");
console.log(car == "audi");

let car1 = "audi";
console.log("Is car == 'honda'? I predict false");
console.log(car1 == "honda");

let car2 = "honda";
console.log("Is car == 'honda'? I predict true");
console.log(car2 == "honda");

let car3 = "suzuki";
console.log("Is car == 'honda'? I predict false");
console.log(car3 == "honda");

let car4 = "toyota";
console.log("Is car == 'toyota'? I predict true");
console.log(car4 == "toyota");

let car5 = "suzuki";
console.log("Is car == 'honda'? I predict false");
console.log(car5 == "honda");

let car6 = "bmw";
console.log("Is car == 'bmw'? I predict true");
console.log(car6 == "bmw");

let car7 = "bmw";
console.log("Is car == 'honda'? I predict false");
console.log(car7 == "honda");

let car8 = "bently";
console.log("Is car == 'bently'? I predict true");
console.log(car8 == "bently");

let car9 = "hyundai";
console.log("Is car == 'honda'? I predict false");
console.log(car9 == "honda");

//Q24 hamza 05/10/2022
//Tests for equality and inequality with strings

let fruit = "apple";
if (fruit == "apple") {
    console.log("fruit == apple");
    console.log(true);
} else {
    console.log(false);
}
let color = "red";
if (fruit != "white") {
    console.log("color != white");
    console.log(true);
} else {
    console.log(false);
}

//Tests using the lower case function

let name = "HAMZA NASEEM";
lower_case = name.toLowerCase();

if (lower_case == "hamza naseem") {
    console.log("hamza naseem == hamza naseem");
    console.log(true);
} else {
    console.log(false);
}
if (name == "hamza naseem") {
    console.log(true);
} else {
    console.log("HAMZA NASEEM == hamza naseem");
    console.log(false);
}
/* Numerical tests involving equality and inequality,
 greater than and less than, greater than or equal to, and less than or equal to*/
let num1 = 9;
let num2 = 8;

if (num1 == num2) {
    console.log(true);
} else {
    console.log("9 == 8");
    console.log(false);
}
if (num1 != num2) {
    console.log("9 != 8");
    console.log(true);
} else {
    console.log(false);
}
if (num1 > num2) {
    console.log("9>8");
    console.log(true);
} else {
    console.log(false);
}
if (num1 < num2) {
    console.log(true);
} else {
    console.log("9<8");
    console.log(false);
}
if (num >= num2) {
    console.log("9 >= 8");
    console.log(true);
} else {
    console.log(false);
}
if (num <= num2) {
    console.log(true);
} else {
    console.log("9 <= 8");
    console.log(false);
}

//Tests using "and" and "or" operators
let firstName = "hamza";
let LastName = "naseem";

if (firstName == "hamza" && LastName == "naseem") {
    console.log("firstName == hamza && LastName == naseem");
    console.log(true);
} else {
    console.log(false);
}

if (firstName == "hamza" || LastName == "naseem") {
    console.log("firstName == hamza || LastName == naseem");
    console.log(true);
} else {
    console.log(false);
}

//Test whether an item is in a array

let arr = ["apple", "karachi", "developer"];
if (arr[0] == "apple") {
    console.log("arr[0] == apple");
    console.log(true);
} else {
    console.log(false);
}

//Test whether an item is not in a array
if (arr[2] == "orange") {
    console.log(true);
} else {
    console.log("arr[2] == orange");
    console.log(false);
}
//Q25 hamza 05/10/2022

alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points");
}
if (alien_color == "red") {
}

//Q26 hamza 05/10/2022
alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("You just earned 5 points for shooting the alien");
} else {
    console.log("You just earned 10 points for shooting the alien");
}
alien_color2 = "yellow";
if (alien_color2 == "green") {
    console.log("You just earned 5 points for shooting the alien");
} else {
    console.log("You just earned 10 points for shooting the alien");
}

//Q27 hamza 05/10/2022

let alien_color3 = "green";
if (alien_color3 == "green") {
    console.log("You have earned 5 points");
}
let alien_color4 = "yellow";
if (alien_color4 == "yellow") {
    console.log("You have earned 10 points");
}
let alien_color5 = "red";
if (alien_color5 == "red") {
    console.log("You have earned 15 points");
}

//Q28 hamza 05/10/2022
//This program will check the age of the person
let age = 56;

// If the person is less than 2 years old, print a message that the person is a baby
if (age < 2) {
    console.log("The person is a baby");
}
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler
if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
// If the person is at least 4 years old but less than 13, print a message that the person is a kid
if (age >= 4 && age < 13) {
    console.log("The person is a kid");
}
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager
if (age >= 13 && age < 20) {
    console.log("The person is a teenager");
}
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
if (age >= 20 && age < 65) {
    console.log("The person is an adult");
}
// If the person is age 65 or older, print a message that the person is an elder
if (age >= 65) {
    console.log("The person is an elder");
}

//Q29 hamza 05/10/2022
//This program will check fruits names in an array

let favorite_fruits = ["banana", "apple", "grapes", "pineapple", "peach"];

if (favorite_fruits[0] == "banana") {
    console.log("I really like " + favorite_fruits[0]);
}
if (favorite_fruits[1] == "apple") {
    console.log("I really like " + favorite_fruits[1]);
}
if (favorite_fruits[2] == "grapes") {
    console.log("I really like " + favorite_fruits[2]);
}
if (favorite_fruits[3] == "pineapple") {
    console.log("I really like " + favorite_fruits[3]);
}
if (favorite_fruits[4] == "peach") {
    console.log("I really like " + favorite_fruits[4]);
}

//Q30 hamza 05/10/2022
//This program will print special greeting to admin and generic greeting to users

let users = ["admin", "salman", "kamran", "waqar", "admin"];

for (let i = 0; i <= users.length - 1; i++) {
    if (users[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello " + users[i] + ", thank you for logging in again.");
    }
}

//Q31 hamza 05/10/2022
let users1 = [];
for (let i = 0; i <= users.length - 1; i++) {
    if (users1[i] == undefined) {
        console.log("We need to find some users");
    }
}

//Q32 hamza 05/10/2022
/*This program will check username from newuser to currentusers
 and will print message not available if the username is already been taken*/
const current_users = [
    "hamza naseem",
    "asad ahmed",
    "ehsan ejaz",
    "ahmed ali",
    "asif riyaz",
];
const new_users = [
    "waqar ahmed",
    "Asad ahmed",
    "Eric",
    "salman hanif",
    "Asif riyaz",
];

for (let i = 0; i < new_users.length; i++) {
    if (current_users[i] == new_users[i].toLowerCase()) {
        console.log("Sorry " + new_users[i] + ", Username is already taken");
    } else {
        console.log(new_users[i] + " is still available");
    }
}

//Q33 hamza 06/10/2022
/*
This program will print 1st 2nd 3rd 4th- 9th 
if the number is 1 then 1st - 4 then 4th......

*/
const ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < ordinal_numbers.length; i++) {
    if (ordinal_numbers[i] == 1) {
        console.log("1st");
    } else if (ordinal_numbers[i] == 2) {
        console.log("2nd");
    } else if (ordinal_numbers[i] == 3) {
        console.log("3rd");
    } else {
        console.log(ordinal_numbers[i] + "th");
    }
}
//Q34 hamza 06/10/2022
//This program will print favorite pizza name

let favorite_pizza = ['BBQ Chicken', 'Cheese', 'Pepperoni']

for (let i = 0; i < favorite_pizza.length; i++) {
    console.log(favorite_pizza[i])
    console.log("I like " + favorite_pizza[i] + " pizza.")
}
console.log("Pizza is the one type of food i would love to have at any time of the day \nMy most favorite type is the Mozerella pizza.\nI also enjoy eating chilli pepper pizza when I'm looking for a snack")
//Q35 hamza 07/10/2022
const animal = ['cat', 'dog', 'Rabbit']
for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
    console.log(animal[i] + " would make a great pet")
}

//Q36 hamza 07/10/2022
//In this Program, Function will accept size and message and will print.

function make_shirt(size, message) {
    console.log("I'm going to buy a " + size + " T-Shirt")
    console.log('It will say, "' + message + '"')
}
make_shirt()

//Q37 hamza 07/10/2022
function make_shirt(size = "large", message = "I Love JavaScript") {
    console.log("I'm going to buy a " + size + " T-Shirt")
    console.log('It will say, "' + message + '"')
}
make_shirt(size = "medium")
make_shirt("Small", "I love Web Development")

//Q38 hamza 07/10/2022 
function describe_city(city, country) {
    console.log(city + " is in " + country)
}
describe_city("karachi", "Pakistan");
describe_city("Multan", "Pakistan")

//Q39 hamza 07/10/2022
/*In this program function will take parameter and print message  like: "Lahore, Pakistan"; */

function city_country(city, country) {
    console.log("\"" + city + ", " + country + "\"")
}
city_country("Lahore", "Pakistan")
city_country("Karachi", "Pakistan")
city_country("Islamabad", "Pakistan")

//Q40 hamza 07/10/2022
function make_album(artist, title, tracks = 0) {
    obj_music_album = {
        'artist': artist,
        'title': title,
    }
    if (tracks) {
        obj_music_album = {
            'artist': artist,
            'title': title,
            'tracks': tracks,
        }
    }
    return (obj_music_album);
}
let a1 = make_album('Ali Zafar', 'Jhoom')
console.log(a1)
a1 = make_album('Asim Azhar', 'Habibi')
console.log(a1)
a1 = make_album('Atif Aslam', 'Taj dare haram')
console.log(a1)
a1 = make_album('Momina Mustehsan', 'Afreen', tracks = 9)
console.log(a1)
//Q41 hamza 07/10/2022
/*This will print names of magician from function*/
let magician = ['Mark Wilson', 'Jeff McBride', 'Austin Winnett']

function show_magicians() {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i])
    }
}
show_magicians();

//Q42 hamza 07/10/2022
/*This will print names of magician from function and print phrases */
let magician2 = ['Mark Wilson', 'Jeff McBride', 'Austin Winnett']
let great_magician2 = [];

function show_magicians2(magician2) {
    for (let i = 0; i < great_magician2.length; i++) {
        console.log(magician2[i])
    }
}
function make_great2(magician2) {
    for (let i = 0; i < magician2.length; i++) {
        let current2 = magician2
        current2 = "The Great " + current2[i]
        great_magician2.push(current2)
    }
}

make_great2(magician2, great_magician2)
show_magicians2(great_magician2)


//Q43 hamza 07/10/2022
/*Unchanged Magicians: */
let magician1 = ['Mark Wilson', 'Jeff McBride', 'Austin Winnett']
let great_magiciann = [];

function show_magicians1(magician1) {
    for (let i = 0; i < great_magiciann.length; i++) {
        console.log(magician1[i])
    }
}
function make_great(magician1) {
    for (let i = 0; i < magician1.length; i++) {
        let current = magician1
        current = "The Great " + current[i]
        great_magiciann.push(current)
        console.log(great_magiciann[i])
    }
}

show_magicians(magician1.slice(), great_magiciann)
make_great(magician1, great_magiciann)

//Q44 hamza 07/10/2022
/*In this program function parameter will accept multiple arguments */

function make_sandwich(...provides) {
    console.log("-----Making sandwich-----")
    for (let i = 0; i < provides.length; i++) {
        console.log("Adding " + provides[i] + " to your sandwich")
    }
    console.log("Your sandwich is ready!")

}
make_sandwich("cheese", "Mashroom", "Vegetables")
make_sandwich("Chicken", "Mustard sauce", "Ketchup")
make_sandwich("Beef", "Mayo", "Ketchup")

 //Q45 hamza 07/10/2022
 function make_car(manufacturer,model_name,...option){
    car_obj = {
        'manufacturer' : manufacturer,
        'model_name' : model_name
    }
    if (option) {
        car_obj = {
            'manufacturer' : manufacturer,
            'model_name' : model_name,
            'option': option
        }
    }
    return car_obj;
}

b2= make_car('honda','city')
console.log(b2)
b1= make_car('honda','civic',year = 2022, color = 'white')
console.log(b1)
b1= make_car('honda','brv',year = 2019, color = 'gray')
console.log(b1)

 
