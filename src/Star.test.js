import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import Star from './Star'

test('renders a star', () => {
	const div = document.createElement('div')
	ReactDOM.render(<Star />, div)
	expect(div.querySelector('svg')).toHaveAttribute('id', 'star')
})

test('renders an h1', () => {
	//We want the component to render, and now we want to test to see if the h1 contains the correct text
	const { getByText } = render(<Star />) // render() returns an object of queries that can be used to check in with values in that component or element
	const h1 = getByText(/Great Star/) // {getByText} is the query, which will find the h1 element via the regular expression that’s passed to it and throw an error if no elements match
	expect(h1).toHaveTextContent('Great Star') // toHaveTextContent() asserts what text the h1 should include
})
