import {Table,TextBlock} from "./classes/blocks";
import {tableBuilder} from "./tables/table-builder";
import{getValue} from "./parcer";
import{SelectorToDelete,SelectorToRedact} from "./classes/selector";
import{Button,EditButton} from "./classes/buttons";
import{InputField} from "./classes/inputField";

let computerTable=new Table(tableBuilder('computersTable'))
let softwareTable=new Table(tableBuilder('softwareTable'))
let officeStaffTable=new Table(tableBuilder('officeStaffTable'))
let computersSelector=new SelectorToDelete('computersSelector',getValue('computersTable').length)
let softwareSelector=new SelectorToDelete('softwareSelector',getValue('softwareTable').length)
let officeStSelector=new SelectorToDelete('officeStSelector',getValue('officeStaffTable').length)
let deleteButton=new Button('computersTableDel','computersTable','computersSelector')
let deleteButtonSoft=new Button('softTableDel','softwareTable','softwareSelector')
let deleteButtonOfSt=new Button('ofStTableDel','officeStaffTable','officeStSelector')
let input=new InputField('input')
let editButton=new EditButton('updateButton')
let editSelector=new SelectorToRedact(['Computers','Software','Office staff'],'edit')
let text=new TextBlock('Для редактирования строк выберите таблицу из выпадающего списка, запиши поле ввода через запятую параметр для каждого столбца и нажмите зелёную кнопку')

export const model=[
    computerTable,
    computersSelector,
    deleteButton,
    softwareTable,
    softwareSelector,
    deleteButtonSoft,
    officeStaffTable,
    officeStSelector,
    deleteButtonOfSt,
    text,
    input,
    editSelector,
    editButton
]
