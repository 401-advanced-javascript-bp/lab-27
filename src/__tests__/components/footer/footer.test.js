import React from 'react';
import Footer from '../../../components/footer/footer';

describe("<Footer/>", () => {
    test('basis rendering', () => {
        const mountedFooter = shallow(<Footer/>);
        expect(mountedFooter.find('footer')).toBeTruthy();
    });
});