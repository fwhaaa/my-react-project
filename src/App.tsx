import { useRoutes, Link } from "react-router-dom";
import router from "./router";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function App() {
  const outlet = useRoutes(router);
  return <div className="App">{outlet}</div>;
}

export default App;
