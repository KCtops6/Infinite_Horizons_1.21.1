/**
 * Items used in the rubber production chain.
 * @file rubber.js
 */
StartupEvents.registry('item', event => {   // Registry for items
    event.create('tree_sap')    // Item ID
        .burnTime(800)  // Burn time in ticks (optional)
        .tooltip('Drop from birch or jungle wood.')  // Tooltip
        .displayName('Tree Sap');   // Display Name
    event.create('rubber')  // Item ID
        .tooltip('Obtained by processing tree sap in a furnace or smoker.') // Tooltip
        .displayName('Raw Rubber'); // Display Name
    event.create('rubber_sheet')    // Item ID
        .tooltip('Obtained by pressing raw rubber.')    // Tooltip
        .displayName('Rubber Sheet');   // Display Name
});