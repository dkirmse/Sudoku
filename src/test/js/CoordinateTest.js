describe("A Coordinate", function() 
{
	it("throws on one parameter", function()
	{
		var coordinateConstructor = function(){ new SudokuModel.Coordinate(1)} 
		expect(coordinateConstructor).toThrow(new SudokuModel.InvalidCoordinateException("Coordinate needs row and column"));
	});

	it("throws on more than two parameters", function()
	{
		var coordinateConstructor = function(){ new SudokuModel.Coordinate(1,1,1)} 
		expect(coordinateConstructor).toThrow(new SudokuModel.InvalidCoordinateException("Too many parameters"));
	});

	it("throws on undefined Coordinate", function()
	{
		var coordinateConstructor = function(){ new SudokuModel.Coordinate(undefined)} 
		expect(coordinateConstructor).toThrow(new SudokuModel.InvalidCoordinateException("Coordinate needs row and column"));
	});

	it("throws on missing coordinate", function()
	{
		var coordinateConstructor = function(){ new SudokuModel.Coordinate()} 
		expect(coordinateConstructor).toThrow(new SudokuModel.InvalidCoordinateException("Coordinate needs row and column"));
	});

	it("throws on negative row", function()
	{
		var coordinateConstructor = function(){ new SudokuModel.Coordinate(-1,1)} 
		expect(coordinateConstructor).toThrow(new SudokuModel.InvalidCoordinateException("Row must be between 1 and 9"));
	});

	it("throws on row = 0", function()
	{
		var coordinateConstructor = function(){ new SudokuModel.Coordinate(0,1)} 
		expect(coordinateConstructor).toThrow(new SudokuModel.InvalidCoordinateException("Row must be between 1 and 9"));
	});

	it("throws on row > 9", function()
	{
		var coordinateConstructor = function(){ new SudokuModel.Coordinate(10,1)} 
		expect(coordinateConstructor).toThrow(new SudokuModel.InvalidCoordinateException("Row must be between 1 and 9"));
	});

	it("throws on row not numeric", function()
	{
		var coordinateConstructor = function(){ new SudokuModel.Coordinate("a",1)} 
		expect(coordinateConstructor).toThrow(new SudokuModel.InvalidCoordinateException("Row must be between 1 and 9"));
	});

	it("throws on negative column", function()
	{
		var coordinateConstructor = function(){ new SudokuModel.Coordinate(1,-1)} 
		expect(coordinateConstructor).toThrow(new SudokuModel.InvalidCoordinateException("Column must be between 1 and 9"));
	});

	it("throws on column = 0", function()
	{
		var coordinateConstructor = function(){ new SudokuModel.Coordinate(1,0)} 
		expect(coordinateConstructor).toThrow(new SudokuModel.InvalidCoordinateException("Column must be between 1 and 9"));
	});

	it("throws on column > 9", function()
	{
		var coordinateConstructor = function(){ new SudokuModel.Coordinate(1,10)} 
		expect(coordinateConstructor).toThrow(new SudokuModel.InvalidCoordinateException("Column must be between 1 and 9"));
	});

	it("throws on column not numeric", function()
	{
		var coordinateConstructor = function(){ new SudokuModel.Coordinate(1,"a")} 
		expect(coordinateConstructor).toThrow(new SudokuModel.InvalidCoordinateException("Column must be between 1 and 9"));
	});

	it("returns its row on row()", function()
	{
		var coordinate = new SudokuModel.Coordinate(3,2); 
		expect(coordinate.row()).toBe(3);
	});

	it("returns its column on column()", function()
	{
		var coordinate = new SudokuModel.Coordinate(3,2); 
		expect(coordinate.column()).toBe(2);
	});

	it("converts row and column to a readable string", function()
	{
		var coordinate = new SudokuModel.Coordinate(3,2); 
		expect(coordinate.toString()).toBe("Row3-Col2");
	});
	
	it("protects its private parts: _row", function()
	{
		var coordinate = new SudokuModel.Coordinate(3,2); 
		expect(coordinate._row).toBe(undefined);
		expect(coordinate._column).toBe(undefined);
	});
});
