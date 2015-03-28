describe("A Puzzle", function() 
{
	it("should instantiate a puzzle", function()
	{
		var puzzle = new SudokuModel.Puzzle();
		expect(puzzle).not.toBe(null);
	});
});
