const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
  // try {
  //   Object.getOwnPropertyNames(date).length == Object.getOwnPropertyNames(Date).length;
  //   date instanceof Date;
  // } catch (error) {
  //   return error.message('Invalid date!');
  // }
 
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  
  if (!(date instanceof Date)) {
    throw new TypeError('Invalid date!');
  }
  try {
    date.getYear()
    } 
  catch {
    throw new Error('Invalid date!')
  }
 
  let season = '';
  if (date.getMonth() >= 2 && date.getMonth() < 5) {
    season = 'spring';
  }
  if (date.getMonth() >= 5 && date.getMonth() < 8 ) {
    season = 'summer';
  }
  if (date.getMonth() >= 8 && date.getMonth() < 11 ) {
      season = 'autumn';
  }
  if (date.getMonth() === 1 || date.getMonth() === 0 || date.getMonth() === 11) {
      season = 'winter';    
  } 
  return season;
  
  } 
  


module.exports = {
  getSeason
};
