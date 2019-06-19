import React from 'react';
import Counter from '../../../components/counter/counter';

describe("<Counter/>", () => {
    test('basis rendering', () => {
        const mountedCounter = shallow(<Counter/>);
        expect(mountedCounter.find('a')).toBeTruthy();
    });
});
