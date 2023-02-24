import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import EN from './language/en.json'
import CN from './language/cn.json'
import './assets/global.scss'

const app = createApp(App)

app.use(
    createI18n({
        locale: 'EN',
        fallbackLocale: 'EN',
        messages: {
            "EN": EN,
            "CN": CN
        }
    })
)

app.mount('#app')
