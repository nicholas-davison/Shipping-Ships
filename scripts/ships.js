import { getShips } from './database.js'

export const shipList = () => {
    const ships = getShips()
    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li>${ship.name}</li>`
    }
    shipsHTML += "</ul>"
    return shipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?

            // Get the haulerId value of the shipping ship clicked

            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            // Iterate the array of hauler objects

                // Does the haulerId foreign key match the id of the current hauler?

                    // Reassign the value of `haulingShip` to the current hauler

            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
    }
)