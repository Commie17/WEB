export function getValue(key){
    const tableData=JSON.parse(window.localStorage.getItem(key))
    return tableData
}


