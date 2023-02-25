<template>
    <div id="steps">
        <ul class="flex flex-center">
            <li v-for="(step, index) in steps" :key="step.title" class="flex">
                <span class="step-count" :style="{'backgroundColor': step.finish ? '#60A917' : '#429EF0'}">
                    <span v-if="!step.finish" class="absolute">{{ index + 1 }}</span>
                    <Check v-else class="absolute" />
                </span>
                <span class="step-title absolute">{{ step.title }}</span>
                <div v-if="(index + 1) !== steps.length" class="line"></div>
            </li>
        </ul>
    </div>

    <main class="flex flex-center">
        <div id="step-content">
            <component  
                :is="steps[currentStep - 1].component" 
                :title="steps[currentStep - 1].title"
                :desc="steps[currentStep - 1].desc"
                @customMethod="customEvent"
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
        }
    },
    components: {
        Check
    },
    data(){
        return{
            currentStep: 1,
        }
    },
    emits: ['finishStep'],
    methods: {
        customEvent(val){
            if(val)
                this.$emit('finishStep', { index: this.currentStep - 1, finish: true })
                this.currentStep ++ 
        }
    }
}
</script>