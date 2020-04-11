const { render } = require("react-dom");

const App = require("./App");

require("typeface-roboto");
require("./index.scss");

const container = document.createElement("div");

document.body.appendChild(container);

render(<App />, container);
