<template>
  <div>
    <pixel-bar :value="1900" :play="play"></pixel-bar>
    <button @click="play=true">play</button>
  </div>
</template>

<script>
import PixelBar from "./PixelBar"
export default {
    components:{
        PixelBar
    },
    data(){
        return {
            play:false
        }
    }
};
</script>

<style>
</style>