import { getShips, getHaulers } from './database.js'

export const shipList = () => {
    const ships = getShips()
    ships.sort((a, b) => a.name.localeCompare(b.name))
    let shipsHTML = "<ul class='list'>"

    for (const ship of ships) {
        shipsHTML += `<li class="item" data-type="ship" data-haulerid="${ship.haulerID}" data-shipname="${ship.name}">${ship.name}</li>`
    }
    shipsHTML += "</ul>"
    return shipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "ship") {
            
            // Get the haulerId value of the shipping ship clicked
            let haulerID = itemClicked.dataset.haulerid
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }
            
            // Iterate the array of hauler objects
            const haulers = getHaulers()
            for (const hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                if ( parseInt(haulerID) === hauler.id) {
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = hauler.name
                }
            } 
            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
            
            window.alert(`${itemClicked.dataset.shipname} is being hauled by ${haulingShip}`)
        }
    }
)