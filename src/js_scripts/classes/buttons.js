import{row} from "../utils";

export class Button{
    constructor(id,key,selector_id){
        this.id=id
        this.key=key
        this.selector_id=selector_id

    }
    toHTML(){
        return row(`<button id="${this.id}" style="width: 200px;height: 20px;background: firebrick" ></button>`)
    }

}
export class EditButton{
    constructor(id){
        this.id=id
    }
    toHTML(){
        return row(`<button id="${this.id}" style="width: 200px;height: 20px;background: lightgreen";></button>`)
    }

}