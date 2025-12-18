<template>
    <div id="sidebar">
        <h3>Menu</h3>
        <div class="defaultMenu topMenu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/board/list">게시판</router-link></li>
            <li><!-- <router-link to="/login">로그인</router-link> -->
            <router-link to="/login" v-if="!this.$store.state.isLogin">로그인</router-link>
            <a v-if="this.$store.state.isLogin" @click="fnLogout">로그아웃</a></li>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        fnLogout() {
            localStorage.removeItem("user_token")
            localStorage.removeItem("user_role")
            location.reload()
        }
    }
}
</script>

<style scoped>
#sidebar {
    height: 100%;
    width: 15%;    
    background-color: white;    
    position: fixed; 
    top: 0; /* Stay at the top */    
    left: 0;    
    overflow-x: hidden; /* Disable horizontal scroll */    
    padding-top: 0;
}

.defaultMenu {
    text-align: left;
    font-size: 2vw;
}

div h3 {
    text-align: center;
    /* color: white; */
}

li {
    text-align: center;
}
</style>