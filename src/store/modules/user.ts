// src/store/modules/user.ts
// 用户状态模块
import { defineStore } from 'pinia';

interface UserState {
  name: string;
  token: string;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: 'admin',
    token: 'token',
  }),
  getters: {
    getToken(): string {
      return this.token;
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    }
  }
});



