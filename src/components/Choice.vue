<template>
    <option v-for="el in this.product" v-bind:value="el">
        {{ el[0] }} - {{ el[1] }} г. белка, {{ el[2] }} г. жиров, {{ el[3] }} г. углеводов, {{ el[4] }} Ккал на 100 г продукта
    </option>
</template>
<script>
export default {
    props: [ 'product' ]
}
</script>