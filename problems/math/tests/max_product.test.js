'use strict';

const solution = require('../prompts/max_product.js'),
      assert = require ('chai').assert;

describe('Math', () => {
  describe('allBreakdownOptions', () => {

    it('should return an array of arrays of numbers', () => {
      const three = solution.allBreakdownOptions(3);
      assert.isArray(three, "fn should return an array");
      three.forEach(arrayOfNums => {
        assert.isArray(arrayOfNums, "the array returned should be composed of other arrays");
        arrayOfNums.forEach(number => {
          assert.isNumber(number, "the inner arrays should contain only numbers");
        })
      });
    });

    it('should find all permutations of single digit numbers', () => {
      assert.deepEqual(solution.allBreakdownOptions(3), [[1,1,1],[1,2],[2,1]], 'returns array of arrays of all possible breakdowns for 3');
      assert.deepEqual(solution.allBreakdownOptions(4), [[1,1,1,1],[1,1,2],[1,2,1],[1,3],[2,1,1],[2,2],[3,1]], 'returns array of all possible breakdowns for 4');
    });

  });

  xdescribe('maxProduct', () => {

    it('should find the largest product of single digit numbers', () => {
      assert.strictEqual(solution.maxProduct(6), 9);
      assert.strictEqual(solution.maxProduct(8), 18);
      assert.strictEqual(solution.maxProduct(9), 27);
    });

    it('should work for edge cases and find the largest product of small single digit numbers', () => {
      assert.strictEqual(solution.maxProduct(1), 1);
      assert.strictEqual(solution.maxProduct(2), 1);
      assert.strictEqual(solution.maxProduct(3), 2);
    });

    xit('should find the largest product of multiple digit numbers', () => {
      assert.strictEqual(solution.maxProduct(20), 1458);
      assert.strictEqual(solution.maxProduct(100), 7412080755407364);
    });
  });
});
