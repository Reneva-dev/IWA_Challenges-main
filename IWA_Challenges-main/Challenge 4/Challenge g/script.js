const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

let currency = null
let shipping = null
let location = 'RSA'
let customers = 1

// Product costs
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

if (location === 'RSA' ) {
    shipping = 400
    currency = 'R'
} else {
  currency = $
  shipping = location === 'NAM' ? 600 : 800
}

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

// Free shipping conditions
if (
  (location === 'RSA' && totalCost >= 1000 && customers === 1) ||
  (location === 'NAM' && totalCost >= 60 && customers === 1)
) {
  shipping = 0;
} else if (customers !== 1 && (location === 'RSA' || location === 'NAM') && totalCost >= 1000) {
  console.log(FREE_WARNING);
}

// Final output
if (location !== 'NK') {
  const finalTotal = totalCost + shipping;
  console.log('Price:', currency + finalTotal);
}
