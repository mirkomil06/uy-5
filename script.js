let foreName = prompt("Ismingizni kiriting:")

function summary() {
    let yearBirth = prompt("Tug'ilgan yilingizni kiriting:")
    let thisYear = prompt("Hozirgi yilni kiriting:")
    return thisYear - yearBirth
}

alert(`Ismingiz ${foreName} .Yoshingiz ${summary()}`)

let number = +prompt("Misol miqdorini kiriting")
let a, b, c;

function example(a, b) {
    return Math.floor(Math.random(a, b) * 10)
}
function gestures(c) {
    return Math.floor(Math.random(c) * 5);
}

for (let i = 0; i < number; i++) {

    a = example();
    b = example();
    c = gestures();

    if (c == 1) {
        let answer = +prompt(a + ' + ' + b);
        if (a + b == answer) {
            alert("Sizning javob to'g'ri - " + answer)
        } else {
            alert(`Sizning javob noto'g'ri - ${answer}! To'g'ri javob - ` + (a + b) + '!')
        } 
    } else if (c == 2) {
        let answer = +prompt(a + ' - ' + b);
        if (a - b == answer) {
            alert("Sizning javob to'g'ri - " + answer)
        } else {
            alert(`Sizning javob noto'g'ri - ${answer}! To'g'ri javob - ` + (a - b) + '!')
        } 
    } else if (c == 3) {
        let answer = +prompt(a + ' * ' + b);
        if (a * b == answer) {
            alert("Sizning javob to'g'ri - " + answer)
        } else {
            alert(`Sizning javob noto'g'ri - ${answer}! To'g'ri javob - ` + (a * b) + '!')
        }
    } else {
        let answer = +prompt(a + ' : ' + b);
        if (a / b == answer) {
            alert("Sizning javob to'g'ri - " + answer)
        } else {
            alert(`Sizning javob noto'g'ri - ${answer}! To'g'ri javob - ` + (a / b) + '!')
        }
    }

}