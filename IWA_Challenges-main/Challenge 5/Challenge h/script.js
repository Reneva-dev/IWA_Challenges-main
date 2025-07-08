const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = !Number.isNaN(parseInt (primaryPhone))//should return false
const secondaryValid = !Number.isNaN(parseInt (secondaryPhone))//should return true

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)

