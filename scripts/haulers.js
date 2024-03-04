import { getHaulers, getShips } from "./database.js"
const haulers = getHaulers()
const ships = getShips()
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a hauler list item clicked?
        // Get the id of the hauler clicked
            if (itemClicked.dataset.type === "hauler") {
                // Start a counter variable at 0
                let haulerCargo = 0
                const haulerID = itemClicked.dataset.id
                // Iterate all of the shipping ships
                for (const ship of ships) {
                    // Does the haulerId foreign key match the id?
                    if (ship.haulerID === parseInt(haulerID)) {
                        // Increase the counter by 1
                        haulerCargo++
                    }
                }
                window.alert(`This hauler is carrying ${haulerCargo} ships`)

            }





    }
)

export const haulerList = () => {

    
    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li data-type="hauler" data-id="${hauler.id}">${hauler.name}</li>`
    }
    haulersHTML += "</ul>"

    return haulersHTML
}