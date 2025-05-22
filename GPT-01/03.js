let names = ["Shinnamon", "Naon", "Mint"]

for (let name of names) {
    console.log(name)
} 

names.forEach((name, index) => {
    console.log(`${index + 1}. is ${name}`)
})