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

function drawCart() {
    let cartContent = '';
    let cartTotal = 0;

    for (let i = 0; i < iceCream.length; i++) {
        let item = iceCream[i];
        if (item.quantity > 0) {
            let itemTotal = item.price * item.quantity;
            cartTotal += itemTotal; // REVIEW This whole area made no sense to me and through googling and using ai to trouble shoot this was the only way I could get it to work.
            cartContent += `<p>
            ${item.quantity}x ${item.name} <i class="mdi mdi-currency-usd"></i>${itemTotal.toFixed(2)}
            <button class="btn btn-outline-warning" onclick="removeItem('${item.name}')"><i class="mdi mdi-delete-empty"></i></button>
            </p>`;
        }
    }

    // Display cart content
    let cartItemsElm = document.getElementById('cart-items');
    cartItemsElm.innerHTML = cartContent;

    // Display cart total
    let totalElm = document.getElementById('total');
    totalElm.innerHTML = `<i class="mdi mdi-currency-usd"></i>${cartTotal.toFixed(2)}`;
}
