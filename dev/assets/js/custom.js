const buildItem = document.querySelectorAll('.build-item');

const cellAddress = document.querySelector('#address')
const cellFlats = document.querySelector('#flats')
const cellFlatsFree = document.querySelector('#flats-free')
const cellFlatsBooking = document.querySelector('#flats-booking')
const cellFlatsSold = document.querySelector('#flats-sold')


const calcInformation = () => buildItem.forEach(item => {
    let flats = Number(item.getAttribute('data-flats'))
    let flatsBooking = Number(item.getAttribute('data-flats-booking'))
    let flatsSold = Number(item.getAttribute('data-flats-sold'))

    let flatsFree = flats - (flatsBooking + flatsSold)
    item.setAttribute('data-flats-free', flatsFree)

    if(flatsFree === 0) {
        item.classList.add('sold')
        item.addEventListener('click', (event)=> {
            event.preventDefault();
        })
    }
})

calcInformation()




// const x =  4;

// if (x === 1) {
//     console.log('1 Ура!');
// } else if (x === 2) {
//     console.log("2 Ура!");
// } else if (x === 3) {
//     console.log("3 Ура!");
// } else if (x === 4) {
//     console.log("4 Ура!");
// } else {
//     console.log(x + " Ура!");
// }


























const showInformation = (cell, attr) => buildItem.forEach(object => {
    object.addEventListener('mouseover', () => {
        const value = object.getAttribute(attr)
        cell.innerHTML = value
    })
})


showInformation(cellAddress, 'data-address')
showInformation(cellFlats, 'data-flats')
showInformation(cellFlatsFree, 'data-flats-free')
showInformation(cellFlatsBooking, 'data-flats-booking')
showInformation(cellFlatsSold, 'data-flats-sold')





 








// const onLight =(x)=> {
//     console.log('включить ' + x);
// }

// onLight('фары')
// onLight('дворники')
// onLight('музыку')

// const summ = (x, y, a, b, c) => {
//     console.log(x + a + y  + b + c);
// }

// summ(1, 2, 3, 4, 9)
// summ(3, 30)