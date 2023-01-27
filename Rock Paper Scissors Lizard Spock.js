userInput = 'paper';
userInput = userInput.toLowerCase();
  if(userInput==='rock'||userInput==='scissors'||userInput==='paper' || userInput==='lizard'||userInput==='spock'){
  } else {
  console.log('error, wrong input');
  }

let n = Math.floor(Math.random() * 5);
let siInput = '';

switch (n) {
  case 0: 
  siInput='rock';
    break;
  case 1:
  siInput='paper';
    break;
  case 2:
  siInput='scissors';
    break;
  case 3:
  siInput='lizard';
    break;
  case 4:
  siInput='spock';
    break;
}

// TIE
if(userInput===siInput){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`It's a tie!`);
}

// ROCK
else if(userInput ==='rock'&&siInput==='spock'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Spock vaporizes rock!`);
  console.log(`The Opponent wins!`);
}
else if(userInput==='rock'&&siInput==='lizard'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Rock crushes lizard!`);
  console.log(`You Win!`);
}
else if(userInput==='rock'&&siInput==='scissors'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Rock crushes scissors!`);
  console.log(`You Win!`);
}
else if(userInput==='rock'&&siInput==='paper'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Paper covers rock!`);
  console.log(`The Opponent wins!`);
}

// SPOCK
else if(userInput==='spock'&&siInput==='lizard'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Lizard poisons Spock!`);
  console.log(`The Opponent wins!`);
}
else if(userInput==='spock'&&siInput==='scissors'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Spock smashes scissors!`);
  console.log(`You win!`);
}
else if(userInput==='spock'&&siInput==='paper'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Paper disproves Spock!`);
  console.log(`The Opponent wins!`);
}
else if(userInput==='spock'&&siInput==='rock'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Spock vaporizes rock!`);
  console.log(`You Win!`);
}

// LIZARD  
else if(userInput==='lizard'&&siInput==='scissors'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Scissors decapitate lizard`);
  console.log(`The Opponent wins!`);
}
else if(userInput==='lizard'&&siInput==='paper'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Lizard eats paper`);
  console.log(`You Win!`);
}
else if(userInput==='lizard'&&siInput==='rock'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Rock crushes Lizard!`);
  console.log(`The Opponent wins!`);
}
else if(userInput==='lizard'&&siInput==='spock'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Lizard poisons Spock!`);
  console.log(`You Win!`);
}

// SCISSORS
else if(userInput==='scissors'&&siInput==='paper'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Scissors cut paper!`);
  console.log(`You Win!`);
}
else if(userInput==='scissors'&&siInput==='rock'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Rock crushes Scissors!`);
  console.log(`The Opponent wins!`);
}
else if(userInput==='scissors'&&siInput==='spock'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Spock smashes scissors!`);
  console.log(`The Opponent wins!`);
}
else if(userInput==='scissors'&&siInput==='lizard'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Scissors decapitate Lizard`);
  console.log(`You Win!`);
}

// PAPER
else if(userInput==='paper'&&siInput==='scissors'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Scissors cut Paper!`);
  console.log(`The Opponent wins!`);
}
else if(userInput==='paper'&&siInput==='rock'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Paper covers Rock!`);
  console.log(`You Win!`);
}
else if(userInput==='paper'&&siInput==='spock'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Paper disproves Spock`);
  console.log(`You Win!`);
}
else if(userInput==='paper'&&siInput==='lizard'){
  console.log(`User's choice: ${userInput}`);
  console.log(`Opponent's choice: ${siInput}`);
  console.log(`Lizard eats Paper`);
  console.log(`The Opponent Wins!`);
}
