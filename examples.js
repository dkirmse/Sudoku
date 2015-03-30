SudokuModel.addToPublicInterface("Examples", function()
{
	public static Puzzle getEmptyPuzzle() throws Exception
	{
	    return new Puzzle(".................................................................................",
			    		  "Empty Game",
                          "description");
	}
	
    public static Puzzle getEasyPuzzle() throws Exception
	{
        return new Puzzle("425817936716293548983456271147365892352908614698142753571684329839721465264539187",
                		  "Easy Game", 
                		  "There really is no easier one on earth");
	}
	
    public static Puzzle getNakedSinglePuzzle() throws Exception
	{
        return new Puzzle("000000000010203040000456000047000890002070600098000750000684000030701060000000000",
                "Naked Single Example",
                "First naked single should be a 9 in the second box on r2c5.\n" +
                "(Be aware, that there is a hidden single 7 in box r1c6)");
	}
	
    public static Puzzle getHiddenSinglePuzzle() throws Exception
	{
    	return new Puzzle("100200300020010040003005006700600500050080070008004001800700400030060020009002007",
    			"Hidden Single Example",
    			"Contains no naked singles\n" +
    			"First hidden single should be a 2 in the third box on r3c7.");
	}
	
    public static Puzzle getNakedPairPuzzle() throws Exception
	{
        return new Puzzle("820007050050680230060500180000753040340198062090264010034070020000005070070300091",
                "Naked Pair Example (easy)",
                "The candidates 5 and 7 are the only candidates in the pair of cells r5c3 and r6c1 within box 4.\n" +
                "Thus in all other cells in box 4 the candidates 5 and 7 can be removed (remove both in r6c3).");
	}
	
    public static Puzzle getNakedPair2Puzzle() throws Exception
	{
        return new Puzzle("924070583360050401500040062602094058795010234000520609070035026200060005156080347",
                "Naked Pair Example (difficult)",
                "The candidates 1 and 6 are the only candidates in the pair of cells r1c4 and r1c6 within box 2.\n" +
                "Thus in all other cells in box 2 the candidates 1 and 6 can be removed (remove 1 in r3c4, r3c6)." +
                "Needs harder strategies to solve");
	}
	
    public static Puzzle getHiddenPairPuzzle() throws Exception
	{
        return new Puzzle("000000000904607000076804100309701080008000300050308702007502610000403208000000000",
                "Hidden Pair Example",
                "The candidates 6 and 7 are only appearing in the pair of cells r1c8 and r1c9.\n" +
                "Thus all other candidates in these cells could be removed.");
	}
	
    public static Puzzle getNakedTriplePuzzle() throws Exception
	{
        return new Puzzle("070408029002000004854020007008374200020000000003261700000093612200000403103642070",
                "Naked Tripple Example",
                "The candidates 5, 8 and 9 are the only candidates left in the triple of cells r5c4, r5c5 and r5c6.\n" +
                "Thus in all other cells in row 5 the candidates 5, 8 and 9 can be removed.");
	}
	
    public static Puzzle getHiddenTriplePuzzle() throws Exception
	{
        return new Puzzle("000001030231090000065003100678924300103050006000136700009360570006019843300000000",
                "Hidden Tripple Example",
                "The candidates 2, 5 and 6 are only appearing in the triple of cells r1c4, r1c7 and r1c9.\n" +
				"Thus all other candidates in these cells could be removed.");
	}
	
    public static Puzzle getBoxLineReductionPuzzle() throws Exception
	{
        return new Puzzle("016007803090800000870001060048000300650009082039000650060900020080002936924600510",
                "Locked Candidates (Box-Line-Reduction) Example",
                "In row 1 the only left 2s are in r1c4 and r1c5. So the 2 of row 1 will be in one of these cells.\n" +
				"Thus we could remove 2 as candidate from all cells in box 2.");
	}
	
    public static Puzzle getPointingPuzzle() throws Exception
	{
        return new Puzzle("017903600000080000900000507072010430000402070064370250701000065000030000005601720",
                "Locked Candidates (Pointing) Example",
                "The 3s in r2c7 and r2c9 are alone in box 3 and they are aligned on the row.\n" +
				"Thus we could remove 3 as candidate from all cells in row 2.");
	}
	
    public static List<Puzzle> getPuzzles() throws Exception
    {
    	List<Puzzle> retval = new ArrayList<Puzzle>();
        retval.add(getEasyPuzzle());
        retval.add(getNakedSinglePuzzle());
        retval.add(getHiddenSinglePuzzle());
        retval.add(getNakedPairPuzzle());
        retval.add(getNakedPair2Puzzle());
        retval.add(getHiddenPairPuzzle());
        retval.add(getNakedTriplePuzzle());
        retval.add(getHiddenTriplePuzzle());
        retval.add(getBoxLineReductionPuzzle());
        retval.add(getPointingPuzzle());
        return retval;
    }
}
}
