import React from 'react';
// import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme'; // test DOM

// just letting enzyme know we are using react 16.
import EnzymeAdapter from 'enzyme-adapter-react-16'; 
import App from './App';
import { wrap } from 'module';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
* set up is a factory function to create a ShallowWrapper for the App component "shallow(<App />)"
* @function setup
* @param {object} props - Component props specific to this setup.
* @param {object} state - Initial state for setup.
* @returns {ShallowWrapper} - an enzyme class
*/

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
}

/**
* Return ShallowWrapper containing node(s) with the given data-test value.
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
* @param {string} val - Value of data-test attrivute for search.
* @returns {ShallowWrapper} - an enzyme class
*/

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

/**
 * it == test
 * test('renders without crashing', () => {
 * //shallow run the app and check wether the app runs without crashing.
 * const wrapper = setup();
 * console.log(wrapper.debug());
 * expect(wrapper).toBeTruthy(); //it will not be null or empty string.
 * // expect(wrapper).toBeFalsy();
 * });
 */

//Test starting from here.
test('renders without err', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1); //we are expecting to have one elements.
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1); //we are expecting to have one elements.
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});



describe('Increment', () => {
  //now we have enough tests to organize by function
  test('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
  });

  //to avoid test implementation, only check its display, not a state. 
  test('clicking button increments counter display', () => {
    const counter = 7;
    const wrapper = setup(null, { counter }); //counter as the key and value of the counter is the value (counter: counter);
    
    // find button and click
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');
  
    // find display and test value
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter + 1); //In this way, even if the words changes, it will not fail the test. 
  });

  test('clicking button increments from zero after error happened', () => {
  
  });
})

describe('Decrement', () => {
  test('renders decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button');
    expect(button.length).toBe(1);
  });

  test('clicking button decrements counter display', () => {
    const counter = 7;
    const wrapper = setup(null, { counter });
    
    // find button and click
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');
    
    //find display and test value
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter - 1);
  });

  test('error does not shows when not needed', () => {
    const wrapper = setup();
    const errorDisplay = findByTestAttr(wrapper, 'error-message');

    // using enzyme's ".hasClass()" method
    const errorHasHiddenClass = errorDisplay.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(true);
  });

  describe('counter is 0 and decrement is clicked', () => {
    //using a describe here so I can use a "beforeEach" for sahred setup

    //scoping wrapper to the describe, so it can be used in beforeEAch and the tests
    let wrapper
    beforeEach(() => {
      //no need to set counter value here; default value of 0 is good.
      wrapper = setup();
      const button = findByTestAttr(wrapper, 'decrement-button');
      button.simulate('click');
      wrapper.update();
    });
    test('error shows', () => {
      const errorDisplay = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorDisplay.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(false);
    });
    test('counter still display 0', () => {
      //check the class of the error message
      const counterDisplay = findByTestAttr(wrapper, 'counter-display');
      expect(counterDisplay.text()).toContain(0);
    });
    test('clicking increment clears the error', () => {
      const button = findByTestAttr(wrapper, 'increment-button');
      button.simulate('click');

      const errorDisplay = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorDisplay.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(true);
    });

  });

})