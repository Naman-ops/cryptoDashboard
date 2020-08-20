<template>
<div class="top">
    <div class="top1 bg-primary  ">
        <app-Header></app-Header>
        <app-body1></app-body1>
    </div>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Body1 from './components/body1.vue'
export default {
    components:{
        'app-Header':Header,
        'app-body1':Body1
    }
}
</script>

<style scoped>
.top1{
    height:400px;
    
}

.top{
    height:1000px
}
</style>