// main.vue 

<script>
export default {  
    methods: {    
        onClickMoveTestPage() {      
            this.$router.push('/test')    
        }  
    }
}
</script> 
<template>  
<div>    
    <h1 class="boxTest">main Page</h1>  
    </div>  
    <button type="button" @click="onClickMoveTestPage">페이지 이동</button>
</template> 

<style>
.boxTest {  
    width: 200px;  
    height: 50px;  
    text-align: center;  
    border: 1px solid #000;
}
</style>
