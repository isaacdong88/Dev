const products = {
    Woody: ["https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103036514494?fmt=webp&qlt=70&wid=1536&hei=1536","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103036514494-2?fmt=webp&qlt=70&wid=1536&hei=1536","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103036514494-3?fmt=webp&qlt=70&wid=1536&hei=1536","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103036514494-7?fmt=webp&qlt=70&wid=1536&hei=1536"],
    Jessie: ["https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103036514493?fmt=webp&qlt=70&wid=1536&hei=1536","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103036514493-2?fmt=webp&qlt=70&wid=1536&hei=1536","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103036514493-3?fmt=webp&qlt=70&wid=1536&hei=1536","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103036514493-7?fmt=webp&qlt=70&wid=1536&hei=1536"],
    Buzz: ["https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047623694?fmt=webp&qlt=70&wid=1536&hei=1536","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047623694-1?fmt=webp&qlt=70&wid=1536&hei=1536","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047623694-2?fmt=webp&qlt=70&wid=1536&hei=1536","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047623694-10?fmt=webp&qlt=70&wid=1536&hei=1536"],
    WoodyCust: ["https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2890040739144-1?fmt=webp&qlt=70&wid=1536&hei=1536","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2890040739144?fmt=webp&qlt=70&wid=1536&hei=1536","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2890040739144-2?fmt=webp&qlt=70&wid=1536&hei=1536","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2890040739144-3?fmt=webp&qlt=70&wid=1536&hei=1536"],
    CustSet: ["https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2890041619241?fmt=webp&qlt=70&wid=2000&hei=2000","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2890041619241-2?fmt=webp&qlt=70&wid=2000&hei=2000","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2890041619241-3?fmt=webp&qlt=70&wid=2000&hei=2000","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2890041619241-1?fmt=webp&qlt=70&wid=2000&hei=2000"],
    JessieCust: ["https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2841040739143-1?fmt=webp&qlt=70&wid=2000&hei=2000","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2841040739143-3?fmt=webp&qlt=70&wid=2000&hei=2000","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2841040739143-4?fmt=webp&qlt=70&wid=2000&hei=2000","https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2841040739143-5?fmt=webp&qlt=70&wid=2000&hei=2000"]
}

let cart = 0

const sleep = (time) => {
    return new Promise ((resolve) => {
        return setTimeout(function() {
            resolve()},time)
        })
}

const onHover = async (item) => {

    let newtoy = document.querySelector('#'+item)
    for(let i=1;i<products[item].length;i++) {
        newtoy.setAttribute('src', products[item][i])
        await sleep(1000)
    }
    newtoy.setAttribute('src', products[item][0])
}

const cartClick = () => {
    cart += 1
    let cartItems = document.querySelector('.cart')
    cartItems.innerHTML = cart

}
