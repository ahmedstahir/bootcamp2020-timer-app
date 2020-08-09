import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders the component', () => {
    const component = shallow(<App />);
    const elem = component.find('div');
    expect(elem).toMatchSnapshot();
});