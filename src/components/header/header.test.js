import React from 'react';
import { Link } from "react-router-dom";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './header';

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Header />);
})

describe('<Header />', () => {
    it("should have 8 Link item if not authenticated", () => {
        expect(wrapper.find(Link)).toHaveLength(8);
    })
})

describe('<Header isAuth>', () => {
    it("shoud have 9 Links if authenticated", () => {
        // const wrapper = shallow(<Header isAuth />);
        wrapper.setProps({ isAuth: true })
        expect(wrapper.find(Link)).toHaveLength(9);
    })
})

describe('<Header isAuth>', () => {
    it("shoud have 9 Links if authenticated along with Login Text and url", () => {
        wrapper.setProps({ isAuth: true })
        expect(wrapper.contains(<Link className="py-2 d-none d-md-inline-block" to="/login">Log in</Link>)).toEqual(true);
    })
})