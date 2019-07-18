// const fetch = require("node-fetch");

// // const supportedCards = {
// //   visa, mastercard
// // };

// const appState = {};


// const detectCardType = ({ target }) => {


// };

// const validateCardExpiryDate = ({ target }) => {
//     const date = new Date;
//     const validFormat = expiryDateFormatIsValid(target.value);
//     const expiry = new Date(target.value);
//     const dateValid = validFormat && expiry >= date;
//     return dateValid && flagIfInvalid(target, dateValid);


// };

// const validateCardHolderName = ({ target }) => {
//     const format = '/^.{2,}([a-zA-Z]+ ){1}[a-zA-Z]+\w{2,}$/';
//     const name = target.value;

//     if (name.match(format)) {
//         flagIfInvalid(name, true);
//         return true;
//     } else {
//         flagIfInvalid(name, false);
//         return false;
//     }


// };

// const uiCanInteract = _ => {
//     const inputs_digits = document.querySelectorAll('[data-cc-digits] > input');
//     const inputs_info = document.querySelectorAll('[data-cc-info] >input');
//     const btn = document.querySelector([data - pay - btn]);

//     inputs_digits[0].addEventListener('blur', detectCardType, false);
//     console.log('#1 ' + inputs_digits[0].value);
//     inputs_info[0].addEventListener('blur', validateCardHolderName, false);
//     inputs_info[1].addEventListener('blur', validateCardExpiryDate, false);

//     btn.addEventListener('click', validateCardNumber, false);
//     inputs_digits[0].focus();


// };

// const displayCartTotal = ({ results }) => {
//     let [data] = results;
//     const { itemsInCart, buyerCountry } = data;
//     appState.items = itemsInCart;
//     appState.country = buyerCountry;
//     appState.bill = itemsInCart.reduce((total, current) => {
//         return total + (current.price * current.qty);
//     }, 0);
//     appState.billFormatted = formatAsMoney(appState.bill, appState.country);

//     let span = document.querySelector('[data-bill]');
//     span.textContent = appState.billFormatted;

//     uiCanInteract();



// };

// const fetchBill = () => {
//     const api = 'https://randomapi.com/api/006b08a801d82d0c9824dcfdfdfa3b3c';

//     fetch(api).then(response => {
//         return response.json();
//     }).then(displayCartTotal).catch(err => console.error(err));

// }




// const countries = [{
//         code: "US",
//         currency: "USD",
//         country: 'United States'
//     },
//     {
//         code: "NG",
//         currency: "NGN",
//         country: 'Nigeria'
//     },
//     {
//         code: 'KE',
//         currency: 'KES',
//         country: 'Kenya'
//     },
//     {
//         code: 'UG',
//         currency: 'UGX',
//         country: 'Uganda'
//     },
//     {
//         code: 'RW',
//         currency: 'RWF',
//         country: 'Rwanda'
//     },
//     {
//         code: 'TZ',
//         currency: 'TZS',
//         country: 'Tanzania'
//     },
//     {
//         code: 'ZA',
//         currency: 'ZAR',
//         country: 'South Africa'
//     },
//     {
//         code: 'CM',
//         currency: 'XAF',
//         country: 'Cameroon'
//     },
//     {
//         code: 'GH',
//         currency: 'GHS',
//         country: 'Ghana'
//     }
// ];

// const formatAsMoney = (amount, buyerCountry) => {
//     let country = buyerCountry;
//     let countryobj = arr => arr.filter((country, index) => {
//         if (arr[index].country === buyerCountry) {
//             return {
//                 code: arr[index].code,
//                 currency: arr[index].currency
//             };
//         }
//     });

//     if (countryobj(countries).length != 0) {
//         return amount.toLocaleString(countryobj(countries)[0].code, { style: 'currency', currency: countryobj(countries)[0].currency });
//     } else {
//         return amount.toLocaleString('US', { style: 'currency', currency: 'USD' });
//     }


// };

// const flagIfInvalid = (field, isValid) => {
//     if (isValid) {
//         field.classList.remove('is-invalid');
//     } else {
//         field.classList.add('is-invalid');
//     }
// };

// const expiryDateFormatIsValid = (target) => {
//     let format = '/^\d{2}\/\d{2}$/';
//     if (target.match(format)) { return true } else {
//         return false;
//     }

// }

// const startApp = () => {
//     fetchBill();
// };

// startApp();
