import request from "./index";
export const captchAPI = (): Promise<CaptchAPIRes> =>
  request.get("/prod-api/captchaImage");
export const loginApi = (params: LoginAPIReq) =>
  request.post("/prod-api/login", params);
