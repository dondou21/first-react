/**
 * Write a function that take a number and list of numbers as parameters 
 * and should return sorted list of numbers by the nearest of the number passed as parameter
 */




const array = [10,8,5,4,15];

function sortedNearest(n,arr) {
    let temp;

    for(let i = 0; i < arr.length; i++)
    {
        for(let j = i+1; j < arr.length; j++)
        {
           if((Math.abs(arr[j] -n)) < Math.abs((arr[i] -n )))
            {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            } 
        }  
    }
    return arr
}

console.log(sortedNearest(9,array))