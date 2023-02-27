import { config } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'

config.global.mocks = {
    $i18n: createI18n,
    $t: tKey => tKey
}