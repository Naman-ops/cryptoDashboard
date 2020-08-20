<template>
<div>
    <app-body2></app-body2>
    
    <app-body3></app-body3>

    <app-body4></app-body4>
    <app-begin></app-begin>
    <app-referral></app-referral>

</div>
</template>

<script>
import body2 from './components/body2'
import body3 from './components/body3'
import body4 from './components/body4'
import begin from './components/HowToBegin.vue'
import referral from './components/referral.vue'




export default {
    components:{
        'app-body2':body2,
        'app-body3':body3,
        'app-body4':body4,
        'app-begin':begin,
        'app-referral':referral
    }   
}
</script>

<style lang="stylus" scoped>

</style>