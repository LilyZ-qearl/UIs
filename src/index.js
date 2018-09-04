/* Automatically generated by './build/build-entry.js' */
import './css/index.scss';
import './css/reset.css';
import './css/animation.css';

import croup from './directives/croup';
import blur from './directives/blur';

import Aside from '../packages/aside';
import Button from '../packages/button';
import CheckboxGroup from '../packages/checkboxGroup';
import Clock from '../packages/clock';
import ColorOption from '../packages/colorOption';
import ColorSelect from '../packages/colorSelect';
import Container from '../packages/container';
import FlexModal from '../packages/flexModal';
import FloatPanel from '../packages/floatPanel';
import Grid from '../packages/grid';
import Header from '../packages/header';
import HeaderGroup from '../packages/headerGroup';
import HorizontalCheckbox from '../packages/horizontalCheckbox';
import HorizontalRadio from '../packages/horizontalRadio';
import IconBlock from '../packages/iconBlock';
import IconCircle from '../packages/iconCircle';
import IconDefault from '../packages/iconDefault';
import IconGreyBlock from '../packages/iconGreyBlock';
import IconNano from '../packages/iconNano';
import Input from '../packages/input';
import InputNumber from '../packages/inputNumber';
import LineOption from '../packages/lineOption';
import LineSelect from '../packages/lineSelect';
import Main from '../packages/main';
import MenuItem from '../packages/menuItem';
import Message from '../packages/message';
import Nav from '../packages/nav';
import NavItem from '../packages/navItem';
import Option from '../packages/option';
import Pagination from '../packages/pagination';
import Popover from '../packages/popover';
import Preview from '../packages/preview';
import PreviewOperate from '../packages/previewOperate';
import RadioButton from '../packages/radioButton';
import RadioGroup from '../packages/radioGroup';
import Row from '../packages/row';
import ScaleArea from '../packages/scaleArea';
import Select from '../packages/select';
import SidePanel from '../packages/sidePanel';
import Switch from '../packages/switch';
import ToolItem from '../packages/toolItem';
import ToolItemHorizal from '../packages/toolItemHorizal';
import ToolItemHorizalLayout from '../packages/toolItemHorizalLayout';
import ToolItemLayout from '../packages/toolItemLayout';
import Tooltip from '../packages/tooltip';
import VerticalGroup from '../packages/verticalGroup';
import VerticalRadio from '../packages/verticalRadio';

const components = [
    Aside,
    Button,
    CheckboxGroup,
    Clock,
    ColorOption,
    ColorSelect,
    Container,
    FlexModal,
    FloatPanel,
    Grid,
    Header,
    HeaderGroup,
    HorizontalCheckbox,
    HorizontalRadio,
    IconBlock,
    IconCircle,
    IconDefault,
    IconGreyBlock,
    IconNano,
    Input,
    InputNumber,
    LineOption,
    LineSelect,
    Main,
    MenuItem,
    Nav,
    NavItem,
    Option,
    Pagination,
    Popover,
    Preview,
    PreviewOperate,
    RadioButton,
    RadioGroup,
    Row,
    ScaleArea,
    Select,
    SidePanel,
    Switch,
    ToolItem,
    ToolItemHorizal,
    ToolItemHorizalLayout,
    ToolItemLayout,
    Tooltip,
    VerticalGroup,
    VerticalRadio
];

const install = function(Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    });
    Vue.use(Message);
    Vue.directive('croup', croup);
    Vue.directive('blur', blur);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

let calico = {
    version: '0.5.20',
    install,
    Aside,
    Button,
    CheckboxGroup,
    Clock,
    ColorOption,
    ColorSelect,
    Container,
    FlexModal,
    FloatPanel,
    Grid,
    Header,
    HeaderGroup,
    HorizontalCheckbox,
    HorizontalRadio,
    IconBlock,
    IconCircle,
    IconDefault,
    IconGreyBlock,
    IconNano,
    Input,
    InputNumber,
    LineOption,
    LineSelect,
    Main,
    MenuItem,
    Nav,
    NavItem,
    Option,
    Pagination,
    Popover,
    Preview,
    PreviewOperate,
    RadioButton,
    RadioGroup,
    Row,
    ScaleArea,
    Select,
    SidePanel,
    Switch,
    ToolItem,
    ToolItemHorizal,
    ToolItemHorizalLayout,
    ToolItemLayout,
    Tooltip,
    VerticalGroup,
    VerticalRadio
};

export default calico