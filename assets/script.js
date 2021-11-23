// HINT: You can delete this console.log after you no longer need it!
// console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "DeVonte Ewell" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = localStorage.getItem('gb');     // Gingerbread
if (gb === null){
    gb = 0;
} else {
    gb = parseInt(gb)
}
document.querySelector('#qty-gb').textContent = gb;


let cc = localStorage.getItem('cc');      // Chocolate Chip
if (cc === null){
    cc = 0;
} else{
    cc =parseInt(cc)
}
document.querySelector('#qty-cc').textContent = cc


let sugar = localStorage.getItem('sugar');   // Sugar Sprinkle
if (sugar === null){
    sugar = 0
} else{
    sugar = parseInt(sugar)
}
document.querySelector('#qty-sugar').textContent = sugar

document.querySelector('#qty-total').textContent = sugar + cc + gb;


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
// ADD BUTTON FOR GINGER BREAD
let gbAddBtn = document.querySelector('#add-gb')
document.getElementById('add-gb').addEventListener('click', function () {
    gb = gb + 1;
    // console.log(gb)
    document.querySelector('#qty-gb').textContent = gb;
    document.querySelector('#qty-total').textContent = sugar + cc + gb;
    localStorage.setItem('gb', gb)
})

//MINUS BUTTON FOR GINGER BREAD
let gbMinusBtn = document.querySelector('#minus-gb')
document.getElementById('minus-gb').addEventListener('click', function () {
    // console.log('minus button clicked')
    if (gb > 0)
        gb = gb - 1
    // console.log(gb)
    document.querySelector('#qty-gb').textContent = gb;
    document.querySelector('#qty-total').textContent = sugar + cc + gb;
    localStorage.setItem('gb', gb)
})
// TODO: Hook up event listeners for the rest of the buttons

//ADD BUTTON FOR CHOCOLATE CHIP COOKIES
let ccAddBtn = document.querySelector('#add-cc')
document.getElementById('add-cc').addEventListener('click', function () {
    // console.log('chocolate add clicked')
    cc = cc + 1
    // console.log(cc)
    document.querySelector('#qty-cc').textContent = cc;
    document.querySelector('#qty-total').textContent = sugar + cc + gb;
    localStorage.setItem('cc', cc)
})
//MINUS BUTTON FOR CHOCOLATE CHIP COOKIES
let ccMinusBtn = document.querySelector('#minus-cc')
document.getElementById('minus-cc').addEventListener('click', function () {
    // console.log('minus chocolate')
    if (cc > 0)
        cc = cc - 1
    // console.log(cc)
    document.querySelector('#qty-cc').textContent = cc;
    document.querySelector('#qty-total').textContent = sugar + cc + gb;
    localStorage.setItem('cc', cc)
})

//Sugar Cookie Add Button
let sugarAddBtn = document.querySelector('#add-sugar')
document.getElementById('add-sugar').addEventListener('click', function () {
    // console.log('sugar add')
    sugar = sugar + 1
    // console.log(sugar)
    document.querySelector('#qty-sugar').textContent = sugar;
    document.querySelector('#qty-total').textContent = sugar + cc + gb;
    localStorage.setItem('sugar', sugar)
})

//Sugar Cookie Minus Button
let sugarMinusBtn = document.querySelector('#minus-sugar')
document.getElementById('minus-sugar').addEventListener('click', function () {
    // console.log('sugar minus')
    if (sugar > 0)
        sugar = sugar - 1
    // console.log(sugar)
    document.querySelector('#qty-sugar').textContent = sugar;
    document.querySelector('#qty-total').textContent = sugar + cc + gb;
    localStorage.setItem('sugar', sugar)
})

