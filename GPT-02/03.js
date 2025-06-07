function divide(a,b) {
    if (b === 0) { 
        throw Error("You can't divided by 0!!!")
    }else {
        return a / b
    }

    // if (b === 0) throw Error("You can't divided by 0!!!")
    // return a / b
}

try {
    console.log(divide(5, 2))
} catch(err) {
    console.error("Error:", err.message)
}