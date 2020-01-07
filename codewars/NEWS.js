function dirReduc(arr){
    // ...
    let opposite = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'}
    for(let i = 0; i < arr.length-1; i++){
        if (arr[i+1] === opposite[arr[i]]){
            arr.splice(i,2)
            i=-1
        }
    }
    return arr
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
