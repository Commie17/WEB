export function GetPC(content) {
    return `<tr style="align-content: center;">Computers</tr>
                <tbody>
                <tr>
                    <th>№ п/п</th>
                    <th>Имя пользователя</th>
                    <th>Название компьютера</th>
                    <th>Номер адуитории, где находится компьютер</th>
                </tr>
                ${content}
                </tbody>
                `
}
export function GetSW(content) {
    return `<tr style="align-content: center">Software</tr>
                <tbody>
                <tr>
                    <th>№ п/п</th>
                    <th>Наименование продукта</th>
                    <th>Срок действия</th>
                </tr>
                ${content}
                </tbody>
                `
}
export function GetOfSt(content) {
    return `<tr style="align-content: center">Office staff</tr>
                <tbody>
                <tr>
                    <th>№ п/п</th>
                    <th>Имя пользователя</th>
                    <th>Название компьютера</th>
                </tr>
                ${content}
                </tbody>
                `
}
