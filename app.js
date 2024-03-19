const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]

function drawCart() {
    let cartContent = ''
    let cartTotal = 0
}


function orderCookieDough() {
    console.log('ordering cookieDough')

    let cookieDoughCone = iceCream[0]

    cookieDoughCone.quantity += 1
    console.log('✨', cookieDoughCone);
    drawCart()


}



function orderVanilla() {
    console.log('ordering vanilla')

    let vanillaCone = iceCream[1]

    vanillaCone.quantity += 1
    console.log('💫', vanillaCone);
    drawCart()


}

function orderStrawberry() {
    console.log('ordering strawberry')

    let strawberryCone = iceCream[2]

    strawberryCone.quantity += 1
    console.log('⚡️', strawberryCone);
    drawCart()


}
