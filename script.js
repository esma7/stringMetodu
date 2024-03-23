const countries = [
  "Pakistan",
  "India",
  "Tajikistan",
  "Russia",
  "Kazakhstan",
  "Greece",
  "Turkmenistan",
  "Turkey",
  "Kyrgyzstan",
  "Ukraine",
  "Uzbekistan",
];

const sentence = "In the end, we only regret the chances we didn't take.";

const books = [
  "To Kill a Mockingbird",
  "1984",
  "The Great Gatsby",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "The Lord of the Rings",
  "Animal Farm",
  "Brave New World",
  "The Grapes of Wrath",
  "The Hobbit",
  "One Hundred Years of Solitude",
  "The Catcher in the Rye",
  "Catch-22",
  "The Brothers Karamazov",
  "Moby Dick",
  "The Odyssey",
  "Frankenstein",
  "Alice's Adventures in Wonderland",
  "The Picture of Dorian Gray",
  "War and Peace",
];

//   Countries array-ində sonu 'stan' ilə bitən ölkələrdən array yaratmaq
// function getCountry(arr){
//   const filtered = arr.filter((item)=>{
//       return item.endsWith("stan");
//   })

//   return filtered;
// }

// console.log(getCountry(countries));

//   Sentence dəyişənindəki bütün sözlərin baş hərfləri böyük şəkildə yazmaq.


// function getCountry(arr){
//   const array= arr.split(" ").map((item)=>{
//      return  item.charAt(0).toUpperCase() + item.slice(1);        
//   });
//   return array;
// }

// console.log(getCountry(sentence));

// 1. Sentence dəyişənini tərsinə yazmaq.

const sentense = "In the end, we only regret the chances we didn't take.";

// function stn(arr) {
//   const array = arr.split(" ").reverse().join(" ");
//   return array;
// }

// console.log(stn(sentense));

// 2. Sentence dəyişənində olan ən uzun sözü tapmaq.

  // function findLongWord(arr){
  //   const array = arr.split(" ");
  //   let longWord = 0;
  //   for(let i = 0; i<array.length; i++){
  //   //  console.log( array[i].length);
  //   if(array[i].length > longWord){{
  //     longWord = array[i].length;
  //   }}
  //   }
  //   return longWord;
  // }

  // console.log(findLongWord(sentense));

  // function findLongestWord(str) {
  //   const longestWord = str.split(' ').sort((a, b) => b.length - a.length);
  //   return longestWord[0];
  // }

  // console.log(findLongestWord(sentense));

  // 3 Books array-ini əlifba sırası ilə yazılmış array-ə çevirmək

//  const hello = (arr) =>{
//       console.log(arr.sort());
//  }

//  hello(books);

 const hello = (arr) =>{
  // let lengthOfBook = 0;
  for(let i=0; i<arr.length; i++){
    console.log(arr[i].length);
  }
 }

 hello(books);

// 4  Books array-ində adı ən uzun olan kitabı tapmaq.


// function findBookName(arr){ 

//   let sizeofname = 0;
//   let findLongWord = " ";

//   for(let i = 0; i<arr.length; i++){
    
//       if(arr[i].length > sizeofname){
//         sizeofname = arr[i].length;
//         findLongWord = arr[i];
//       }
//   }
//   return findLongWord;
// }


// console.log(findBookName(books));


////////////////////////////////////////////////////
// function findBookName(arr){ 

//   let sizeofname = 0;
//   let findLongWord = " ";

//   for(let i = 0; i<arr.length; i++){
      
//       console.log(arr[i].length);
//       if(arr[i].length > sizeofname){
//         sizeofname = arr[i].length;
//         findLongWord = arr[i];
//       }
//   }

//   return sizeofname;
//   return findLongWord;
// }

// findBookName()
// console.log(findBookName(books));




/////////////////////////////////////////////////////////////////////////////////////////////////////////
//  const hello = () =>{
//       console.log(sentense);
//  }

//  hello();

// let str2= "Hello World";
// console.log(str2.slice());



