import { ChangeEvent, useEffect, useState } from "react";
import { Button, Input, Space } from "antd";
import initLoginBg from "./init.ts";
import styles from "./login.module.scss";
import "./login.less";
import "antd/dist/antd.css";

const view = () => {
  useEffect(() => {
    initLoginBg();
    window.onresize = function () {
      initLoginBg();
    };
  }, []);

  const [usernameVal, setUsernameVal] = useState("");
  const [passwordVal, setpasswordVal] = useState("");
  const [captchaVal, setCaptchaVal] = useState("");
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsernameVal(e.target.value);
  };
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setpasswordVal(e.target.value);
  };
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptchaVal(e.target.value);
  };
  const gotoLogin = () => {
    console.log(
      "用户输入的用户名和密码，还有验证码分别为：",
      usernameVal,
      passwordVal,
      captchaVal
    );
  };

  return (
    <div className={styles.loginPage}>
      <canvas id="canvas" style={{ display: "block" }}></canvas>
      <div className={styles.loginBox}>
        <div className={styles.title}>
          <h1>fengwenhao&nbsp;·&nbsp;通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        <div className="from">
          <Space direction="vertical" size="large" style={{ display: "flex" }}>
            <Input
              placeholder="用户名"
              className="ipt"
              onChange={usernameChange}
            />
            <Input.Password
              placeholder="密码"
              onChange={passwordChange}
              className="ipt"
            />
            <div className="captchaBox">
              <Input
                placeholder="验证码"
                className="ipt"
                onChange={captchaChange}
              />
              <div className="captchaImg">
                <img src="" height="38" alt="" />
              </div>
            </div>
            <Button
              className="loginBtn"
              type="primary"
              block
              onClick={gotoLogin}
            >
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default view;
