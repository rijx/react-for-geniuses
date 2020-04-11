const { render } = require("react-dom");

const App = require("./App");

const container = document.createElement("div");

document.body.appendChild(container);

render(<App />, container);
