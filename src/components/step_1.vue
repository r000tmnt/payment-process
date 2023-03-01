<template>
    <h1 class="text-center">
        {{ $t(title) }}
    </h1>

    <p class="text-center">{{ $t(desc) }}</p>

    <!-- Form starts here -->
    <div class="step-form flex flex-center">
        <div class="step-form-content">
            <label class="step-input-label" for="firstName">
                {{ $t("first-name") }} <span class="require">*</span>
            </label>
            <input class="step-input" type="text" name="firstName" v-model="firstName" required/>
            
            <label class="step-input-label" for="lastName">
                {{ $t("last-name") }} <span class="require">*</span>
            </label>
            <input class="step-input" type="text" name="lastName" v-model="lastName" required/>
            
            <button 
                class="step-form-button flex flex-center text-white"
                :class="firstName.length && lastName.length? 'button-active' : 'button-disable'" 
                type="button" 
                @click="checkInputValue" 
                :disabled="!firstName.length || !lastName.length" 
                style="float: right;">
                <div>{{ $t('continue') }}</div>
                <ChevronRight class="next absolute" fillColor="#ffffff" />
            </button>
        </div>
    </div>

</template>

<script>
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';

export default{
    props: {
        title: String,
        desc: String,
        fields: Object,
        finish: Boolean,
        result: null        
    },
    components: {
        ChevronRight
    },
    emits: ['toNext', 'backToPrevious'],
    data(){
        return{
            firstName: '',
            lastName: '',
        }
    },
    methods: {
        // Check input values
        checkInputValue(){
            // console.log('click')
            if(this.firstName.length && this.lastName.length){
                this.returnToParent()
            }
        },

        // Pass the data to parent component
        returnToParent(){
            this.$emit('toNext', { firstName: this.firstName, lastName: this.lastName })
        }        
    },
    // if property exists, rewrite the data to previous state
    created(){
        if(Object.keys(this.$props.fields).length){
            
            // Dynamic assign fields and value
            for(const [key, val] of Object.entries(this.$props.fields)){
                this[`${key}`] = val
            }

        }
    }
}
</script>