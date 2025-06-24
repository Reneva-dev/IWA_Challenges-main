const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

let currency = null
let shipping = null
let location = 'RSA'
let customers = 1

// Product costs
const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED

const total = shoes + batteries + pens + shirts + toys 

if (location === 'RSA' ) {
    shipping = 400
    currency = 'R'
} else {
  currency = $
  shipping = location === 'NAM' ? 600 : 800
}



//if (location === 'RSA' ) {
//   shipping = 400
//   currency = 'R'
//} 
//if (location ==='NAM') {
//   shipping = 600
 //   currency = $
//}

//else {
//  shipping = 800
//  currency = $
//}


let totalCost = shoes + toys + shirts + batteries + pens;

// Set shipping and currency based on location
if (location === 'RSA') {
  shipping = 400;
  currency = 'R';
} else if (location === 'NAM') {
  shipping = 600;
  currency = '$';
} else if (location === 'NK') {
  console.log(BANNED_WARNING);
  // Stop further execution
} else {
  shipping = 800;
  currency = '$';
}

const isFreeLocal = currency === 'R' && total >=1000
const isFreeInt = currency === '$' && total >=60
const isFree = isFreeLocal || is FreeInt

const IS_FREE_WARNING = isFree && customers!==1

if (shipping = 0) && (customers !=== 1) {console.log(WARNING) }



