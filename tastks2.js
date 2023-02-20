// // // // // // // // // // // // // // // /////////////// ~~~~ 1 ~~~~~~ ////////////////
// // // // // // // // // // // // // function handleData(type) {
// // // // // // // // // // // // //     let dataArray = [];
  
// // // // // // // // // // // // //     switch(type) {
// // // // // // // // // // // // //       case 'SET':
// // // // // // // // // // // // //         console.log('SET');
// // // // // // // // // // // // //         dataArray.push(Math.floor(Math.random() * 10) + 1);
// // // // // // // // // // // // //         break;
// // // // // // // // // // // // //       case 'GET':
// // // // // // // // // // // // //         console.log(dataArray);
// // // // // // // // // // // // //         break;
// // // // // // // // // // // // //       case 'DELETE':
// // // // // // // // // // // // //         if (dataArray.length === 0) {
// // // // // // // // // // // // //           console.error('SILINECEK DATA TAPILMADI');
// // // // // // // // // // // // //           return;
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //         dataArray.pop();
// // // // // // // // // // // // //         console.log(dataArray);
// // // // // // // // // // // // //         break;
// // // // // // // // // // // // //       default:
// // // // // // // // // // // // //         console.warn('UNKNOWN TYPE:', type);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // /////////////// ~~~~ 2 ~~~~~~ ////////////////
// // // // // // // // // // // // let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// // // // // // // // // // // // for (let i = 0; i < mL.length; i++) {
// // // // // // // // // // // //   let days;
// // // // // // // // // // // //   switch (mL[i]) {
// // // // // // // // // // // //     case 'January':
// // // // // // // // // // // //     case 'March':
// // // // // // // // // // // //     case 'May':
// // // // // // // // // // // //     case 'July':
// // // // // // // // // // // //     case 'August':
// // // // // // // // // // // //     case 'October':
// // // // // // // // // // // //     case 'December':
// // // // // // // // // // // //       days = 31;
// // // // // // // // // // // //       break;
// // // // // // // // // // // //     case 'April':
// // // // // // // // // // // //     case 'June':
// // // // // // // // // // // //     case 'September':
// // // // // // // // // // // //     case 'November':
// // // // // // // // // // // //       days = 30;
// // // // // // // // // // // //       break;
// // // // // // // // // // // //     case 'February':
// // // // // // // // // // // //       days = 28; // vıya 29, gün olarsa
// // // // // // // // // // // //     default:
// // // // // // // // // // // //       days = -1; 
// // // // // // // // // // // //   }
// // // // // // // // // // // //   console.log(mL[i] + ' - ' + days + ' days');
// // // // // // // // // // // // }
// // // // // // // // // // // // // // // /////////////// ~~~~ 3 ~~~~~~ ////////////////
// // // // // // // // // // // const now = new Date();
// // // // // // // // // // // const month = now.toLocaleString('default', { month: 'long' });
// // // // // // // // // // // const year = now.getFullYear();
// // // // // // // // // // // const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate();

// // // // // // // // // // // console.log(month + ' - ' + daysInMonth + ' days');
// // // // // // // // // // // // // // // /////////////// ~~~~ 4 ~~~~~~ ////////////////
// // // // // // // // // // let dateStr = '2023-02-20'; // Örnek olarak 20 Şubat 2023 tarihini kullanalım

// // // // // // // // // // let date = new Date(dateStr); 

// // // // // // // // // // let month = date.getMonth(); 

// // // // // // // // // // switch (month) {
// // // // // // // // // //   case 0:
// // // // // // // // // //   case 1:
// // // // // // // // // //   case 2:
// // // // // // // // // //   case 3:
// // // // // // // // // //   case 4:
// // // // // // // // // //   case 5:
// // // // // // // // // //     console.log('Bu tarix ' + (date.getFullYear()) + ' ilin ilk yarısına aiddir.');
// // // // // // // // // //     break;
// // // // // // // // // //   case 6:
// // // // // // // // // //   case 7:
// // // // // // // // // //   case 8:
// // // // // // // // // //   case 9:
// // // // // // // // // //   case 10:
// // // // // // // // // //   case 11:
// // // // // // // // // //     console.log('Bu tarix ' + (date.getFullYear()) + ' ilin ikinci yarısına aiddir.');
// // // // // // // // // //     break;
// // // // // // // // // //   default:
// // // // // // // // // //     console.log('Sef tarix yazmısınız.');
// // // // // // // // // // }
// // // // // // // // // // // // // // // /////////////// ~~~~ 5 ~~~~~~ ////////////////
// // // // // // // // // let today = new Date();
// // // // // // // // // let dayOfWeek = today.getDay();
// // // // // // // // // let half;
// // // // // // // // // switch (dayOfWeek) {
// // // // // // // // //   case 0:
// // // // // // // // //   case 1:
// // // // // // // // //   case 2:
// // // // // // // // //   case 3:
// // // // // // // // //   case 4:
// // // // // // // // //     half = "First half";
// // // // // // // // //     break;
// // // // // // // // //   case 5:
// // // // // // // // //   case 6:
// // // // // // // // //     half = "Second half";
// // // // // // // // //     break;
// // // // // // // // //   default:
// // // // // // // // //     half = "Unknown";
// // // // // // // // // }
// // // // // // // // // console.log("Bu gun " + today.toLocaleString("en-US", { weekday: "long" }));
// // // // // // // // // console.log("It belongs to the " + half + " of the week.");
// // // // // // // // // // // // // // // /////////////// ~~~~ 6 ~~~~~~ ////////////////
// // // // // // // // let currentDate = new Date();
// // // // // // // // let day = currentDate.getDate();
// // // // // // // // let dayOfWeek = currentDate.getDay();
// // // // // // // // let month = currentDate.getMonth();

// // // // // // // // let firstDayOfMonth = new Date(currentDate.getFullYear(), month, 1).getDay();

// // // // // // // // let weekOfMonth = Math.ceil((day - (7 - firstDayOfMonth)) / 7);

// // // // // // // // console.log(`Bu deqiqe ${month+1}. ayın ${weekOfMonth}. heftesindeyik.`);
// // // // // // // // // // // // // // // /////////////// ~~~~ LOOPLAR 1.1 ~~~~~~ ////////////////
// // // // // // // let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// // // // // // // let ayriArray = [];

// // // // // // // for (let i = 0; i < mL.length; i++) {
// // // // // // //   ayriArray.push([mL[i]]);
// // // // // // // }

// // // // // // // // // // // // // // // /////////////// ~~~~ LOOPLAR 1.2 ~~~~~~ ////////////////
// // // // // // let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// // // // // // let ayriArray = [];

// // // // // // for (let i = 0; i < 3; i++) {
// // // // // //   let mArray = [];
// // // // // //   for (let j = i * 4; j < (i + 1) * 4; j++) {
// // // // // //     mArray.push(mL[j]);
// // // // // //   }
// // // // // //   ayriArray.push(mArray);
// // // // // // }

// // // // // // console.log(ayriArray);
// // // // // // // // // // // // // // // /////////////// ~~~~ LOOPLAR 1.3 ~~~~~~ ////////////////
// // // // // let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// // // // // let mLNew = [];
// // // // // let j = 0;
// // // // // for (let i = 0; i < mL.length; i+=3) {
// // // // //     let arr = [];
// // // // //     arr.push(mL[i]);
// // // // //     arr.push(mL[i+1]);
// // // // //     let subArr = [];
// // // // //     subArr.push(mL[i+2]);
// // // // //     subArr.push(mL[i+3]);
// // // // //     arr.push(subArr);
// // // // //     mLNew.push(arr);
// // // // //     j++;
// // // // // }
// // // // // console.log(mLNew)
// // // // // // // // // // // // // // // /////////////// ~~~~ LOOPLAR 1.4 ~~~~~~ ////////////////
// // // // let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// // // // let newArr = [];
// // // // let subArr = [];

// // // // for (let i = 0; i < mL.length; i++) {
// // // //   subArr.push(mL[i]);
// // // //   if (i % 3 === 0 && i !== 0) {
// // // //     newArr.push(subArr);
// // // //     subArr = [];
// // // //   }
// // // // }
// // // // let finalArr = [
// // // //   newArr[0],
// // // //   newArr[1],
// // // //   [newArr[2][0], [newArr[2][1], newArr[2][2]]]
// // // // ];

// // // // console.log(finalArr);
// // // // // // // // // // // // // // // /////////////// ~~~~ LOOPLAR 1.5 ~~~~~~ ////////////////
// // // let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// // // let newArr = [];
// // // let subArr = [];

// // // for (let i = 0; i < mL.length; i++) {
// // //   subArr.push(mL[i]);
// // //   if (i % 3 === 0 && i !== 0) {
// // //     newArr.push(subArr);
// // //     subArr = [];
// // //   }
// // // }

// // // let finalArr = [
// // //   [newArr[0][0], newArr[0][1], [newArr[0][2], newArr[0][3]]],
// // //   [newArr[1][0], [newArr[1][1], newArr[1][2], newArr[1][3]]],
// // //   [newArr[2][0], newArr[2][1], [newArr[2][2], newArr[2][3]]]
// // // ];

// // // console.log(finalArr);
// // // // // // // // // // // // // // // /////////////// ~~~~ LOOPLAR 2 ~~~~~~ ////////////////
// // let fullName = 'Azar Aliyev';

// // let firstName = fullName.split(' ')[0]; // Ad
// // let lastName = fullName.split(' ')[1]; // Soyad

// // let result = [];

// // for (let i = 0; i < firstName.length; i++) {
// //   let innerArr = [];
// //   innerArr.push(firstName[i]);
// //   if (lastName[i]) {
// //     innerArr.push(lastName[i]);
// //   } else {
// //     innerArr.push('X');
// //   }
// //   result.push(innerArr);
// // }

// // console.log(result);
// // // // // // // // // // // // // // // /////////////// ~~~~ LOOPLAR 3 ~~~~~~ ////////////////
// // let str = 'Ey babeK kebaB ye!';
// // let result = '';

// // for (let i = str.length - 1; i >= 0; i--) {
// //   let char = str[i];
// //   if (char === char.toUpperCase()) {
// //     result += char.toLowerCase();
// //   } else {
// //     result += char.toUpperCase();
// //   }
// // }

// // console.log(result);
// // // // // // // // // // // // // // // // /////////////// ~~~~ LOOPLAR 4 ~~~~~~ ////////////////
// // let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34];

// // let sum = 0;

// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] % 5 === 0 && arr[i] % 7 === 0) {
// //     sum += arr[i];
// //   }
// // }

// // console.log(sum);
// // // // // // // // // // // // // // // // /////////////// ~~~~ LOOPLAR 5 ~~~~~~ ////////////////
// // let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34];

// // let maxThreeDigitNum = 0;

// // for (let i = 0; i < arr.length; i++) {
// //   let num = arr[i];
// //   if (num >= 100 && num <= 999 && num > maxThreeDigitNum) {
// //     maxThreeDigitNum = num;
// //   }
// // }

// // console.log(maxThreeDigitNum);
// // // // // // // // // // // // // // // // /////////////// ~~~~ LOOPLAR 5 ~~~~~~ ////////////////
// let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34];

// let minNum = Infinity; 
// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   if (num % 3 === 0 && num !== 3 && num < minNum) {
//     minNum = num;
//   }
// }
// console.log(minNum);