<template>
    <div class="all">
        <div class="header">
            <Header/>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    components: {
        Header
    },
}
</script>

<style scoped>
.all {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: #C5E17A;
    background: rgb(9,255,0);
    background: linear-gradient(90deg, #C5E17A 0%, #43b3ae 100%);
}

.header {
    position: fixed;
    top: 0;
    height: 10vh;
    width: 100%;
    background-color: #F2003C;
    background: rgb(255,63,63);
    background: linear-gradient(45deg, rgba(255, 167, 116, 0.746) 0%, rgb(187, 5, 5) 100%);
    z-index: 1;
}

.main {
    margin-top: 10vh;
    /* position: relative; */
    /* top: 10vh;
    height: 90vh;
    min-height: 90vh;
    width: 100%; */
}
</style>
