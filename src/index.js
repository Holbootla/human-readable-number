module.exports = function toReadable (number) {
	const numberList = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
	}

	const decimalToString = (num, numArr) => {
		if ((num <= 20) || ((num % 10 === 0) && (num < 100))) {
			return numberList[`${num}`]
		} else if ((num % 10 !== 0) && (num < 100)) {
			return numberList[`${numArr[0] * 10}`] + ' ' + numberList[`${numArr[1]}`]
		}
	}

	const numberArray = number.toString().split('')

	if (number < 100) {
		return decimalToString(number, numberArray)
	}

	if (number < 1000) {
		const hundredsString = numberList[`${numberArray[0]}`] + ' ' + 'hundred'
		const numberArrayDecimal = numberArray.slice(-2)
		const numberDecimal = +(numberArrayDecimal.join(''))
		let decimalsString = decimalToString(numberDecimal, numberArrayDecimal)
		if (numberDecimal === 0) {
			return hundredsString
		} else {
			return hundredsString + ' ' + decimalsString
		}
	}
}
