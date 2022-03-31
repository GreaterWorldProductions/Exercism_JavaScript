// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
 export function totalBirdCount(birdsPerDay) {
    let sumnum = 0
    for(let i = 0; i < birdsPerDay.length; i++){
      sumnum += birdsPerDay[i]
    }
    return sumnum
  }
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
    let birds = birdsPerDay
    let num1 = (week * 7) - 7
    let num2 = week * 7
    let sumnum = 0
    for(let i=0;i<birds.length; i++){
      if( i >= num1 && i < num2 ){
        sumnum += birds[i]
      }
    }
    return sumnum
  }
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
    for(let i=0;i<birdsPerDay.length;i++){
      if(i % 2 == 0){
        birdsPerDay[i] += 1
      }
    }
    return birdsPerDay
  }
  