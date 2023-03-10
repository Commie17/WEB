export function row(content,style=''){
    return `<div class="row" style="${style}">${content}</div>`
}
export function column(content){
    return `<div class="col-sm">${content}</div>`
}
export function css(styles = {}) {
    if (typeof styles === 'string') return styles
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}
export function table(content){
    return `<table class="table">${content}</table>`
}
