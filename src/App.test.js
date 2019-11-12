import React from 'react';
import {shallow} from 'enzyme'

import App from './App'

describe('App', () => {
  it('renders an h3 with the correct text', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('h3#no-todos').text()).toEqual('Congrats! You have nothing to do!')
  })
})
