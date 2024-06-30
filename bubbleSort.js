function numbers(){
    const bubble = [ 20,25,13,9,29,2];
    const bubblefixed = bubble.sort((a, b) => a - b);
    return bubblefixed;

}

console.log(numbers());