import React from "react";
// import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";

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
