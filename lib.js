/*
  TODO: Implement empty function bodies according to their requirements
*/

'use strict'

function createGrowthModel (lengthToWingspan, leavesEatenToWeight) {
  return {
    lengthToWingspan,
    leavesEatenToWeight
  }
}

/**
 * Given an array of growth models, this function finds their average and returns
 * this result as a new growth model object
 *
 * @param growthModels [Array<GrowthModel>] the growth models to average.
 *                                          If empty or undefined, return
 *                                          an undefined growth model
 *
 * @return a GrowthModel object
 */

function averageGrowthModel (growthModels) {
if (growthModels.length > 0){
  const sum = growthModels.reduce((acc, next) =>
    createGrowthModel(acc.lengthToWingspan + next.lengthToWingspan,
        acc.leavesEatenToWeight + next.leavesEatenToWeight), createGrowthModel(0, 0))

  return createGrowthModel(sum.lengthToWingspan / growthModels.length,
    sum.leavesEatenToWeight / growthModels.length)
  }
  // TODO: implement using Array.prototype.reduce()
}

module.exports = {
  createGrowthModel,
  averageGrowthModel
}
