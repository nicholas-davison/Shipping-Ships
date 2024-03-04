const database = {
    docks: [
        { 
            id: 1,
            location: "Shanghai, China",
            volume: "43.5" 
        },
        { 
            id: 2,
            location: "Busan, South Korea",
            volume: "21.6" 
        },
        { 
            id: 3,
            location: "Rotterdam, The Netherlands",
            volume: "14.35" 
        },
        { 
            id: 4,
            location: "Antwerp, Belgium",
            volume: "12.04" 
        }
    ],
    haulers: [
        {
            id: 1,
            dockID: 2,
            name: "Junkyard Juggernaut"
        },
        {
            id: 2,
            dockID: 3,
            name: "Banana Peel Express"
        },
        {
            id: 3,
            dockID: 1,
            name: "ChuckleChariot Transport"
        },
        {
            id: 4,
            dockID: 2,
            name: "Haul-O-Saurus Rex"
        },
        {
            id: 5,
            dockID: 1,
            name: "Space Potato Hauler"
        },
        {
            id: 6,
            dockID: 4,
            name: "Big Booty Barge"
        },
    ],
    shippingShips: [
        {
            id: 1,
            haulerID: 1,
            name: "Seas the Day"
        },
        {
            id: 2,
            haulerID: 5,
            name: "Knot on Call"
        },
        {
            id: 3,
            haulerID: 4,
            name: "Ship Happens"
        },
        {
            id: 4,
            haulerID: 1,
            name: "Buoyant Banana"
        },
        {
            id: 5,
            haulerID: 3,
            name: "Fishin' Folly"
        },
        {
            id: 6,
            haulerID: 5,
            name: "Jellybean Jollyship"
        },
        {
            id: 7,
            haulerID: 2,
            name: "Whimsical Walrus Wanderer"
        },
        {
            id: 8,
            haulerID: 6,
            name: "Clownfish Cruiser"
        },
        {
            id: 9,
            haulerID: 4,
            name: "Anchovy Adventure Ark"
        },
        {
            id: 10,
            haulerID: 3,
            name: "Wave Rider"
        },
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulers = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getShips = () => {
    return database.shippingShips.map(ship => ({...ship}))
}
