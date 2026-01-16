import DOMDisplay from "./classes/DOMdisplay.js";
import JsonServer from "./classes/JsonServer.js";
import { KEYS, URL } from "./config/config.js";
import { BUTTON_GET, CONTAINER } from "./config/elements.js";

let jsonServer = new JsonServer(URL,KEYS)
let DOMdisplay = new DOMDisplay(CONTAINER)

BUTTON_GET.addEventListener('click',async e=>{
    console.log(await jsonServer.get(0))
    DOMdisplay.display(await jsonServer.get(0))
})