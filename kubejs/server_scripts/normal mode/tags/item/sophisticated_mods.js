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

    const upgrades = [
        'pickup', 'advanced_pickup', 'filter', 'advanced_filter', 'magnet', 'advanced_magnet', 'feeding', 'advanced_feeding',
        'compacting', 'advanced_compacting', 'void', 'advanced_void', 'restock', 'advanced_restock', 'deposit', 'advanced_deposit',
        'refill', 'advanced_refill', 'smelting', 'auto_smelting', 'blasting', 'auto_blasting', 'smoking', 'auto_smoking',
        'crafting', 'stonecutter', 'stack_downgrade_tier_1', 'stack_downgrade_tier_2', 'stack_downgrade_tier_3',
        'jukebox', 'advanced_jukebox', 'pump', 'advanced_pump', 'xp_pump'
    ]

    upgrades.forEach(u => {
        event.add(`sophisticated:${u}_upgrades`, [`sophisticatedbackpacks:${u}_upgrade`, `sophisticatedstorage:${u}_upgrade`])
    })
})