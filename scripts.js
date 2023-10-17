const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')



function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach(product => {

        myLi += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price"> R$ ${product.price}</p>
                </li>
    
             `
    })

    list.innerHTML = myLi
}

function mapAllItens() {

    const newPrices = menuOptions.map((product) => ({

        ...product, //spread(...) => ele coloca todos os valores do array e na linha de baixo eu posso fazer as alterações
        price: product.price * 0.9, // dar 10% de desconto


    }))


    showAll(newPrices)

}


function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML =
        `  
             <li>
            <p> O valor total dos itens é de R$ ${totalValue}</p>
            </li>
        `

        

}



buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
sumAll.addEventListener('click', sumAllItems)