//while loop
var i = 0;
while(i < 10) {
    i++;
    console.log(i);
};

//for loop
for(var j = 0; j < 10; j++) {
    j += 5;
    console.log(j);
};

//do while loop
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
} while (loopCondition);
