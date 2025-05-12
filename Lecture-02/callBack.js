let yesmae = (name, callBack) => {
    let result = name + " Hee yai mak"
    callBack(result + "Yes or no")
}

let sure = (something) => {
    console.log(something)
}

console.log(yesmae("Shinnamon", sure))