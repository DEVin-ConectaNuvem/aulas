<template>
    <div class="text-center">
        <img src="../../assets/logo.png" alt="">

        <hr>

        <h1 v-text="title"></h1>
        
        <hr>
    </div>
</template>

<script>    
export default {
    props: ['title']
}
</script>

<style>
    img {
        width: 300px;
    }
</style>