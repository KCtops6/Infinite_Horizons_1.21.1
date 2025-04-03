// function formatString(str) {
//     return str
//         .replace(/_/g, ' ')
//         .toLowerCase()
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ')
// }
// const meshes = ['iron', 'gold', 'netherite']
// StartupEvents.registry('item', event => {
//     meshes.forEach(m => {
//         let str = `${m}_mesh`
//         event.create(str, 'createsifter:mesh')
//             .displayName(formatString(str))
//             .parentModel("createsifter:block/meshes/mesh")
//             .texture("mesh","kubejs:item/" + str)
//             .texture("frame","kubejs:block/" + str + "_frame")
//     })
// })