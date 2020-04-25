const { shallow } = require("enzyme");
const expect = require("expect");

const App = require("./App");

describe("<App />", () => {
  it("renders a hello world title", () => {
    const wrapper = shallow(<App />);
    const h1 = wrapper.find("h1");
    expect(h1.length).toBe(1);
    expect(h1.text()).toBe("Hello world!");
  });
});
