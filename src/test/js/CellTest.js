describe("A Cell", function() 
{
	it("throws on null Coordinate", function()
	{
		var cellConstructor = function(){ new SudokuModel.Cell(null);} 
		expect(cellConstructor).toThrow(new  SudokuModel.InvalidCoordinateException("Coordinate must not be null"));
	});

	it("throws on undefined Coordinate", function()
	{
		var cellConstructor = function(){ new SudokuModel.Cell(undefined);} 
		expect(cellConstructor).toThrow(new  SudokuModel.InvalidCoordinateException("Coordinate must not be undefined"));
	});

	it("throws on missing coordinate", function()
	{
		var cellConstructor = function(){ new SudokuModel.Cell();} 
		expect(cellConstructor).toThrow(new  SudokuModel.InvalidCoordinateException("Coordinate must not be undefined"));
	});

	it("throws on too many parameters", function()
	{
		var cellConstructor = function(){ new SudokuModel.Cell(1,1,2);} 
		expect(cellConstructor).toThrow(new  SudokuModel.InvalidCoordinateException("Too many parameters"));
	});

	it("throws on missing column", function()
	{
		var cellConstructor = function(){ new SudokuModel.Cell(1)}; 
		expect(cellConstructor).toThrow(new  SudokuModel.InvalidCoordinateException("Coordinate expected"));
	});

	it("creates a cell with a given coordinate", function()
	{
		var cellConstructor = function(){ new SudokuModel.Cell(new Coordinate(1,3))}; 
		expect(cellConstructor).not.toBe(undefined);
	});

	it("creates a cell with a given row and column", function()
	{
		var cellConstructor = function(){ new SudokuModel.Cell(1,3)}; 
		expect(cellConstructor).not.toBe(undefined);
	});

	it("reveals its coordinate when created from a coordinate", function()
	{
		var coordinate = new SudokuModel.Coordinate(1,3);
		var cell = new SudokuModel.Cell(coordinate); 
		expect(cell.coordinate()).toEqual(coordinate);
	});

	it("reveals its coordinate when created from a row and column", function()
	{
		var cell = new SudokuModel.Cell(1,3); 
		expect(cell.coordinate().row()).toBe(1);
		expect(cell.coordinate().column()).toBe(3);
	});
	
	it("protects its private parts", function()
	{
		var cell = new SudokuModel.Cell(3,2); 
		expect(cell._coordinate).toBe(undefined);
	});
	
	it("has no digit set upon construction", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		expect(cell.digit()).toBe(SudokuModel.Digit.NONE);
	});
	
	it("returns the digit that has been set", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.placeDigit( SudokuModel.Digit.ONE);
		expect(cell.digit()).toBe( SudokuModel.Digit.ONE);
	});
	
	it("throws upon placeDigit when no Digit", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		var placedDigit = function(){cell.placeDigit(1)};
		expect(placedDigit).toThrow(new  SudokuModel.InvalidParameterException("Digit expected"));
	});
	
	it("tells to be user filled if so", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.placeDigit( SudokuModel.Digit.TWO);
		expect(cell.isUserFilled()).toBe(true);
	});
	
	it("tells not to be user filled if not so", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.setGiven( SudokuModel.Digit.TWO);
		expect(cell.isUserFilled()).toBe(false);
	});
	
	it("has all candidates set upon construction", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		expect(cell.candidates()).toEqual([SudokuModel.Digit.ONE,  SudokuModel.Digit.TWO, SudokuModel.Digit.THREE, 
		                                   SudokuModel.Digit.FOUR, SudokuModel.Digit.FIVE, SudokuModel.Digit.SIX, 
		                                   SudokuModel.Digit.SEVEN, SudokuModel.Digit.EIGHT, SudokuModel.Digit.NINE]);
	});
	
	it("returns the digit that has been set as given", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.setGiven( SudokuModel.Digit.TWO);
		expect(cell.digit()).toBe( SudokuModel.Digit.TWO);
	});
	
	it("tells to be given if so", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.setGiven( SudokuModel.Digit.TWO);
		expect(cell.isGiven()).toBe(true);
	});
	
	it("tells not to be given if not so", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.placeDigit( SudokuModel.Digit.TWO);
		expect(cell.isGiven()).toBe(false);
	});
	
	it("cannot override a given once set by using setGiven", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.setGiven( SudokuModel.Digit.TWO);
		cell.setGiven(SudokuModel.Digit.THREE);
		expect(cell.digit().value()).toBe( SudokuModel.Digit.TWO.value());
	});
	
	it("cannot override a given once set by using placeDigit", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.setGiven( SudokuModel.Digit.TWO);
		cell.placeDigit(SudokuModel.Digit.THREE);
		expect(cell.digit().value()).toBe( SudokuModel.Digit.TWO.value());
	});
	
	it("cannot override a placedDigit with a given by using setGiven", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.placeDigit(SudokuModel.Digit.THREE);
		cell.setGiven( SudokuModel.Digit.TWO);
		expect(cell.digit().value()).toBe(SudokuModel.Digit.THREE.value());
	});
	
	it("tells to be filled if so by setGiven", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.setGiven( SudokuModel.Digit.TWO);
		expect(cell.isFilled()).toBe(true);
	});
	
	it("tells to be filled if so by placeDigit", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.placeDigit( SudokuModel.Digit.TWO);
		expect(cell.isFilled()).toBe(true);
	});
	
	it("tells not to be filled if not so", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		expect(cell.isFilled()).toBe(false);
	});
	
	it("can be unset to SudokuModel.Digit.ONE again", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.placeDigit(SudokuModel.Digit.THREE);
		cell.unset();
		expect(cell.digit().value()).toBe(SudokuModel.Digit.NONE.value());
	});
	
	it("can be unset even if not set", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.unset();
		expect(cell.digit().value()).toBe(SudokuModel.Digit.NONE.value());
	});
	
	it("that has been unset is not filled", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.placeDigit(SudokuModel.Digit.THREE);
		cell.unset();
		expect(cell.isFilled()).toBe(false);
	});
	
	it("that has been unset is not user filled", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.placeDigit(SudokuModel.Digit.THREE);
		cell.unset();
		expect(cell.isUserFilled()).toBe(false);
	});
	
	it("that is given cannot be unset", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.setGiven(SudokuModel.Digit.THREE);
		cell.unset();
		expect(cell.digit().value()).toBe(SudokuModel.Digit.THREE.value());
	});
	
	it("that is filled has no candidates", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.placeDigit(SudokuModel.Digit.NINE);
		expect(cell.candidates()).toEqual([]);
	});
	
	it("has no candidates when setCandidates() is called", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.setCandidates();
		expect(cell.candidates()).toEqual([]);
	});
	
	it("has one candidate when setCandidates( SudokuModel.Digit.ONE) is called", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.setCandidates( SudokuModel.Digit.ONE);
		expect(cell.candidates()).toEqual([ SudokuModel.Digit.ONE]);
	});
	
	it("returns true on hasCandidate(...) if this candidate has been set", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.setCandidates( SudokuModel.Digit.ONE);
		expect(cell.hasCandidate( SudokuModel.Digit.ONE)).toEqual(true);
	});
	
	it("has two candidates when setCandidates( SudokuModel.Digit.ONE,  SudokuModel.Digit.TWO) is called", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.setCandidates( SudokuModel.Digit.ONE,  SudokuModel.Digit.TWO);
		expect(cell.candidates()).toEqual([ SudokuModel.Digit.ONE,  SudokuModel.Digit.TWO]);
	});
	
	it("has one candidate when setCandidates( SudokuModel.Digit.ONE,  SudokuModel.Digit.ONE) is called", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		cell.setCandidates( SudokuModel.Digit.ONE,  SudokuModel.Digit.ONE);
		expect(cell.candidates()).toEqual([ SudokuModel.Digit.ONE]);
	});
	
	it("throws when more than nine candidates shall be set", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		candidateSetter = function(){cell.setCandidates( SudokuModel.Digit.ONE,  SudokuModel.Digit.TWO, SudokuModel.Digit.THREE, SudokuModel.Digit.FOUR, SudokuModel.Digit.FIVE, SudokuModel.Digit.SIX, SudokuModel.Digit.SEVEN, SudokuModel.Digit.EIGHT, SudokuModel.Digit.NINE, SudokuModel.Digit.NINE);};
		expect(candidateSetter).toThrow(new  SudokuModel.InvalidParameterException("Too many arguments"));
	});
	
	it("throws when non-Digit candidates shall be set", function()
	{
		var cell = new SudokuModel.Cell(3,2);
		candidateSetter = function(){cell.setCandidates(1);};
		expect(candidateSetter).toThrow(new  SudokuModel.InvalidParameterException("Candidates have to be a Digit"));
	});

    it("which is not filled can be reset", function()
    {
        var originalCell = new SudokuModel.Cell(3,2);
        var cell = new SudokuModel.Cell(3,2);
        cell.setCandidates(SudokuModel.Digit.ONE);
        cell.reset();
        expect(cell.candidates()).toEqual(originalCell.candidates());
        expect(cell.digit()).toEqual(originalCell.digit());
        expect(cell.isUserFilled()).toEqual(originalCell.isUserFilled());
        expect(cell.isGiven()).toEqual(originalCell.isGiven());
    });

    it("which is user filled can be reset", function()
    {
        var originalCell = new SudokuModel.Cell(3,2);
        var cell = new SudokuModel.Cell(3,2);
        cell.setCandidates(SudokuModel.Digit.ONE);
        cell.placeDigit(SudokuModel.Digit.SEVEN);
        cell.reset();
        expect(cell.candidates()).toEqual(originalCell.candidates());
        expect(cell.digit()).toEqual(originalCell.digit());
        expect(cell.isUserFilled()).toEqual(originalCell.isUserFilled());
        expect(cell.isGiven()).toEqual(originalCell.isGiven());
    });

    it("which is given can be reset", function()
    {
        var originalCell = new SudokuModel.Cell(3,2);
        var cell = new SudokuModel.Cell(3,2);
        cell.setCandidates(SudokuModel.Digit.ONE);
        cell.setGiven(SudokuModel.Digit.SEVEN);
        cell.reset();
        expect(cell.candidates()).toEqual(originalCell.candidates());
        expect(cell.digit()).toEqual(originalCell.digit());
        expect(cell.isUserFilled()).toEqual(originalCell.isUserFilled());
        expect(cell.isGiven()).toEqual(originalCell.isGiven());
    });
});
