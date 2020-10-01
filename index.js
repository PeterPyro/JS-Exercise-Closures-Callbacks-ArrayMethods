// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter1 has closure because it returns  a function and the variable in defined aand used in the function scope and not the global.
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 becasue it returns a function instead of using a veriable inthe global scope.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 is better if you only want tyo mutate the count through counter1. Counter2 is better if you want to reference and mutate count in other ways.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(points) {

    return Math.floor

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb, numOfInnings) {

  let totalpoints = [];

  for (let i = 0; i <=numOfInnings; i++) {
     totalpoints.push(inning(3));
  }
  
  const add = (a, b) => a + b;
  const sum2 = totalpoints2.reduce(add2);

  let totalpoints2 = [];


  for (let i=0; i <= numOfInnings; i++) {
    totalpoints2.push(inning(3));
  }

  const add2 = (a, b) => a + b;
  const sum2 =totalpoints2.reduce(add2);

  let homePoints = sum;
  let awayPoints = sum2;

  let game = {
   home: homePoints,
   away: awayPoints,

  }
  return game;
}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}


