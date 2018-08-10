const fs = require('fs');
const path = require('path');
const util = require('./util');

const version = require('../package.json').version;

let componentList = fs.readdirSync(path.join(__dirname, '../packages'));

function buildEntry(componentList) {
    const components = componentList.map(component =>
        util.upperCaseFirst(component)
    );
    return `/* Automatically generated by './build/build-entry.js' */
import './css/index.scss';
import './css/reset.css';
import croup from './directives/croup';

${componentList
        .map(component => {
            return (
                'import ' +
                util.upperCaseFirst(component) +
                " from '../packages/" +
                component +
                "';"
            );
        })
        .join('\n')}

const components = [
    ${components.join(',\n    ')}
];

const install = function(Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    });

    Vue.directive('croup', croup);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

let calico = {
    version: '${version}',
    install,
    ${components.join(',\n    ')}
};

export default calico`;
}

fs.writeFileSync(
    path.join(__dirname, '../src/index.js'),
    buildEntry(componentList)
);
