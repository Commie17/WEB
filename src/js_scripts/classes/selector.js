import{row} from "../utils";

export class SelectorToDelete{
    constructor(selector,length) {
        this.selector=selector
        this.length=length
    }
    getVariants(size){
        let html=`<option>1</option>`
        for(let i=2;i<=size;i++){
            html=`${html}
                    <option>${i}</option>`
        }
        return html
    }
    toHTML(){
        return row(`<label for="${this.selector}">Выберите номер строки для удаления:</label><select id="${this.selector}">${this.getVariants(this.length)}</select>`)
    }
}
export class SelectorToRedact{
    constructor(tables,id) {
        this.id=id
        this.tables=tables
    }
    getVariants(content){
        let html=``
        for(let i=0;i<content.length;i++){
            html=`${html}
                    <option>${content[i]}</option>`
        }
        return html
    }
    toHTML(){
        return row(`<label for="${this.id}">Выберите строку для редактирования:</label><select id="${this.id}">${this.getVariants(this.tables)}</select>`)
    }
}
