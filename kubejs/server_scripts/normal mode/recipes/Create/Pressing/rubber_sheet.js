ServerEvents.recipes(event => {
    event.custom({
        type: "create:pressing",
        ingredients: [ 
            { 
                item: "kubejs:rubber" 
            } 
        ],
        results: [ 
            { 
                item: "kubejs:rubber_sheet" 
            } 
        ]
    });
});