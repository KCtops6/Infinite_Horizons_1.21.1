ServerEvents.tags('item', event => {
    // merging the 'forge:dusts/endstone' and 'forge:dusts/end_stone' tags into the latter.
    event.removeAll('forge:dusts/endstone');    // Removing the endstone tag.
    event.add('c:dusts/end_stone', [    // to the 'forge:dusts/end_stone' tag we add...
        'gtceu:endstone_dust',  // ...gregtech endstone dust (formerly from 'forge:dusts/endstone')...
        'kubejs:end_stone_dust' // ...and the custom end stone dust.
    ]); 
})