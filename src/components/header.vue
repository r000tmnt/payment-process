<template>
  <header class="flex flex-right">

    <div class="button-set">
      <HelpCircleOutline fillColor="#429EF0" :size="36" />
      <button type="button" class="header-button">
        {{ $t("help") }}
      </button>      
    </div>

    <div class="button-set">
      <accountCircleOutline fillColor="#429EF0" :size="36" />
      <button type="button" class="header-button">
        {{ $t("signin") }}
      </button>           
    </div>

    <div class="button-set" ref="selectRef" @click="openLanguageSelect">
      <flagVariantOutline fillColor="#429EF0" :size="36" />
      <button type="button" class="header-button">
        {{ lang }}
      </button>
      <ChevronDown fillColor="#429EF0" :size="36" />

      <aside v-if="open" class="drop-down absolute " :style="{'width': $refs.selectRef.clientWidth + 'px'}">
        <ul>
          <li v-for="language in languageOptions" @click="changeLanguage(language)">
            <span style="padding-top: 6px;">{{ language }}</span>
            <ChevronDown v-if="language === lang" fillColor="#429EF0" size="36" style="margin-left: auto;" />
          </li>
        </ul>
      </aside>      
    </div>
    
  </header>
</template>

<script>
// icons
import HelpCircleOutline from 'vue-material-design-icons/HelpCircleOutline.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import accountCircleOutline from 'vue-material-design-icons/accountCircleOutline.vue';
import flagVariantOutline from 'vue-material-design-icons/flagVariantOutline.vue';


export default {
  props: {
    lang: String
  },
  components: {
    HelpCircleOutline,
    ChevronDown,
    accountCircleOutline,
    flagVariantOutline
  },
  data(){
    return {
      languageOptions: ['EN', 'CN'],
      open: false,
      selectWidth: 0
    }
  },
  methods: {
    openLanguageSelect(){
      this.open = !this.open
    },

    changeLanguage(language){
      this.$i18n.locale = language
    }
  }
}
</script>
