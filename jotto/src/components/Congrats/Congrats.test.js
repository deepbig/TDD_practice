import React from 'react';
import { shallow } from 'enzyme'; //enzyme already configured, shallow for Virtual DOM out of them


import { findByTestAttr, checkProps } from '../../../test/testUtils';
import Congrats from './Congrats'; // handing in to shallow


//This should be careful to set defaultProps because the real world might works defferently.
const defaultProps = { success: false };
/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @funciton setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper} 
 */
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }; //write defalt, and overwrite props input.
    return shallow(<Congrats {...setupProps} />) //{...props} == success=true (when the props has success:true object)
};

test('renders without err', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when `success` props is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` props is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});
//checking the prop type.
test('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
});