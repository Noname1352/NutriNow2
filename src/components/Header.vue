<template>
    <div class="header">
        <img src="../assets/logo.svg">
            <p>Составь свой рацион питания на день за пару минут!</p>
        <div class="nav">
            <router-link :to="{ name: 'main' }" class="link">Главная страница</router-link>
            <router-link :to="{ name: 'login' }" class="link" v-if="!this.islogin">Вход в аккаунт</router-link>
            <router-link :to="{ name: 'register' }" class="link" v-if="!this.islogin">Регистрация</router-link>
            <a class="link" v-if="this.islogin" @click="Unauth" href="/">Выйти из аккаунта</a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            islogin: false
        }
    },
    methods: {
        Unauth() {
            this.islogin = false
            const l = localStorage.lastuser
            localStorage.clear()
            localStorage.lastuser = l
        }
    },
    mounted() {
        if (localStorage.data) {
            this.islogin = true
        }
    }
}
</script>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    color: white;
}
.nav {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.link {
    text-decoration: none;
    font-weight: 400;
    cursor: pointer;
    color: white;
    border-radius: 3px;
    border: solid 1px;
    padding: 10px;
}
p {
    margin: 2%;
    width: 100%;
}
</style>