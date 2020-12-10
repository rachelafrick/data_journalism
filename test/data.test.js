const data = require('data/coverage.json');

test('all percents should be decimals', () => {
  let decimal = false
  if (data[1].medicaid <=1 ) decimal = true;
  expect(decimal).toBe(true);
});


/*1. check that percentages are formatted as decimals
2. check for zeroes/missing data
3. check for 51 (states + national average)
4. check that each has seven labels (medicate, medicaid, etc)
5. check that no one category is larger than 1 for a single state
6. check that each states totals for the types add up to 1
7. check that there are no duplicate states
8. check that the national average is the average of the data from the 50 states
9. US Average should be labeled United States
10. check that data is in alphabetical order by state 
*/
