//1st question :- Can we put duplicate values in the set object

"No, In set we can store only individual objects";

//2nd question 
    //a :- Creating new set object

    let obj1 = new Object();

    //b :- Adding new element to set object

    let mySet = new Set();
    mySet.add(1);
    // console.log(mySet);

    //c :- Deleting element from set object

    mySet.delete(1);
    // console.log(mySet);

// 3rd question :- Checking if 8 is there in the random numbers generated.

let newSet = new Set();
for(let i = 0; i < 4; i++){
    newSet.add(Math.floor((Math.random()) * 10));
}
console.log(newSet);
console.log(newSet.has(8));