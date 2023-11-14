const path = require('path')
// module.exports = function override(config, env) {
//     return {
//         ...config,
//         resolve: {
//             ...config?.resolve,
//             alias: {
//                 ...config?.resolve?.alias,
//                 //通过重写react-app-rewired内置config来取别名（本质就是webpack配置）
//                 '@': path.resolve(__dirname, 'src')
//             }
//         }
//     }
// }

module.exports = function override(config, env) {
    return config
}
