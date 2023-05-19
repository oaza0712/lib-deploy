
import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss'
import pkg from './package.json';

export default {
    input: 'src/js/index.js',
    plugins: [
        terser(),
        scss({
            output: 'dist/@oasis07/data.min.css',
            outputStyle: "compressed"
        }),
    ],
    output: [
        {
            name: "@oasis07/data",
            file: pkg.browser,
            format: 'umd',
        },
        { 
            file: pkg.module,
            format: 'es' 
        },         
    ],
};
