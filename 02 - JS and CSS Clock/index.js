hourHand = document.querySelector('div.hour-hand');
minuteHand = document.querySelector('div.min-hand');
secondHand = document.querySelector('div.second-hand');

setInterval(setDate, 1000);

setDate();

function setDate() {

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  const setHour = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
  const setMinute = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  const setSeconds = ((seconds / 60) * 360) + 90;

  hourHand.setAttribute('style', `transform: rotate(${setHour}deg);`);  
  minuteHand.setAttribute('style', `transform: rotate(${setMinute}deg);`); 
  secondHand.setAttribute('style', `transform: rotate(${setSeconds}deg);`); 
}
