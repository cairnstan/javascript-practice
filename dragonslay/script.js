//This is the version put forth by codecademy as example before they take you through it. 
var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;

    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}

//This is the version that I did following the lesson- basically the same as above. Just with different messages
var slaying = true;

var youHit = Math.floor(Math.random() * 2);

var damageThisRound = Math.floor(Math.random() * 5 + 1);

var totalDamage = 0;

while(slaying){
    if(youHit){
        console.log("Congrats! You have hit the dragon!");
        totalDamage = totalDamage += damageThisRound;
        if(totalDamage >= 4){
            console.log("You have defeated the dragon! The people of the land are eternally grateful!");
            slaying = false;
        }else{
          youHit = Math.floor(Math.random() * 2);
        }
    }else{
        console.log("Wow. That sucks! The dragon has defeated you.");
    }
    slaying = false;
};
