<template>
 <div>
 <Ilan v-for="ilan in items" :key="ilan.id" :ilan="ilan"/>
 </div>
</template>

<script>
import Ilan from "../components/Ilan.vue";
import items from "../components/data/items"
export default {
    
    components:{
       Ilan,
    },
    data(){
        return{
            items:items
        }
    }
}
</script>

<style>

</style>