const path = require('path');
const glob = require('glob');
const alias = require('rollup-plugin-alias');

const inputs = glob.sync(path.join(__dirname, '..', 'src', '**', '*.js'));
const localExternals = inputs.map(input => `core/${input.replace(/^.*?src\//, '').replace(/\.js/, '')}`);


module.exports = inputs.map(input => {
    const name = path.parse(input).name.replace(/\.js/, '');
    const dir = path.parse(input).dir.replace(/^.*?src/, '');
    
    return {
        input,
        output: {
            dir: path.join(__dirname, '..', 'dist', 'js', dir),
            format: 'umd',
            name
        },
        external: [
        ].concat(localExternals),
        plugins: [
            alias({
                resolve: ['.js', '.css', '.tpl'],
                core: path.join(__dirname, '..', 'src')
              }),
            //   uglify()
        ]
    };
});