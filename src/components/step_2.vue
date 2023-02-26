<template>
    <h1 class="text-center">
        {{ $t(title) }}
    </h1>

    <p class="text-center">{{ $t(desc) }}</p>

    <div class="step-form flex flex-center">

        <div v-if="!finish" class="step-input flex-column text-center">

            <div class="step-form-content">
                <CreditCardMultiple :size="48" />
                <h2>{{ $t("credit-card") }}</h2>

                <span style="margin-bottom: 10px;">
                    {{ $t("payment-note") }}
                </span>
                
                <div class="flex flex-around" style="margin: 13px 0 15px 0;">
                    <img class="step-form-img" src="../assets/mastercard_logo.png" alt="mastercard">
                    <img class="step-form-img" src="../assets/visa_logo.png" alt="visa">
                </div>
            </div>

            <div>
                <button 
                    class="step-form-button flex flex-center text-white" 
                    type="button" 
                    @click="$emit('backToPrevious')" 
                    style="background-color: #429EF0; float: left">
                    <ChevronLeft class="prev absolute" fillColor="#ffffff" />
                    <div>{{ $t("back") }}</div>
                </button>    
                
                <button 
                    class="step-form-button flex flex-center text-white" 
                    type="button"  
                    @click="$emit('toNext')"
                    style="background-color: #429EF0; float: right">
                    <div>{{ $t('pay') }}</div>
                    <ChevronRight class="next absolute" fillColor="#ffffff" />
                </button>            
            </div>             
        </div>
        
        <div v-else>
            <div class="step-form-content">
                Congratulations, your payment was successful. 
                Shortly a confirmation email will arrive to your inbox
            </div>            
        </div>
    </div>
</template>

<script>
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import CreditCardMultiple from 'vue-material-design-icons/CreditCardMultiple.vue';

export default{
    props: {
        title: String,
        desc: String,
        finish: Boolean
    },
    components: {
        ChevronRight,
        ChevronLeft,
        CreditCardMultiple
    },
    emits: ['backToPrevious', 'toNext'],
    data(){
        return{

        }
    }
}
</script>