const countValue = document.querySelector('#counter');

// const increment = () =>{
    function increment(){
    // get the value from UI
    let value = parseInt(countValue.innerText);

// update the value
    value = value + 1;
// set the value onto UI
    countValue.innerText = value;
};

// const decrement = () =>{
    function decrement(){

    let value = parseInt(countValue.innerText);

    value = value - 1;

    countValue.innerText = value;
};
