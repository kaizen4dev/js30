// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];



// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// solution 1
// console.table(inventors.filter((inventor) => Math.floor(inventor.year / 100) == 15));

// solution 2, if we want to filter people by century
console.table(inventors.filter((inventor) => inventor.year > 1500 && inventor.year < 1601));



// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

// solution
console.table(inventors.map(inventor => inventor.first + " " + inventor.last));



// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// solution
console.table(inventors.sort((prev, current) => prev.year - current.year));



// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

// solution
console.log(inventors.reduce((prev, current) => prev += current.passed - current.year, 0));


// 5. Sort the inventors by years lived

// solution
console.table(inventors.sort((prev, current) => (prev.passed - prev.year) - (current.passed - current.year)).reverse());



// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// solution
// let links = document.querySelectorAll(".mw-category.mw-category-columns .mw-category-group a")
// links = Array.from(links);
// let newLinks = links.filter(link => link.textContent.includes("de"));
// let list = newLinks.map(item => item.textContent)

// console.table(list)



// 7. sort Exercise
// Sort the people alphabetically by last name

// solution 1
console.table(people.toSorted());

// solution 2, if we want name to be first
// sorted = people.toSorted().map(fullname => {
//   const [last, first] = fullname.split(", ")
//   return first + " " + last;
// })

// console.table(sorted);



// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

// solution
let instances = data.reduce((object, item) => {
  object[item] = item in object ? ++object[item] : 1;
  return object;
}, {})

console.table(instances);
