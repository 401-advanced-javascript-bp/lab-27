import React from 'react';
import Counter from '../../../components/counter/counter';
import renderer from 'react-test-renderer';

describe("<Counter/>", () => {
    test('basis rendering', () => {
        const mountedCounter = shallow(<Counter/>);
        expect(mountedCounter.find('a')).toBeTruthy();
    });
    test('testing state changes', () => {
        const mountedCounter = mount(<Counter/>);
        const link = mountedCounter.find('a').first();
        const secondLink = mountedCounter.find('a').last();

        link.simulate('click');
        expect(mountedCounter.state('count')).toBe(-1);

        secondLink.simulate('click');
        expect(mountedCounter.state('count')).toBe(0);

        expect(mountedCounter.find('a').first().text()).toContain('-');
    });
    test('testing that the state is being transferred to the DOM', () => {
        const mountedCounter = mount(<Counter/>);
        expect(mountedCounter.find('span').text()).toContain('0');
    });
    xtest('rendering follows the snapshot', () => {
        const snapshot = renderer.create(<Counter/>).toJSON();
        expect(snapshot).toMatchSnapshot();
    });
});
