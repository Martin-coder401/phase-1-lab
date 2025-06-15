function scuberGreetingForFeet(){
  // Write your code here!
}function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    return 'No can do.';
  } else {
    return 'That will be twenty bucks.';
  }
}

function ternaryCheckCity(){
  // Write your code here!
} function ternaryConfirmCity(city) 
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';

function switchOnCharmFromTip(){
  // Write your code here!
}function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}