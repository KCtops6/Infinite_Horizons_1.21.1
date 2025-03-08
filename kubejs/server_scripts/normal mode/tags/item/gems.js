ServerEvents.tags('item', event => {
    const gems = [  // materials that have gems.
        'apatite', 'certus_quartz', 'cinnabar', 'niter', 'ruby', 'sapphire', 'sulfur'
    ];

    gems.forEach(gem => {   // for each material...
        event.add(`c:gems/${gem}`, `kubejs:${gem}_gem`);    // ...we add the custom ingot for that material into that 'forge:gems/' tag.
    });
})