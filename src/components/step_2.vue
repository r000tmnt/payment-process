<template>
    <h1 class="text-center">
        {{ finish?
            $i18n.locale === 'EN'? 
                result?.title.en : 
                result?.title.cn :
            $t(title) }}
    </h1>

    <div class="text-center">
        <CertificateOutline  v-if="finish" :size="100" />        
    </div>


    <p class="text-center">{{ finish? 
                            $i18n.locale === 'EN'? 
                                result?.desc.en : 
                                result?.desc.cn :    
                            $t(desc) }}</p>

    <div class="flex flex-center">

        <div v-if="!finish" class="step-input flex-column text-center">

            <div class="step-form-note">
                <CreditCardMultiple :size="48" />
                <h2 style="margin-top: 0;">{{ $t("credit-card") }}</h2>

                <span style="margin-bottom: 10px;">
                    {{ $t("payment-note") }}
                </span>
                
                <div class="flex flex-center" style="margin: 13px 0 15px 0;">
                    <img class="step-form-img" src="../assets/mastercard_logo.png" alt="mastercard">
                    <img class="step-form-img" src="../assets/visa_logo.png" alt="visa">
                </div>
            </div>

            <div style="padding-bottom: 50px;">
                <button id="prev"
                    class="step-form-button flex flex-center text-white"
                    :class="!apiFired? 'button-active' : 'button-disable'" 
                    type="button" 
                    @click="$emit('backToPrevious')" 
                    style="float: left;">
                    <ChevronLeft class="prev absolute" fillColor="#ffffff" />
                    <div>{{ $t("back") }}</div>
                </button>    
                
                <button id="next"
                    class="step-form-button flex flex-center text-white"
                    :class="!apiFired? 'button-active' : 'button-disable'"
                    type="button"  
                    @click="complete"
                    style="float: right;">
                    <div>{{ $t('pay') }}</div>
                    <ChevronRight class="next absolute" fillColor="#ffffff" />
                </button>            
            </div>             
        </div>

    </div>
</template>

<script>
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import CreditCardMultiple from 'vue-material-design-icons/CreditCardMultiple.vue';
import CertificateOutline from 'vue-material-design-icons/CertificateOutline.vue';

export default{
    props: {
        title: String,
        desc: String,
        finish: Boolean,
        fields: null,
        result: Object
    },
    components: {
        ChevronRight,
        ChevronLeft,
        CreditCardMultiple,
        CertificateOutline
    },
    emits: ['backToPrevious', 'toNext'],
    data(){
        return{
            apiFired: false
        }
    },
    methods: {
        complete(){
            this.apiFired = true
            this.$emit('toNext')
        }
    }
}
</script>