const greet = (name) => `Hello ${name}`

console.log(greet("Shinnamon"))

const calculate = (a, b, operator) => {
    switch (operator) {
        case "+": return a+b

        case "-":
            console.log(a - b)
            break
        
        case "*":
            console.log(a * b)
            break

        case "/":
            console.log(a / b)
            break 
    } 
}

calculate(10, 20 , "+")