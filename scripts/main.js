import { dockList } from "./docks.js";
import { haulerList } from "./haulers.js";
import { shipList } from "./ships.js";

const mainContainer = document.querySelector("#container")

const containerHTML = `
<h1>Shipping Ship Ships</h1>
    <article class="details">
        <section class="details--list-column">
            <h2>Docks</h2>
            ${dockList()}    
        </section>
        <section class="details--list-column">
            <h2>Haulers</h2>
            ${haulerList()}
        </section>
        <section class="details--list-column">
            <h2>Ships</h2>
            ${shipList()}
        </section>
    </article>`

mainContainer.innerHTML = containerHTML