import { ChangeEvent, useEffect, useState } from "react";
import { Button, Input, Space, message } from "antd";
import initLoginBg from "./init.ts";
import styles from "./login.module.scss";
import "./login.less";
import "antd/dist/antd.css";
import { captchAPI, loginApi } from "@/request/api.ts";
import { useNavigate } from "react-router-dom";

const view = () => {
  useEffect(() => {
    initLoginBg();
    window.onresize = function () {
      initLoginBg();
    };
    getCaptchImg();
  }, []);
  const [captchaImg, setCaptchaImg] = useState("");

  const navigteTo = useNavigate();

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
  const gotoLogin = async () => {
    // console.log(
    //   "用户输入的用户名和密码，还有验证码分别为：",
    //   usernameVal,
    //   passwordVal,
    //   captchaVal
    // );
    if (!usernameVal.trim() || !passwordVal.trim() || !captchaVal.trim()) {
      message.warning("请输入完整信息");

      return;
    }

    let loginAPIRes = await loginApi({
      username: usernameVal,
      password: passwordVal,
      code: captchaVal,
      uuid: localStorage.getItem("uuid"),
    });

    console.log(loginAPIRes);

    if (loginAPIRes.code === 200) {
      message.success("登录成功");
      localStorage.setItem("react-management-token", loginAPIRes.token);
      navigteTo("/page1");
    }
  };
  const getCaptchImg = async () => {
    // captchAPI().then((res: CaptchAPIRes) => {
    //   console.log("-------hhhhhhh", res);
    // });
    console.log("333");
    const captchAPIRes: CaptchAPIRes = await captchAPI();
    console.log("123", captchAPIRes.code);

    setCaptchaImg("data:image/gif;base64," + captchAPIRes.img);
    localStorage.setItem("uuid", captchAPIRes.uuid);
  };
  console.log("adasdasdasss", captchaImg);
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
              <div className="captchaImg" onClick={getCaptchImg}>
                <img src={captchaImg} height="38" alt="" />
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
