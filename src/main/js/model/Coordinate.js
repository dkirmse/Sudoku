SudokuModel.InvalidCoordinateException = function InvalidCoordinateException() 
{
    var tmp = Error.apply(this, arguments);
    tmp.name = this.name = 'InvalidCoordinateException'

    this.message = tmp.message
    Object.defineProperty(this, 'stack', 
    { 
        get: function() {
            return tmp.stack
        }
    })

    return this
};


SudokuModel.Coordinate = function Coordinate()
{
	var _row = undefined;
	var _column = undefined;
	
	constructorArgs = arguments;
	
	(function () 
	{
		switch (constructorArgs.length)
			{
			case 0:
			case 1:
			{
				throw new SudokuModel.InvalidCoordinateException("Coordinate needs row and column");
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
	
	function createFromRowAndColumn(row, column) 
	{
		if (isNaN(row) || row < 1 || row > 9)
		{
			throw new SudokuModel.InvalidCoordinateException("Row must be between 1 and 9");
		}
		if (isNaN(column) || column < 1 || column > 9)
		{
			throw new SudokuModel.InvalidCoordinateException("Column must be between 1 and 9");
		}
		_row = row;
		_column = column;
	};
	
	this.row = function row() 
	{ 
		return _row;
	};
	
	this.column = function column() 
	{ 
		return _column;
	};
	
	this.toString = function toString() 
	{
		return "Row"+_row+"-Col"+_column;
	};
};

