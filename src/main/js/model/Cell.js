SudokuModel.InvalidParameterException = function InvalidParameterException() 
{
    var tmp = Error.apply(this, arguments);
    tmp.name = this.name = 'InvalidParameterException'

    this.message = tmp.message
    Object.defineProperty(this, 'stack', 
    { 
        get: function() {
            return tmp.stack
        }
    })

    return this
};

SudokuModel.Cell = function Cell()
{
	_coordinate = undefined;
	_digit = SudokuModel.Digit.NONE;
	_candidates = [SudokuModel.Digit.ONE, SudokuModel.Digit.TWO, SudokuModel.Digit.THREE, 
	               SudokuModel.Digit.FOUR, SudokuModel.Digit.FIVE, SudokuModel.Digit.SIX, 
	               SudokuModel.Digit.SEVEN, SudokuModel.Digit.EIGHT, SudokuModel.Digit.NINE];
	_isGiven = false;
	_isUserFilled = false;
	
	constructorArgs = arguments;
	
	(function ()
	{
		switch (constructorArgs.length)
		{
			case 0:
			{
				throw new SudokuModel.InvalidCoordinateException("Coordinate must not be undefined");
			}
			case 1:
			{
				createFromCoordinate(constructorArgs[0]);
				break;
			}
			case 2:
			{
				createFromRowAndColumn(constructorArgs[0], constructorArgs[1]);
				break;
			}
			default:
			{
				throw new SudokuModel.InvalidCoordinateException("Too many parameters");
			}
		};
		
	})();
	
	function createFromCoordinate(coordinate) 
	{
		if (coordinate === null)
		{
			throw new SudokuModel.InvalidCoordinateException("Coordinate must not be null");
		}
		if (coordinate === undefined)
		{
			throw new SudokuModel.InvalidCoordinateException("Coordinate must not be undefined");
		}
		if (!(coordinate instanceof SudokuModel.Coordinate))
		{
			throw new SudokuModel.InvalidCoordinateException("Coordinate expected")
		}
		_coordinate = coordinate;
	};
	
	function createFromRowAndColumn(row, column) {
		_coordinate = new SudokuModel.Coordinate(row, column);
	};
	
	this.coordinate = function coordinate() 
	{
		return _coordinate;
	};
	
	this.digit = function digit()
	{
		return _digit;
	};
	
	function setDigit(digit)
	{
		if (!(digit instanceof SudokuModel.Digit))
		{
			throw new SudokuModel.InvalidParameterException("Digit expected");
		}
		if (!_isGiven)
		{
			_digit = digit;
		}
	};
	
	this.placeDigit = function placeDigit(digit)
	{
		setDigit(digit);
		_isUserFilled = true;
	};
	
	this.isUserFilled = function isUserFilled()
	{
		return _isUserFilled;
	};
	
	this.setGiven = function setGiven(digit)
	{
		if (!_isUserFilled)
		{
			setDigit(digit);
			_isGiven = true;
		}
	};
	
	this.isGiven = function isGiven()
	{
		return _isGiven;
	};
	
	this.isFilled = function isFilled()
	{
		return _isGiven || _isUserFilled;
	};
	
	this.candidates = function candidates()
	{
		if (!this.isFilled())
		{
			return _candidates;
		}
		return [];
	};
	
	this.hasCandidate = function hasCandidate(candidate)
	{
		for (var i = 0; i < _candidates.length; i++)
		{
			if (candidates[i] === candidate)
			{
				return true;
			}
		};
		return false;
	};
	
	this.setCandidates = function setCandidates()
	{
		candidates = arguments;

		if (candidates.length > 9)
		{
			throw new SudokuModel.InvalidParameterException("Too many arguments");
		}
		
		_candidates = [];
		
		for (var i = 0; i < candidates.length; i++)
		{
			if (candidates[i] instanceof SudokuModel.Digit)
			{
				if (!this.hasCandidate(candidates[i]))
				{
					_candidates.push(candidates[i]);
				}
			}
			else
			{
				throw new SudokuModel.InvalidParameterException("Candidates have to be a Digit");
			}
		};
	};
	
	this.unset = function unset()
	{
		if (!_isGiven)
		{
			_digit = SudokuModel.Digit.NONE;
			_isUserFilled = false;
		}
	};

    this.reset = function reset()
    {
        _digit = SudokuModel.Digit.NONE;
        _candidates = [SudokuModel.Digit.ONE, SudokuModel.Digit.TWO, SudokuModel.Digit.THREE,
            SudokuModel.Digit.FOUR, SudokuModel.Digit.FIVE, SudokuModel.Digit.SIX,
            SudokuModel.Digit.SEVEN, SudokuModel.Digit.EIGHT, SudokuModel.Digit.NINE];
        _isGiven = false;
        _isUserFilled = false;
    };
};