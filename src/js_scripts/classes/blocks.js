import{row,column,css} from "../utils";
class Block{
    constructor(value='', options='') {
        this.value=value
        this.options=options
    }
    toHTML(){
        throw "Error"
    }
}
export class TextBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }
    toHTML() {
        return row(column(`<p>${this.value}</p>`,css(this.options.styles)))
    }
}
export class Table extends Block{
    constructor(value, options) {
        super(value,options)
    }
    toHTML() {
        return row(`${this.value}`, css(this.options.styles))
    }
}


