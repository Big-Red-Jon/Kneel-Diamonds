import { getPieces, setPiece } from "./database.js"

const pieces = getPieces()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "piece") {
            setPiece(parseInt(event.target.value))
        }
    }
)

export const Pieces = () => {
    let html = "<ul>"

    const listItems = pieces.map(piece => {
        return `<li>
        <input type="radio" name="piece" value="${piece.id}"/> ${piece.item}
        </li>`
    })

    html += listItems.join("")

    html += "</ul>"
    return html
}