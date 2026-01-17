class DOMEvents{
    constructor(container){
        this.container = container
    }

    display(DOMclass,data,obj){
        let blocks = []
        this.container.innerHTML =""
        data.forEach(element => {
            const block = document.createElement("div")
            block.id = element.id
            block.classList.add(DOMclass)
            block.innerHTML = `
                <input disabled>
                <div style="background-image:url(${element.url});"></div>
            `
            block.querySelector("input").value = element.name
            blocks.push(block)
            this.container.appendChild(block)
        });
        this.addEventlistenersDelete(blocks,"dblclick", obj)
        this.addEventlistenersEdit(blocks,"click",obj)
        return blocks
    }
    
    addEventlistenersDelete(blocks,type,obj){
        blocks.forEach(element => {
            element.addEventListener(type,async e=>{
                this.display("img-block",await obj.delete(0,element.id),obj)
            })
        });
    }

    async edit(method,element,obj,id){
        if (!method) {
            element.classList.add("edit")
            element.querySelector("input").disabled = false
        }else{
            element.classList.remove("edit")
            element.querySelector("input").disabled = true
            let data = await obj.patch(0,{name: element.querySelector("input").value},id)
            this.display("img-block",data,obj)
        }
    }

    addEventlistenersEdit(blocks,type,obj){
        blocks.forEach(element => {
            element.querySelector("div").addEventListener(type,async e=>{
                await this.edit(element.classList.contains("edit"),element,obj,element.id)
            })
        });
    }
}

export default DOMEvents