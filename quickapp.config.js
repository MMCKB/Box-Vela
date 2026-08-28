const path = require('path');

module.exports = {
    // 在toolkit2.0以及更高版本，这实际上是对rspack的配置
    webpack: {
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: [/node_modules/],
                    // 因为这实际上是针对rspack的配置，所以可以使用builtin:swc-loader
                    // 使用该loader可以大幅度提升typescript转换效率
                    loader: 'builtin:swc-loader',
                    options: {
                        jsc: {
                            parser: {
                                syntax: 'typescript',
                            },
                        },
                    },
                    type: 'javascript/auto',
                }
            ]
        },
        resolve: {
            alias: {
                '@src': path.resolve(__dirname, 'src'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@less': path.resolve(__dirname, 'src/less')
            }
        }
    },
    cli: {
        "enable-custom-component": true,
        "enable-jsc": true
    }
};
