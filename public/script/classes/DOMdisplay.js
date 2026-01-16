class DOMDisplay{
    constructor(container){
        this.container = container
    }

    display(data){
        data.forEach(element => {
            const block = document.createElement("div")
            block.id = element.id
            block.classList.add("img-block")
            block.innerHTML = `
                <h2>${element.name}</h2>
                <div style="background-image:url(${element.url});"></div>
            `
            this.container.appendChild(block)
        });
    }
}

export default DOMDisplay