import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Example from '../src/example';
import expect from 'expect.js';

const {shallow}=Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('Enzyme的浅渲染测试套件', function () {
    it('Example组件中按钮的名字为text的值', function () {
        const name = '按钮名';
        let app = shallow(<Example text={name} />);
        expect(app.find('button').text()).to.equal(name);
    })
});