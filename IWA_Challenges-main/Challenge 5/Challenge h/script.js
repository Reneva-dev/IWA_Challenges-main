const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const isNumeric = str => /^\d+$/.test(str)

const primaryValid = isNumeric(primaryPhone)
const secondaryValid = isNumeric(secondaryPhone)

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)
