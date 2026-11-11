
// let num= prompt("запиши свое имя")
// function greet(num){
//     console.log("привет " + num)
// }

// greet(num)

// function calculateSum(a, b) {
//     return a+b;
// }


// console.log(calculateSum(5, 3))
// console.log(calculateSum(10, 20))
// let a=18
// let b= Number(prompt("сколько тебе лет?"))

// function checkAge(a, b) {
//     if (a>b) {
//         console.log("доступ запрещен")
//         return true
//     }
//      else{
//         console.log("доступ разрешен")
//         return false
//     }
// }

// checkAge(a, b)

// let num=3
// function checkNumber(num) {
//     if (num%2 === 0) {
//         console.log("четное число")
//     }
//     else if (num%2 == 1){
//         console.log("нечетное число")
//     }
//     else{
//         console.log("это не число")
//     }   
// }
// checkNumber(num)

 function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            console.log("Сумма чисел: " + (a + b));
            return a + b;
            
        case "-":
            console.log("Разность чисел: " + (a - b));
            return a - b;
        case "*":
            console.log("Произведение чисел: " + (a * b));
            return a * b;
        case "/":
            if (b === 0) {
                console.log("На ноль делить нельзя");
                return "На ноль делить нельзя";
            }
            console.log("Частное чисел: " + (a / b));
            return a / b;
        default:
            console.log("Неизвестная операция");
            return "Неизвестная операция";
    }
}
calculator(2, 0, "/");


