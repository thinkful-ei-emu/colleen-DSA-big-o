/* 1. What is the Big O for this?
1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"
--O(1)--asking one thing to one large group and getting one successful response--only asked in one way and won't change depending on size
2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.
--O(n)--need to ask each person, and the O will depend on the number of people in the party and in what order you ask them in when you get the right response you're looking for

*/
/* 
2. Even or odd
What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
} 

O(1)--taking in one value and performing one operation on it (simple single step math problem)
*/
/* 3. Are you here?
What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
} 
This is a polynomial O(n^k) because it is looping through the array twice so performing simliar operatoin x2--raising n to the 2nd power
*/

/* 5. Naive search
What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
O(n)--dependent on length of array where it loops through the items
*/
/* 6. Creating pairs:
What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
} 
O(n^2)--polynomial complexity because it is looping */
/* 7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
O(n) */

/* 8. An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
O(logn)--cuts search in half no matter size of array so only increases at a smaller  */
/* 9. Random element
What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
} 

O(1)--runs once no matter length of array or input*/

/* 10. What Am I?
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;

        less than two and if a decimal returning false
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;

        
    }
    return true;
} 
prime number checker--sees if is divisible by any other number without a remainder
O(n) because it's looping through depending 
*/
 

/* 11. Tower of Hanoi
The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
Input:

Rod A	Rod B	Rod C
----		
---------		
-------------		
Output:

Rod A	Rod B	Rod C
----
---------
-------------
Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another. */

/* step one: move 1 to C (2+3 on A)--will always go to last spot 
step two: move 2 to B (3 on B)
step three: move 1 to B
step four: move 3 to C
step five: 1 to A
step six: 2 from B to C
step seven: 1 from A to C
--find largest disk that is available to move to empty space
--
If you are given 5 disks, how do the rods look like after 7 recursive calls?
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
What is the runtime of your algorithm? */

function tower(numDisk){
  for(let i=0; i < numDisk; i++){
    new Disk = {
      number: i+1,
      canMove: number
      rod: 'a'
    }
  }
}

function tOH(numDisk, source, destination, temp){
  //a to b
if (numDisk === 1){
  return {source, destination}
}
//reduce disk from 2 to one
tOH(n-1, source, temp, dest)

}
12. Iterative version
Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

13. Recursive Big O
Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

14. Iterative Big O
Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them. */