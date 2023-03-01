<template>
     <!-- stepper header -->
    <div id="steps">
        <ul class="flex flex-center">
            <li v-for="(step, index) in steps" :key="step.title" class="flex">
                <span class="step-count" :style="{'backgroundColor': step.finish ? '#60A917' : '#429EF0'}">
                    <span v-if="!step.finish" class="absolute">{{ index + 1 }}</span>
                    <Check v-else class="absolute" :size="36" />
                </span>
                <span class="step-title absolute">{{ $t(step.title) }}</span>
                <div v-if="(index + 1) !== steps.length" class="line"></div>
            </li>
        </ul>
    </div>

    <!-- stepper content -->
    <main class="flex flex-center">
        <div id="step-content">
            <!-- 
                assign component dynamically.
                pass down title, desc for inner text,
                fields is a data live in the steepr wrapper to maintain the value for current component (if any).
                result if the data return from api.
                backToPrevious will decrease the step count by one,
                toNext will pass the value back to parent component and increase the step count by one.
            -->
            <component
                :is="steps[currentStep - 1].component" 
                :title="steps[currentStep - 1].title"
                :desc="steps[currentStep - 1].desc"
                :finish="steps[currentStep - 1].finish"
                :fields="fields.length? fields[currentStep - 1] : {} "
                :result="result"
                @backToPrevious="currentStep += -1"
                @toNext="proceed"
            ></component>   

        </div>        
    </main>
</template>

<script>
import Check from 'vue-material-design-icons/Check.vue'

export default{
    props:{
        steps: {
            type: Object,
            required: true
        },
        result: Object
    },
    components: {
        Check
    },
    data(){
        return{
            currentStep: 1,
            fields: []
        }
    },
    emits: ['finishStep'],
    methods: {
        proceed(val = {}){
            if(Object.keys(val).length){
                this.fields[this.currentStep - 1] = val
            }
                
            this.$emit('finishStep', this.fields, this.currentStep - 1, true )

            if(this.currentStep !== this.$props.steps.length)
                this.currentStep ++ 
                
        }
    }
}
</script>