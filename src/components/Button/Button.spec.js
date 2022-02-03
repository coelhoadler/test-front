import Button from './Button'
import React from 'react'
import renderer from 'react-test-renderer'

test('should create a Button component', function () {
  const component = renderer.create(<Button></Button>)

  expect(component).not.toBeNull()
})

test('should create a Button component with text', function () {
  const buttonText = 'o Boticário'
  const component = renderer.create(<Button>{buttonText}</Button>)
  expect(component.toJSON().children).toContain(buttonText)
})
