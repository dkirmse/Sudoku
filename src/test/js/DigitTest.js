describe("A Digit", function()
{
	it("equals SudokuModel.Digit.NONE on empty constructor", function()
	{
		digit = new SudokuModel.Digit();
		expect(digit.value()).toBe(SudokuModel.Digit.NONE.value());
	});

	it("equals SudokuModel.Digit.NONE on constructor 0", function()
	{
		execute(0, SudokuModel.Digit.NONE.value());
	});

	it("equals SudokuModel.Digit.ONE on constructor 1", function()
	{
		execute(1, SudokuModel.Digit.ONE.value());
	});

	it("equals SudokuModel.Digit.TWO on constructor 2", function()
	{
		execute(2, SudokuModel.Digit.TWO.value());
	});

	it("equals SudokuModel.Digit.THREE on constructor 3", function()
	{
		execute(3, SudokuModel.Digit.THREE.value());
	});

	it("equals SudokuModel.Digit.FOUR on constructor 4", function()
	{
		execute(4, SudokuModel.Digit.FOUR.value());
	});

	it("equals SudokuModel.Digit.FIVE on constructor 5", function()
	{
		execute(5, SudokuModel.Digit.FIVE.value());
	});

	it("equals SudokuModel.Digit.SIX on constructor 6", function()
	{
		execute(6, SudokuModel.Digit.SIX.value());
	});

	it("equals SudokuModel.Digit.SEVEN on constructor 7", function()
	{
		execute(7, SudokuModel.Digit.SEVEN.value());
	});

	it("equals SudokuModel.Digit.EIGHT on constructor 8", function()
	{
		execute(8, SudokuModel.Digit.EIGHT.value());
	});

	it("equals SudokuModel.Digit.NINE on constructor 9", function()
	{
		execute(2, SudokuModel.Digit.TWO.value());
	});

	it("throws on constructor 10", function()
	{
		digitConstructor = function(){ return new SudokuModel.Digit(10);};
		expect(digitConstructor).toThrow(new SudokuModel.InvalidParameterException("Digit value needs to be between 1 and 9"));
	});

	it("throws on constructor -1", function()
	{
		digitConstructor = function(){ return new SudokuModel.Digit(-1);};
		expect(digitConstructor).toThrow(new SudokuModel.InvalidParameterException("Digit value needs to be between 1 and 9"));
	});

	it("throws on constructor NaN", function()
	{
		digitConstructor = function(){ return new SudokuModel.Digit(NaN);};
		expect(digitConstructor).toThrow(new SudokuModel.InvalidParameterException("Digit value needs to be between 1 and 9"));
	});

	it("throws on too many constructor parameters", function()
	{
		digitConstructor = function(){ return new SudokuModel.Digit(1,1);};
		expect(digitConstructor).toThrow(new SudokuModel.InvalidParameterException("Too many parameters"));
	});

	it("could be printed as string", function()
	{
		digit = new SudokuModel.Digit(3);
		expect(digit.toString()).toBe("3");
	});
	
	function execute(number, constant)
	{
		digit = new SudokuModel.Digit(number);
		expect(digit.value()).toBe(constant);
	};
});