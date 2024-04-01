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
            islogin: false
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
            if (this.name == 'Radik' & this.password == 'qwerasdf') {
                this.islogin = true
                localStorage.data = {name: 'Radik', gender: 'Man', password: 'qwerasdf'}
            }
            // const request = JSON.stringify({
            //     name: this.name,
            //     password: this.password
            // })

            // axios({
            //     method: 'POST',
            //     url: 'http://localhost:3000/login',
            //     data: request
            // })
            // .then(res => {
            //     if (res.data != 'Логин или пароль указан неверно'){
            //         console.log(res.data)
            //         localStorage.data = JSON.stringify(res.data)
            //         this.islogin = true
            //     }
            //     else {
            //         alert('Логин или пароль указан неверно')
            //     }
            // })
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