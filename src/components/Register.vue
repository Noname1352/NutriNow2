<template>
    <div class="register" v-if="!this.islogin">
        <form @submit.prevent="Register">
            <h2>Регистрация</h2>
            <input type="text" placeholder="Имя" v-model="this.name" required>
            <input type="password" placeholder="Пароль" v-model="this.password" required>
            <div class="radiobuttons">
                <label>
                    <input type="radio" name="gender" class="radiobutton" value="Man" v-model="this.gender">
                    <div class="g">Мужчина</div>
                </label>
                <label>
                    <input type="radio" name="gender" class="radiobutton" value="Woman" v-model="this.gender">
                    <div class="g">Женщина</div>
                </label>
            </div>
            <input type="submit" value="Зарегистрироваться">
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
            gender: 'Man',
            password: '',
            islogin: false,
            users: []
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
        Register() {
            this.users = localStorage.lastuser
            if (this.users != undefined) {
                alert(this.users)
                this.users = this.users.split(',')
            }
            if (this.name == 'Radik' | this.name == this.users ) {
                alert('Аккаунт с текущим именем уже существует')
            }
            else if (this.users) {
                if (this.name == this.users[0] & this.password == this.users[2]) {
                    alert('Аккаунт с текущим именем уже существует')
                }
                else {
                    this.islogin = true
                    localStorage.data = JSON.stringify({name: this.name, gender: this.gender, password: this.password})
                    localStorage.lastuser = [this.name, this.gender, this.password]
                }
            }
            else {
                this.islogin = true
                localStorage.data = JSON.stringify({name: this.name, gender: this.gender, password: this.password})
                localStorage.lastuser = [this.name, this.gender, this.password]
            }
        }
    }
}
</script>

<style scoped>
.register {
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
    height: 90%;
}

label {
    display: flex;
    justify-content: space-between;
}

.radiobutton {
    width: 100%;
}

.radiobuttons {
    display: flex;
    justify-content: space-around;
}

.g {
    padding: 10px;
}
</style>