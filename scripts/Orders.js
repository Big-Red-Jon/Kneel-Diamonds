import { getOrders, getMetals, getStyles, getSizes, getPieces } from "./database.js"



const buildOrderListItem = (order) => {
    
    const metals = getMetals()
    const styles = getStyles()
    const sizes = getSizes()
    const pieces = getPieces()


    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const metalPrice = foundMetal.price

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    const stylePrice = foundStyle.price

    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const sizePrice = foundSize.price

    const foundPiece = pieces.find(
        (piece) => {
            return piece.id === order.pieceId
        }
    )
    const pieceItem = foundPiece.id


    const pieceChoice = (piece) => {
        for (piece of pieces) {
            if (pieceItem === 1) {
                return metalPrice + stylePrice + sizePrice
            }
            else if (pieceItem === 2){
                return metalPrice*2 + stylePrice*2 + sizePrice*2
            }
            else if (pieceItem === 3) {
                return metalPrice*3 + stylePrice*3 + sizePrice*3
            }
       }
    }

    const finalPrice = pieceChoice(pieceItem)
    // const totalCost = metalPrice + stylePrice + sizePrice

    const costString = finalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })


    // const costString = totalCost.toLocaleString("en-US", {
    //     style: "currency",
    //     currency: "USD"
    // })

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`

}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}



