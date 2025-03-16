ServerEvents.tags('item', event => {
    const tiers = ['copper', 'iron', 'gold', 'diamond', 'netherite']
    const iron_upgrades = ['basic', 'copper']
    const gold_upgrades = ['basic', 'copper', 'iron']
    const diamond_upgrades = ['basic', 'copper', 'iron', 'gold']
    const netherite_upgrades = ['basic', 'copper', 'iron', 'gold', 'diamond']

    tiers.forEach(t => {
        event.add(`sophisticatedstorage:${t}_storages`, `sophisticatedstorage:${t}_barrel`)
        event.add(`sophisticatedstorage:${t}_storages`, `sophisticatedstorage:${t}_chest`)
    })

    iron_upgrades.forEach(u => {
        event.add(`sophisticatedstorage:iron_upgrades`, `sophisticatedstorage:${u}_to_iron_tier_upgrade`)
    })

    gold_upgrades.forEach(u => {
        event.add(`sophisticatedstorage:gold_upgrades`, `sophisticatedstorage:${u}_to_gold_tier_upgrade`)
    })

    diamond_upgrades.forEach(u => {
        event.add(`sophisticatedstorage:diamond_upgrades`, `sophisticatedstorage:${u}_to_diamond_tier_upgrade`)
    })

    netherite_upgrades.forEach(u => {
        event.add(`sophisticatedstorage:netherite_upgrades`, `sophisticatedstorage:${u}_to_netherite_tier_upgrade`)
    })
})