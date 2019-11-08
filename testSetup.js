// ------------------
// Enzyme
// ------------------
const {
  shallow, mount, render, configure,
} = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });
global.shallow = shallow;
global.mount = mount;
global.render = render;
