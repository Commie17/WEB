import {getValue} from "../parcer";
import{row,table} from "../utils";
import {GetPC,GetSW,GetOfSt} from "./tables-utils";

export function tableBuilder(dataKey='computersTable'){
    let data=getValue(dataKey)

    switch(dataKey){
        case 'computersTable':
            return row(table(GetPC(createRows(data))));

        case 'softwareTable':
            return row(table(GetSW(createRows(data))));

        case 'officeStaffTable':
            return row(table(GetOfSt(createRows(data))));

        default:
            throw 'Error, please, verify key or code'
    }
}
function createRows(content){
    let html=``
    for(let i=0;i<content.length;i++){
        let data=createCells(content[i])
        html=`${html}
            <tr>
                <td>${i+1}</td>
                ${data}
            </tr>`}
    return html
}
function createCells(row){
    let html=``
    for (let key in row){
        html=`${html}
              <td align="center";valign="middle">${row[key]}</td>`
    }
    return html
}