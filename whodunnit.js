const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${ scenario.murderer }.`;
}

const verdict = declareMurderer();
console.log(verdict);

// The result will be 'Miss Scarlet'.
// My guess was correct.

const murderer = 'Professor Plum';

const changeMurderer = function () {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The result will be 'Professor Plum'.
// The result was actually an error, due to the fact that you can't reassign a constant.

let murderer = 'Professor Plum';

const declareMurderer = function () {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// The first verdict will be Mrs. Peacock.
// The second verdict will be Professor Plum.

// My guesses were correct!

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function () {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// The suspects will be Miss Scarlet, Prof Plum and Mrs. Peacock.
// Suspect Three will be Mrs. Peacock.

// My guesses were correct!

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function (newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function () {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// The verdict will be that the weapon is the revolver.

// My guess was correct!

let murderer = 'Colonel Mustard';

const changeMurderer = function () {
  murderer = 'Mr. Green';

  const plotTwist = function () {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The verdict will be that the murderer is Mrs. White.

// My guess was correct! The let was defined in the scope of the whole file, thus can be changed freely(?)

let murderer = 'Professor Plum';

const changeMurderer = function () {
  murderer = 'Mr. Green';

  const plotTwist = function () {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function () {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The verdict is that the murderer is Miss Scarlet.

// My guess was wrong... This must be because inside plotTwist, the murderer is reassigned but because it is a newly defined let, it is only assigned inside that block (also meaning that it is ultimately assigned Miss Scarlet, but this is only within the block). Elsewhere, the most recent assignment is Mr. Green, so that is the verdict.

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function () {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function (room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function (murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function () {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// The weapon will be the candlestick.

// My guess was correct!

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// The murderer will be Prof Plum.

// My guess was correct! Like in ep 7, the new let is only defined within the block of the if statement.