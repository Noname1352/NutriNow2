<template>
    <div class="auth">
        <h2>Вы авторизованы!</h2>
        <div class="greenbackground">
            <a href="/" class="link">Продолжить</a>
        </div>
    </div>
</template>

<style scoped>
h2 {
    color: white;
}

.link {
    color: white;
    text-decoration: none;
}

.greenbackground {
    cursor: pointer;
    margin: auto;
    background-color: #4CAF50;
    min-width: 100px;
    width: 5%;
    border-radius: 5px;
}
</style>