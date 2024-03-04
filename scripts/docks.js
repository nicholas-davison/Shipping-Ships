import { getDocks, getHaulers } from "./database.js"


export const dockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-type="dock" data-id="${dock.id}" data-location="${dock.location}">${dock.location} can hold ${dock.volume} million tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener (
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // check if item clicked is a dock 
        if (itemClicked.dataset.type === "dock") {
            //define variable "currently servicing" as an empty array
            let currentlyServicing = []
            const dockID = itemClicked.dataset.id
            // define haulers
            const haulers = getHaulers()
            //iterate haulers and check if hauler foreign key matches dock id
            for (const hauler of haulers) {
                if (hauler.dockID === parseInt(dockID)) {
                    // if a match, add hauler name to array
                    currentlyServicing.push(hauler.name)
                }
            }
            //if array is empty, currently servicing = "nothing"
            if (currentlyServicing.length === 0) {
                currentlyServicing.push("nothing")
            } const servicingText = currentlyServicing.join(", ")
            window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${servicingText}`)
        }
        //return currently servicing 
        //window alert "item clicked name is currently servicing currently servicing var"
        
    }
)