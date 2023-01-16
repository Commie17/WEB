import{getValue} from "./parcer";
export function Add(data,key){
    let oldData=getValue(key)
    console.log(data)
    oldData.push(data)
    console.log(oldData)
    window.localStorage.setItem(key,JSON.stringify(oldData))
}
export function Delete(key,index=1){
    let row=getValue(key)
    if(row.length>1) {
        row.splice(index - 1, 1)
        window.localStorage.setItem(key,JSON.stringify(row))
    }
    else {
        window.localStorage.setItem(key, JSON.stringify(row))
    }
}