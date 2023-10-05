interface CaptchAPIRes {
  msg: string;
  img: string;
  code: number;
  captchEnabled: boolean;
  uuid: string;
}
// 登录请求类型
interface LoginAPIReq {
  username: string;
  password: string;
  code: string;
  uuid: string;
}
// 登录响应类型
interface LoginAPIRes {
  msg: string;
  code: number;
  token: string;
}
