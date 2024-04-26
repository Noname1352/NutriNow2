<template>
    <div class="login" v-if="!this.islogin">
        <form @submit.prevent="Login">
            <h2>Вход</h2>
            <input type="text" placeholder="Имя" v-model="this.name" required>
            <input type="password" placeholder="Пароль" v-model="this.password" required>
            <input type="submit" value="Войти">
        </form>
    </div>
    <div v-else class="afterlogin">
        <AfterLogin/>
    </div>
</template>

<script>
import axios from 'axios';
import AfterLogin from './AfterLogin.vue'

export default {
    data() {
        return {
            name: '',
            password: '',
            islogin: false,
            users: ''
        }
    },
    components: { AfterLogin },
    mounted() {
        if (localStorage.data) {
            this.islogin = true
        }
        else {
            this.islogin = false
        }
    },
    methods: {
        Login() {
            this.users = localStorage.lastuser
            if (this.users != undefined) {
                alert(this.users)
                this.users = this.users.split(',')
            }
            if (this.name == 'Radik' & this.password == 'qwer') {
                this.islogin = true
                localStorage.data = JSON.stringify({name: 'Radik', gender: 'Man', password: 'qwerasdf'})
            }
            else if(this.users) {
                if (this.name == this.users[0] & this.password == this.users[2]) {
                    this.islogin = true
                    localStorage.data = JSON.stringify({name: localStorage.lastuser[0], gender: localStorage.lastuser[1], password: this.password})
                }
                else alert('Логин или пароль указан неверно')
            }
            else alert('Логин или пароль указан неверно')
        }
    }
}
</script>

<style scoped>
.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 100vw;
    color: white;
}

form {
    background-color: black;
    padding: 20px;
    border-radius: 20px;
}

input {  
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}

input[type="submit"]:hover {
    background-color: #45a049;
}

h2 {
    text-align: center;
    color: white;
}

.link {
    color: white;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: red;
}

.auth {
    text-align: center;
    width: 100%;
}

.afterlogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>