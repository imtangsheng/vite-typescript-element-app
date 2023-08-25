/**
 * @file types.ts
 * @author Tang
 * @date 2023-08-15
 * @description API服务types模块
*/

// * 请求响应参数（不包含data）
export interface IResult {
  status: boolean;
  code?: number;
  message?: string;
}

// * 请求响应参数（包含data）
export interface IResultData<T = any> extends IResult {
  data: T;
}

// * 用户本地存储数据
export class UserStore {
  token: string | null = null;
  username: string | null = null;
  constructor() {
      // 初始化时从本地存储加载数据
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
          this.token = savedToken;
          this.username = localStorage.getItem("username");
      }
  }
  // 登录后设置token
  setToken(token: string) {
      this.token = token;
      localStorage.setItem("token", token);
  }
  // 获取token
  getToken() {
      this.token = localStorage.getItem("token");
      return this.token;
  }

}


// * 用户登录参数
export interface ILoginParams {
  username: string;
  password: string;
}
