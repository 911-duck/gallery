class JsonServer {
    constructor(url, keys) {
        this.url = url,
        this.keys = keys
    }

    async getLastID(key) {
        let data = await this.get(key);
        return data[data.length - 1].id;
    }

    async get(whatsKey) {
        const json = await fetch(this.url + "/" + this.keys[whatsKey])
        const rest = await json.json()
        return rest
    }

    async delete(key, id) {
        const json = await fetch(this.url + "/" + this.keys[key] + "/" + String(id), {
            method: 'DELETE'
        })
        let newObj = await this.get(0)
        return newObj
    }

    async post(key, obj) {
        obj.id = String(await this.getLastID(key)*1+1)
        const json = await fetch(this.url + "/" + this.keys[key], {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        let newObj = await this.get(0)
        return newObj
    }
    async patch(key, obj,id) {
        const json = await fetch(this.url + "/" + this.keys[key] + "/" + String(id), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        let newObj = await this.get(0)
        return newObj
    }
}

export default JsonServer