import React from "react";
// import { render } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Foo from './Foo';

describe("test ui", () => {
  // test.skip("renders learn react link", () => {
  //   const { getByText } = render(<App />);
  //   const linkElement = getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  test("renders App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper);
  });

});

describe('test mount', () => {
  test("a tag has class", () => {
    const wrapper = mount(<App />);
    // expect(wrapper.find("a").hasClass("App-link")).toBe(true);
    expect(wrapper.find("[data-testid='href']").hasClass("App-link")).toBe(true);
    wrapper.unmount();
  });
})

describe('simulate click', () => {
  test('click button', () => {
    const wrapper = mount(<Foo />);
    expect(wrapper.find("[data-testid='test-clicks']").length).toEqual(1);
    wrapper.find('button').simulate('click');
    expect(wrapper.find("[data-testid='test-clicks']").length).toEqual(1);
  })
})
