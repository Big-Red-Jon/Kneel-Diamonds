/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 },
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 12.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],
    pieces: [
        { id: 1, item: "ring"},
        { id: 2, item: "earring"},
        { id: 3, item: "necklace"}
    ],
    orders: [
        {
        id: 1,
        sizeId: 1,
        styleId: 1,
        metalId: 1,
        pieceId: 1
        }
    ],
    customOrders: {}
    
}
  

export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}

export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}

export const getPieces = () => {
    return database.pieces.map(piece => ({...piece}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}
// The setMetal,setSize, and setStyle functions build a temporary selection
export const setMetal = (id) => {
    database.customOrders.metalId = id
}

export const setSize = (id) => {
    database.customOrders.sizeId = id
}

export const setStyle = (id) => {
    database.customOrders.styleId = id
}

export const setPiece = (id) => {
    database.customOrders.pieceId = id
}

// This essentially adds up our price for the diamond purchases.
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.customOrders}

    // Add a new primary key to the object
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.customeOrders = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// database.entrees.forEach((item, i) => {
//     item.id = i + 1;
// })