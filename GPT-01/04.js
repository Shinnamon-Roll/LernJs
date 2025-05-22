let scores = [65, 72, 89, 55, 90]

console.log(`1. ${scores.map(scr => scr + 5)}`)
console.log(`2. ${scores.filter(src => src > 70)}`)
console.log(`3. ${scores.reduce((acc, cur) => acc + cur, 0)}`)