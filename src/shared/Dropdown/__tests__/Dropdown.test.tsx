import Enzyme, {shallow} from "enzyme";
import React from "react"
import {Dropdown} from ".."
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new Adapter()})

describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(<Dropdown children={<div></div>} button={<button>123</button>}/>)

    expect(wrapper).toBeDefined();
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  });

  test('should render (snapshot)', () => {
    const wrapper = shallow(<Dropdown children={<div></div>} button={<button>123</button>}/>)

    expect(wrapper).toMatchSnapshot()
  })
})