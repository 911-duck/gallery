class JsonServer{
    constructor(url,keys){
        this.url = url,
        this.keys = keys
    }

    async get(whatsKey){
        const json = await fetch(this.url+"/"+this.keys[whatsKey]) 
        const rest = await json.json()
        return rest 
    }
}

export default JsonServer