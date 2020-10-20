'use strict';


//          filter

// const names = ['Ivan', 'Zakhar', 'Jane', 'Elena'];

// const shortNames =names.filter(function(name) {
//    return name.length < 5; 
// });
// console.log(shortNames);


//           MAP

// let answers =['Ivan', 'AnnA', 'Hello'];

//  = answers.map(item =>  item.toLowerCase());

// console.log(result);


//   every/ some

// const some = [4, 4,4];

// console.log(some.every(item => typeof(item)=== 'number'));



//    reduce

// const arr = ['apple', 'pear','juice'];


// const res =arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);


const obj ={
    osasa: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr =Object.entries(obj)
.filter(item =>item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);
