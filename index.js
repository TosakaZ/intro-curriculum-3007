'use strict';

/**
* 引数の値が 17 で割り切れる整数であると真を返す
* @param {number} num
* @return {boolean} 17 で割り切れたかどうか
*/
function isSeventeen (num) {
	return num % 17 === 0;
}

module.exports = {
	isSeventeen: isSeventeen
}
