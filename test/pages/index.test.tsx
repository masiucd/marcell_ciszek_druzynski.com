import React from 'react'
import { render, screen } from '../testUtils'
import Home from '../../pages/index'

describe('Home page', () => {
  test('has correct DOM Value', () => {
    render(<Home />, {})
    expect(screen.getByTestId('carditem-id-10')).toBeDefined()
  })
})
