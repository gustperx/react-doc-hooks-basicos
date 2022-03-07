import { shallow } from "enzyme";
import { describe, expect, test } from "vitest";
import { HookApp } from "../HookApp";

describe("Pruebas en HookApp", () => {
  test("debe de hacer match con el snapshot", () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
