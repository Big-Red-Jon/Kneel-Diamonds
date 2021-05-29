import { getOrders, getMetals, getStyles, getSizes } from "./database.js"

const buildOrderListItem = (order) => {
    
    const metals = getMetals()
    const styles = getStyles()
    const sizes = getSizes()

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

    const totalCost = metalPrice + stylePrice + sizePrice

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

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



