<template>
    <div id="steps">
        <ul class="flex flex-center">
            <li v-for="(step, index) in steps" :key="index">
                {{ step }}
                {{ Math.round(steps / 2) }}
            </li>
        </ul>
    </div>

    <main></main>
</template>

<script>
export default{
    data(){
        return{
            steps: 2
        }
    }
}
</script>