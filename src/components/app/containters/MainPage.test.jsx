/** 
* @jest-environment jsdom
*/
import React from 'react';
import { render, screen } from '@testing-library/react';
import  MainPage  from './MainPage';

describe('Testing MainPage Container', () => { 
  it('should render a list of Hey Arnold characters on screen', async () => { 
    render(<MainPage/>);
    
    const ul = await screen.findByRole('list', { name: 'arnold' });
    expect(ul).toMatchSnapshot();
  });
});