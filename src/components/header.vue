<template>

  <!-- The header on top right corner -->
  <header class="flex flex-right">

    <div class="button-set">
      <HelpCircleOutline fillColor="#429EF0" :size="36" />
      <button type="button" class="header-button">
        {{ $t("help") }}
      </button>      
    </div>

    <div class="button-set">
      <AccountCircleOutline fillColor="#429EF0" :size="36" />
      <button type="button" class="header-button">
        {{ $t("signin") }}
      </button>           
    </div>

    <!-- A custom select element for localization -->
    <div id="language" class="button-set" ref="selectRef" @click="openLanguageSelect">
      <FlagVariantOutline fillColor="#429EF0" :size="36" />
      <button type="button" class="header-button">
        {{ lang }}
      </button>
      <ChevronDown fillColor="#429EF0" :size="36" />

      <!-- A coustom select options element -->
      <aside v-if="open" class="drop-down absolute " :style="{'width': $refs.selectRef.clientWidth + 'px'}">
        <ul>
          <!-- Perform a loop to generate options -->
          <li v-for="language in languageOptions" @click="changeLanguage(language)" :key="language">
            <span :id="language" style="padding-top: 6px;">{{ language }}</span>
            <ChevronDown v-if="language === lang" fillColor="#429EF0" :size="36" style="margin-left: auto;" />
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
import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue';
import FlagVariantOutline from 'vue-material-design-icons/FlagVariantOutline.vue';


export default {
  props: {
    lang: String
  },
  components: {
    HelpCircleOutline,
    ChevronDown,
    AccountCircleOutline,
    FlagVariantOutline
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
