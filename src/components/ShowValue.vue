<template>
    <div class="showValue">
        {{ this.value[1] }} г. белка, {{ this.value[2] }} г. жиров, <br> {{ this.value[3] }} г. углеводов, {{ this.value[4] }} Ккал
    </div>
</template>
<script>
export default {
    props: ['value']
}
</script>
<style scoped>
.showValue {
    max-width: 10vw;
    height: 10vh;
}
</style>