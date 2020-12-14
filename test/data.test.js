const data = require('../data/coverage.json');
//1. check that percentages are formatted as decimals
test('all percents should be decimals', () => {
  let decimal = false
  for (let i = 0; i< data.length; i++){
  if (data[i].medicaid <=1 && data[i].medicare <=1 &&data[i].employer <=1&&data[i].uninsured <=1&&data[i].military <=1 &&data[i].nongroup <=1) decimal = true;
  else {
    decimal = false;
    break;
  }
  }
  expect(decimal).toBe(true);
});



//2. check for zeroes/missing data

test('no empty data points', () => {
  let empty = false;
  for (let i = 0; i< data.length; i++){

  if (data[i].medicaid != "" && data[i].medicare !="" &&data[i].employer !="" &&data[i].uninsured  !="" &&data[i].military !="" &&data[i].nongroup !=""){
     empty = true;
   }
   else {
     empty = false
     break;
   }

 }
   expect(empty).toBe(true);
});

//3. check for 51 (states + national average)

test('check for 51 (states + national average)', () => {
  let fifty = false;
  if(data.length==51){
    fifty=true;
  }   
  expect(fifty).toBe(true);
  
});

//4. check that each has seven labels (medicade, medicaid, etc)
test('check that each has seven labels (medicade, medicaid, etc)', () => {
  let seven = false;
  for (let i = 0; i< data.length; i++){

  if (data[i].medicaid != "" && data[i].medicare !="" &&data[i].employer !="" &&data[i].uninsured  !="" &&data[i].military !="" &&data[i].nongroup !=""){
     seven = true;
   }
   else {
     seven = false
     break;
   }

 }
   expect(seven).toBe(true);
});

//5. check that no one category is larger than 1 for a single state
test('check that each has seven labels (medicade, medicaid, etc)', () => {
  let one = false;
  for (let i = 0; i< data.length; i++){

  if (data[i].medicaid <= 1 && data[i].medicare <= 1 &&data[i].employer <= 1 &&data[i].uninsured  <= 1 &&data[i].military <= 1 &&data[i].nongroup <= 1){
     one = true;
   }
   else {
     one = false
     break;
   }

 }
   expect(one).toBe(true);
});

//6. check that each states totals for the types add up to 1
test('check that each has seven labels (medicade, medicaid, etc)', () => {
  let one = false;
  for (let i = 0; i< data.length; i++){

  if (data[i].medicaid + data[i].medicare + data[i].employer + data[i].uninsured  + data[i].military + data[i].nongroup == 1){
     one = true;
   }
   else {
     one = false
     break;
   }

 }
   expect(one).toBe(true);
});

//8. check that the national average is the average of the data from the 50 states

test('average is true average', () => {
  let average = 0;
  for (let i = 1; i< data.length; i++){
 average+=data[i].unisured;

 }
 average = (average/50)
   expect(average).toBe(data[0].unisured);
});

//9. US Average should be labeled United States
test('average is first and labeled United States', () => {
  let avgLabel = false;

  if (data[0].location == "United States"){
     avgLabel = true;
   }
   else {
     avgLabel = false
     break;
   }

   expect(avgLabel).toBe(true);
});

//10. check that the data is in alphabetical order by state
test('average is first and labeled United States', () => {
  let avgLabel = false;

  if (data[0].location == "United States"){
     avgLabel = true;
   }
   else {
     avgLabel = false
     break;
   }

   expect(avgLabel).toBe(true);
});



/*
3. check for 51 (states + national average)
4. check that each has seven labels (medicate, medicaid, etc)
5. check that no one category is larger than 1 for a single state
6. check that each states totals for the types add up to 1

7. check that there are no duplicate states
8. check that the national average is the average of the data from the 50 states
9. US Average should be labeled United States
10. check that data is in alphabetical order by state
*/
