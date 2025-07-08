const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = !Number.isNan(parseInt (primaryPhone))//should return false
const secondaryValid = !Number.isNan(parseInt (secondaryPhone))//should return true

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)

