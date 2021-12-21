import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import Countries from '../../components/countries/Countries';

describe('Countries', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Countries /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});