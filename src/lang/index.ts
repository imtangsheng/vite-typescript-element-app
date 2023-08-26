// src/lang/index.ts
import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs'
import enLocale from './package/en'
import zhCnLocale from './package/zh-cn'


const messages = {
  en: {
    ...enLocale
  },
  'zh-cn': {
    ...zhCnLocale
  }
};

// 创建 VueI18n 实例
const i18n = createI18n({
  locale: 'zh-cn', // 默显示的语言
  messages: messages // 挂载语言包
});


// 导出 i18n 实例
export default i18n;