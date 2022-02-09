import React from 'react'
import App from './App'
// import components here
import Board from './games/breakout/Board'
import Breakout from './games/breakout/index'
import { shallow, mount } from "enzyme"
import { toJson } from "enzyme-to-json"
import 'jest-styled-components'
import ''

const appWrapper = shallow(<App />)

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    appWrapper
  })
  it("renders Breakout component without crashing", () => {
    shallow(<Breakout />)
  })
  it("renders Board component without crashing", () => {
    shallow(<Board />)
  })
})

describe("Board component", () => {
  let boardWrapper;
  beforeEach(() => {
    boardWrapper = shallow(<Board />);
  })

  it("renders h1 title correctly", () => {
    const title = boardWrapper.find('h1').text()
    expect(title).toEqual("Board")
  })

  it("canvas has right height and width", () => {
    const canvas = boardWrapper.find('#canvas').get(0).props
    expect(canvas).toHaveProperty('height', '500px')
    // expect(canvas).toHaveProperty('width', '800px')

  })
})

// describe("App component testing", () => {
//   it("button label contains correct value", () => {
//     const label = appWrapper.find('button').text()
//     expect(label).toEqual('Dis bonjour aux gens là')
//   })

//   it("message contains empty string before click", () => {
//     const value = appWrapper.find('p').text()
//     expect(value).toEqual('')
//   })

//   it("message contains 'bla' after click", () => {
//     const button = appWrapper.find('button')
//     button.simulate('click', { preventDefault() { } })
//     const value = appWrapper.find('p').text()
//     expect(value).toEqual('bla')
//   })


// })