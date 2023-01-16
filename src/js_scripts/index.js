import{model} from './model'
import {Site} from "./classes/site";
import '../main.css'
import{Delete,Add} from "./editor";

const site = new Site('#site')
site.render(model)

document.getElementById(model[2].id).onclick=function (){
    let value=document.getElementById('computersSelector').value
    Delete('computersTable',value)
}
document.getElementById(model[5].id).onclick=function (){
    let value=document.getElementById('softwareSelector').value
    Delete('softwareTable',value)
}
document.getElementById(model[8].id).onclick=function (){
    let value=document.getElementById('officeStSelector').value
    Delete('officeStaffTable',value)
}
document.getElementById(model[model.length-1].id).onclick=function (){
    let value=document.getElementById('edit').value
    let input=document.getElementById('input').value
    if(input!='') {
        let row = input.split(',')
        if(value=='Software'){
                Add(row, 'softwareTable')
        }
        else if(value=='Computers') {
            Add(row, 'computersTable')
        }
        else if(value=='Office staff'){
                Add(row, 'officeStaffTable')
        }
    }
    else
        throw "Error"
}
