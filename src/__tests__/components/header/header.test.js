import React from 'react';
import Header from '../../../components/header/header';

describe("<Header/>", () => {
    test('basis rendering', () => {
        const mountedHeader = shallow(<Header/>);
        expect(mountedHeader.find('h1')).toBeTruthy();
    });
});