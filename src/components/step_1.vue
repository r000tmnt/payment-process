<template>
    <h1 class="text-center">
        {{ title }}
    </h1>

    <p class="text-center">{{ desc }}</p>

    <div class="step-form flex flex-center">
        <div class="step-input">
            <label class="step-input-label" for="firstName">
                {{ $t("first-name") }} <span class="require">*</span>
            </label>
            <input type="text" name="firstName" v-model="firstName" required/>
            
            <label class="step-input-label" for="lastName">
                {{ $t("last-name") }} <span class="require">*</span>
            </label>
            <input type="text" name="lastName" v-model="lastName" required/>
            
            <button 
                class="step-form-button flex flex-center text-white" 
                type="button" 
                @click="checkInputValue" 
                :disabled="!firstName.length || !lastName.length" 
                :style="{
                    'backgroundColor': (!firstName.length || !lastName.length)? 'grey' : '#429EF0', 
                    'cursor': (!firstName.length || !lastName.length)? 'unset' : 'pointer'}">
                <div>{{ $t('continue') }}</div>
                <ChevronRight fillColor="#ffffff" />
            </button>
        </div>
    </div>

</template>

<script>
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import axiosClient from '../axios.js'

export default{
    props: {
        title: String,
        desc: String
    },
    components: {
        ChevronRight
    },
    emits: ['customMethod'],
    data(){
        return{
            firstName: '',
            lastName: '',
            error: false
        }
    },
    methods: {
        async checkInputValue(){
            console.log('click')
            if(this.firstName.length && this.lastName.length){
                this.returnToParent()
            }

                // try {
                //     let result = await axiosClient.post('5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f', { firstName: this.firstName, lastName: this.lastName })
                //     console.log('result :>>>', result)

                //     if(result.en){}
                //     //                 
                // } catch (error) {
                //     console.log(error)
                // }
        },

        returnToParent(){
            this.$emit('customMethod', { firstName: this.firstName, lastName: this.lastName })
        }        
    }
}
</script>