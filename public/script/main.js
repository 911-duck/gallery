import DOMEvents from "./classes/DOMevents.js";
import JsonServer from "./classes/JsonServer.js";
import SortArr from "./classes/sortArr.js";
import { KEYS, URL } from "./config/config.js";
import { BUTTON_GET, BUTTON_POST, BUTTON_SORT_AZ, BUTTON_SORT_RANDOM, CONTAINER, INPUT_NAME, INPUT_URL } from "./config/elements.js";

let jsonServer = new JsonServer(URL, KEYS)
let DOMevents = new DOMEvents(CONTAINER)
let sortArr = new SortArr([])

BUTTON_GET.addEventListener('click', async e => {
    let data = await jsonServer.get(0)
    DOMevents.display("img-block", data ,jsonServer)
    sortArr.updateArr(data)
})

BUTTON_POST.addEventListener('click', async e => {
    let data = await jsonServer.post(0, { name: INPUT_NAME.value, url: INPUT_URL.value})
    DOMevents.display("img-block", data ,jsonServer)
    sortArr.updateArr(data)
})

BUTTON_SORT_AZ.addEventListener('click',async e=>{
    let data = await jsonServer.get(0)
    sortArr.updateArr(data)
    data = sortArr.sortAZ()
    DOMevents.display("img-block", data ,jsonServer)
})

BUTTON_SORT_RANDOM.addEventListener('click',async e=>{
    let data = await jsonServer.get(0)
    sortArr.updateArr(data)
    data = sortArr.sortRandom()
    DOMevents.display("img-block", data ,jsonServer)
})