/**
 * Pam's HarvestCraft 2 sapling recipes using Mystical Agriculture essences.
 * Each sapling has a unique recipe with two wood essences and one nature essence.
 * The recipes are designed to be distinct and non-overlapping.
 */
ServerEvents.recipes(event => { // Start of recipe event
    /**
     * List of Pam's HarvestCraft 2 saplings
     * Each sapling will get a unique recipe
     * using 2 wood essences and 1 nature essence.
     */
    const saplings = [  //
        'pamhc2trees:apple_sapling',
        'pamhc2trees:apricot_sapling',
        'pamhc2trees:avocado_sapling',
        'pamhc2trees:banana_sapling',
        'pamhc2trees:cashew_sapling',
        'pamhc2trees:cherry_sapling',
        'pamhc2trees:cinnamon_sapling',
        'pamhc2trees:coconut_sapling',
        'pamhc2trees:date_sapling',
        'pamhc2trees:dragonfruit_sapling',
        'pamhc2trees:durian_sapling',
        'pamhc2trees:fig_sapling',
        'pamhc2trees:gooseberry_sapling',
        'pamhc2trees:grapefruit_sapling',
        'pamhc2trees:lemon_sapling',
        'pamhc2trees:lime_sapling',
        'pamhc2trees:mango_sapling',
        'pamhc2trees:maple_sapling',
        'pamhc2trees:nutmeg_sapling',
        'pamhc2trees:olive_sapling',
        'pamhc2trees:orange_sapling',
        'pamhc2trees:papaya_sapling',
        'pamhc2trees:peach_sapling',
        'pamhc2trees:pear_sapling',
        'pamhc2trees:pecan_sapling',
        'pamhc2trees:peppercorn_sapling',
        'pamhc2trees:persimmon_sapling',
        'pamhc2trees:pistachio_sapling',
        'pamhc2trees:plum_sapling',
        'pamhc2trees:pomegranate_sapling',
        'pamhc2trees:starfruit_sapling',
        'pamhc2trees:vanillabean_sapling',
        'pamhc2trees:walnut_sapling',
        'pamhc2trees:almond_sapling',
        'pamhc2trees:breadfruit_sapling',
        'pamhc2trees:guava_sapling',
        'pamhc2trees:jackfruit_sapling',
        'pamhc2trees:lychee_sapling',
        'pamhc2trees:passionfruit_sapling',
        'pamhc2trees:rambutan_sapling',
        'pamhc2trees:soursop_sapling',
        'pamhc2trees:hazelnut_sapling'
    ];

    /**
     * Define the essence items
     * A = Wood Essence
     * B = Nature Essence
     */
    var A = 'mysticalagriculture:wood_essence'  // Wood essence item
    var B = 'mysticalagriculture:nature_essence'    // Nature essence item

    /**
     * Helper function to create a shaped recipe pattern
     * from a flat array of 9 cells.
     * Each cell can be 'A', 'B', or ' ' (empty).
     * @param {*} cells Array of 9 strings representing the recipe cells
     * @returns Array of 3 strings representing the recipe shape
     */
    function makeShape(cells) {
        return [
            cells.slice(0, 3).join(''), // First row
            cells.slice(3, 6).join(''), // Second row
            cells.slice(6, 9).join('')  // Third row
        ]   // Return the shape as an array of 3 strings
    }

    var patterns = []   // Array to hold all unique patterns

    /**
     * Generate patterns with two A's and one B
     * ensuring that no two patterns overlap in a way
     * that would cause recipe conflicts.
     */
    for (var r = 0; r < 3; r++) {   // Horizontal A’s
        var rowPairs = [[0,1],[1,2],[0,2]]  // Possible pairs of columns for A's
        for (var p = 0; p < rowPairs.length; p++) { // For each pair
            var pair = rowPairs[p]  // Current pair of columns
            for (var b = 0; b < 3; b++) {   // For each column for B
                if (pair.indexOf(b) == -1) {    // Ensure B is not in the same column as A's
                    var cells = [' ',' ',' ',' ',' ',' ',' ',' ',' ']   // Initialize empty cells
                    cells[r*3+pair[0]] = 'A'    // Place A's and B in the cells
                    cells[r*3+pair[1]] = 'A'    // Place A's and B in the cells
                    cells[r*3+b] = 'B'  // Place B in the cells
                    patterns.push(makeShape(cells)) // Add the shape to patterns
                }
            }
        }
    }

    /**
     * Vertical A’s
     * Generate patterns with two A's in a column and one B in a different column
     * ensuring no overlap with horizontal patterns.
     */
    for (var c = 0; c < 3; c++) {   // For each column
        var colPairs = [[0,1],[1,2],[0,2]]  // Possible pairs of rows for A's
        for (var p2 = 0; p2 < colPairs.length; p2++) {  // For each pair
            var pair2 = colPairs[p2]    // Current pair of rows
            for (var b2 = 0; b2 < 3; b2++) {    // For each row for B
                if (pair2.indexOf(b2) == -1) {  // Ensure B is not in the same row as A's
                    var cells2 = [' ',' ',' ',' ',' ',' ',' ',' ',' ']  // Initialize empty cells
                    cells2[pair2[0]*3+c] = 'A'  // Place A's and B in the cells
                    cells2[pair2[1]*3+c] = 'A'  // Place A's and B in the cells
                    cells2[b2*3+c] = 'B'    // Place B in the cells
                    patterns.push(makeShape(cells2))    // Add the shape to patterns
                }
            }
        }
    }

    /**
     * Diagonal A’s
     * Generate patterns with two A's on a diagonal and one B elsewhere
     * ensuring no overlap with horizontal or vertical patterns.
     */
    var diagonals = [[0,4,8],[2,4,6]]   // Possible diagonals for A's
    for (var d = 0; d < diagonals.length; d++) {    // For each diagonal
        var diag = diagonals[d] // Current diagonal
        var combos = [[diag[0],diag[1]],[diag[1],diag[2]],[diag[0],diag[2]]]    // Possible pairs of A's from the diagonal
        for (var c3 = 0; c3 < combos.length; c3++) {    // For each pair
            var combo = combos[c3]  // Current pair of A's
            for (var b3 = 0; b3 < 9; b3++) {    // For each cell for B
                if (combo.indexOf(b3) == -1) {  // Ensure B is not in the same cell as A's
                    var cells3 = [' ',' ',' ',' ',' ',' ',' ',' ',' ']  // Initialize empty cells
                    cells3[combo[0]] = 'A'  // Place A's and B in the cells
                    cells3[combo[1]] = 'A'  // Place A's and B in the cells
                    cells3[b3] = 'B'    // Place B in the cells
                    patterns.push(makeShape(cells3))    // Add the shape to patterns
                }
            }
        }
    }

    /**
     * Filter out duplicate patterns
     * ensuring each pattern is unique
     * to avoid recipe conflicts.
     */
    var seen = {}   // Object to track seen patterns
    var unique = [] // Array to hold unique patterns
    for (var i = 0; i < patterns.length; i++) { // For each pattern
        var key = patterns[i].join('|') // Create a unique key for the pattern
        if (!seen[key]) {   // If the pattern hasn't been seen
            seen[key] = true    // Mark it as seen
            unique.push(patterns[i])    // Add it to unique patterns
        }
    }

    /**
     * Create the shaped recipes
     * for each sapling using the unique patterns.
     */
    for (var s = 0; s < saplings.length; s++) { // For each sapling
        event.shaped(Item.of(saplings[s]), unique[s], { A: A, B: B })   // Create the shaped recipe
    }
})
