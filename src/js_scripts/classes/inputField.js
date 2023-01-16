export class InputField{
    constructor(id) {
        this.id=id
    }
    toHTML(){
        return`<input type="text" id="${this.id}">`
    }
}