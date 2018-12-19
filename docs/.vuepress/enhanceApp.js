import calico from '../../lib/calico.common.js';

function addStylesheet(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.body.appendChild(link);
}

addStylesheet('//at.alicdn.com/t/font_938680_ngoiffdfjfg.css');

export default ({ Vue }) => {
    Vue.use(calico);
};
