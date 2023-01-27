function getSleepHours(day){
  return 8;
};

function getActualSleepHours(){
  return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
};

function getIdealSleepHours(){
  let idealHours=8;
  return idealHours*7;
}

function calculateSleepDebt(){
  let actualSleepHours=getActualSleepHours()
  let idealSleepHours=getIdealSleepHours()
  if(actualSleepHours===idealSleepHours){
    console.log('You got the perfect amount of sleep!');
  } else if(actualSleepHours>idealSleepHours){
    console.log('You got more sleep than needed!');
  } else {
    console.log('You should get some rest.')
  };
};

calculateSleepDebt();
