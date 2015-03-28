SudokuModel.Digit = function Digit()
{
	var _value = undefined;
	
	constructorArgs = arguments;

	(function () 
	{
		switch (constructorArgs.length)
			{
			case 0:
			{
				_value = 0;
				break;
			}
			case 1:
			{
				if (isNaN(constructorArgs[0]) || constructorArgs[0] < 0 || constructorArgs[0] > 9)
				{
					throw new SudokuModel.InvalidParameterException("Digit value needs to be between 1 and 9");
				}
				_value = constructorArgs[0];
				break;
			}
			default:
			{
				throw new SudokuModel.InvalidParameterException("Too many parameters");
			}
		};
	})();

	this.NONE;
	
	this.value = function value()
	{
		return _value;
	};
	
	this.toString = function toString()
	{
		return String(_value);
	};
};

SudokuModel.Digit.NONE = Object.freeze(new SudokuModel.Digit(0));
SudokuModel.Digit.ONE = Object.freeze(new SudokuModel.Digit(1));
SudokuModel.Digit.TWO = Object.freeze(new SudokuModel.Digit(2));
SudokuModel.Digit.THREE = Object.freeze(new SudokuModel.Digit(3));
SudokuModel.Digit.FOUR = Object.freeze(new SudokuModel.Digit(4));
SudokuModel.Digit.FIVE = Object.freeze(new SudokuModel.Digit(5));
SudokuModel.Digit.SIX = Object.freeze(new SudokuModel.Digit(6));
SudokuModel.Digit.SEVEN = Object.freeze(new SudokuModel.Digit(7));
SudokuModel.Digit.EIGHT = Object.freeze(new SudokuModel.Digit(8));
SudokuModel.Digit.NINE = Object.freeze(new SudokuModel.Digit(9));

