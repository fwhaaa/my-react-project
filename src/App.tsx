import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import router from "./router";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { useEffect } from "react";
import { message } from "antd";

// function App() {
//   const outlet = useRoutes(router);
//   return <div className="App">{outlet}</div>;
// }

function ToLogin() {
  const navigateTo = useNavigate();
  useEffect(() => {
    navigateTo("/login");
    message.warning("请登录");
  });
  return <div></div>;
}

function ToPage1() {
  const navigateTo = useNavigate();

  useEffect(() => {
    navigateTo("/page1");
    message.warning("您已经登录过了！");
  }, []);
  return <div></div>;
}

function BeforeRouterEnter() {
  const outlet = useRoutes(router);
  const location = useLocation();
  let token = localStorage.getItem("react-management-token");
  if (location.pathname === "login" && token) {
    return <ToPage1></ToPage1>;
  }
  if (location.pathname !== "/login" && !token) {
    return <ToLogin />;
  }
  return outlet;
}

function App() {
  return (
    <div className="App">
      <BeforeRouterEnter />
    </div>
  );
}
export default App;
