//return a sorted array where the integers are squared
//pushing is constant time o(1), removing is o(n) because it has to find where something is in an array 
//before you remove it 
//Run time is just O(n)
var array = [1,4,6,7]
var newArray = [];
var thirdArray = [];
var fourthArray = [];
var squareArray = [];

for (var i=0; i<array.size(); i++) {
    if (array[i] < 0) {
        newArray.push(array[i]*-1);
    } else if (array[i]== 0 || array[i] > 0 ) {
        thirdArray.push(array[i]);
    }
}
newArray.reverse();

var j = 0;
var iterations = 0;

if (newArray[-1] > thirdArray[-1]) {
    iterations = thirdArray.size();
} else {
    iterations = newArray.size();
}

while ( i < iterations || j < iterations) {
    if (newArray[i] < thirdArray[j]) {
        fourthArray.push(newArray[i])
        i++;
    } else if (newArray[i] > thirdArray[j]) {
        fourthArray.push(thirdArray[i]);
        j++;
    } else {
        fourthArray.push(thirdArray[j]);
        fourthArray.push(newArray[i]);
        i++;
        j++;
    }
}

while (i < newArray.size()) {
    fourthArray.push(newArray[i])
    i++;
}

while (i < thirdArray.size()) {
    fourthArray.push(thirdArray[j])
    j++;
}

for (var i=0; i<array.size(); i++) {
    squareArray[i] = fourthArray[i]*fourthArray[i];
}

console.log(squareArray)