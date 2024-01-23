/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
document.querySelector('#d6-roll').addEventListener('click', ()=>{
  sixes.push(getRandomNumber(6))
  document.getElementById('d6-roll').src=`./images/d6/${sixes[sixes.length-1]}.png`
  let diceMean = mean(sixes)
  document.querySelector('#d6-rolls-mean').innerHTML = `${diceMean}`
  let diceMedian = median(sortByNumber(sixes))
  document.querySelector('#d6-rolls-median').innerHTML= `${diceMedian}`
  let diceMode = mode(sortByNumber(sixes))
  document.querySelector('#d6-rolls-mode').innerHTML = `${diceMode}`
})


document.querySelector('#double-d6-roll-1').addEventListener('click', ()=>{
let randomNumber = getRandomNumber(6)
let randomNumber2 = getRandomNumber(6)
  doubleSixes.push(randomNumber + randomNumber2)
document.getElementById('double-d6-roll-1').src=`./images/d6/${randomNumber}.png`
document.getElementById('double-d6-roll-2').src=`./images/d6/${randomNumber2}.png`
let doubleDiceMean = mean(doubleSixes)
document.querySelector('#double-d6-rolls-mean').innerHTML= `${doubleDiceMean}`
let doubleDiceMedian = median(sortByNumber(doubleSixes))
document.querySelector('#double-d6-rolls-median').innerHTML= `${doubleDiceMedian}`
let doubleDiceMode = mode(sortByNumber(doubleSixes))
document.querySelector('#double-d6-rolls-mode').innerHTML = `${doubleDiceMode}`
})

document.querySelector('#d12-roll').addEventListener('click', ()=>{
  twelves.push(getRandomNumber(12))
  document.getElementById('d12-roll').src=`./images/numbers/${twelves[twelves.length-1]}.png`
  let twelveMean = mean(twelves)
  document.querySelector('#d12-rolls-mean').innerHTML = `${twelveMean}`
  let twelveMedian = median(twelves)
  document.querySelector('#d12-rolls-median').innerHTML = `${twelveMedian}`
  let twelveMode = mode(twelves)
  document.querySelector('#d12-rolls-mode').innerHTML = `${twelveMode}`
})

document.querySelector('#d20-roll').addEventListener('click', ()=>{
  twenties.push(getRandomNumber(20))
  document.getElementById('d20-roll').src=`./images/numbers/${twenties[twenties.length-1]}.png`
  let twentyMean = mean(twenties)
  document.querySelector('#d20-rolls-mean').innerHTML = `${twentyMean}`
  let twentyMedian = median(twenties)
  document.querySelector('#d20-rolls-median').innerHTML = `${twentyMedian}`
  let twentyMode = mode(twenties)
  document.querySelector('#d20-rolls-mode').innerHTML = `${twentyMode}`
})


/*******************
 * EVENT LISTENERS *
 *******************/





/******************
 * RESET FUNCTION *
 ******************/
const resetButton = document.querySelector('#reset-button').addEventListener('click', ()=>{
  sixes.length = 0
  doubleSixes.length = 0
  twelves.length = 0
  twenties.length = 0
  document.getElementById('d6-roll').src = './images/start/d6.png'
  document.getElementById('double-d6-roll-1').src = './images/start/d6.png'
  document.getElementById('double-d6-roll-2').src = './images/start/d6.png'
  document.getElementById('d12-roll').src = './images/start/d12.jpeg'
  document.getElementById('d20-roll').src = './images/start/d20.jpg'
})


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/

const mean = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};

const median = arr => {
  const { length } = arr;
  
  arr.sort((a, b) => a - b);
  
  if (length % 2 === 0) {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  }
  
  return arr[(length - 1) / 2];
};

const mode = arr => {
  const mode = {};
  let max = 0, count = 0;

  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    
    if(mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }
    
    if(count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
   
  return max;
};