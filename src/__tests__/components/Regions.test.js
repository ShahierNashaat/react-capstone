import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import Regions from '../../components/regions/Regions';

describe('Countries', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Regions /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});