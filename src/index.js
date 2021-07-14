import ReactDom from "react-dom"
import App from "./App"
import BodyDiv from "./Main"
import Menus from "./Menu"
ReactDom.render(<App name="mohitji"/>,document.getElementById("root"));
ReactDom.render(<BodyDiv />,document.getElementById("mohit"));
ReactDom.render(<Menus />, document.getElementById('btnmenu'));