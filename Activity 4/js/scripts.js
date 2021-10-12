// welcome message
var user = 'Mike';
var salutation = 'hello, ';
var greeting = salutation + user + '! Here are the latest Atom reviews';
var greetingEL = document.getElementById('greeting');

greetingEL.textContent = greeting;

// product price
var price = 20,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEL = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price'),

priceEL.textContent = price.toFixed(2);
studentPriceEL.textContent = price.toFixed(2);

