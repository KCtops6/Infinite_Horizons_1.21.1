let meshes = [
    { material: 'copper', durability: 128 },
    { material: 'iron', durability: 256 },
    { material: 'gold', durability: 64 },
    { material: 'steel', durability: 1024 },
    { material: 'netherite', durability: 2048 },
]
StartupEvents.registry('item', event => {
    meshes.forEach(mesh => {
        event.create(`${mesh.material}_mesh`, 'createsifter:mesh')
            .displayName(`${mesh.material.charAt(0).toUpperCase() + mesh.material.slice(1)} Mesh`)
            .parentModel("createsifter:block/meshes/mesh")
            .texture("mesh", `kubejs:item/${mesh.material}_mesh`)
            .maxDamage(mesh.durability)
    })
})