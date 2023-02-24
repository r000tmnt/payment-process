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

      <select v-if="open" class="drop-down absolute" v-model="$i18n.locale" :style="{'width': selectWidth + 'px'}">
        <option v-for="language in languageOptions" :value="language">
          {{ language }}
          <ChevronDown v-if="language === lang" fillColor="#429EF0" size="36" />
        </option>
      </select>      
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
      console.log(this.$refs.selectRef.clientWidth)
      this.open = true
      this.selectWidth = this.$refs.selectRef.clientWidth
    }
  }
}
</script>
