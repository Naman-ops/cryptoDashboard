<template>
    <div class="pt-5 mt-5 container position-relative">



        <div class="w-100" style="position:absolute;margin-left:380px;z-index:9;  top:5px ">
          <div class="text-white  ">
              <h4 class="ml-5">Buy and sell cryptocurrency</h4>
              <p>Most easy place to trade and manage your cryptocurrency portfolio</p>
              <span class="d-flex ml-5"><input type="text" placeholder="Enter Email" class="form-control w-25">
              <span class="pl-3"><button class="btn btn-success"> Let's Begin</button></span>
              </span>
        </div>
        </div>


        <div class="d-flex justify-content-center">
            <div style="height:180px;width:180px; border-radius:50%; border:15px solid #88CAF5" class=""></div>
        </div>

        <div class="position-absolute" style="    top: 125px;padding-left: 380px;">
          <div class=" d-flex justify-content-center ">
            <div style="height:180px;width:180px; border-radius:50%; border:15px solid #88CAF5" class=""></div>
        </div>
        </div>

        <div class="position-absolute" style="    top: 125px;padding-left: 550px;">
          <div class=" d-flex justify-content-center ">
            <div style="height:180px;width:180px; border-radius:50%; border:15px solid #88CAF5" class=""></div>
        </div>
        </div>








        <!-- cards -->
    <div class="card" style="  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <ul class="list-group list-group-flush">
            <li class=" list-group-item " style="background-color:#cce5ff; ">
                <span class="row   " >
                    <p class="col-md-5 text-primary"><strong>Name</strong></p>
                    <p class="col-md-2 text-primary"><strong>Price</strong></p>
                    <p class="col-md-2 text-primary"><strong>Changes</strong></p>
                    <p class="col-md-2 text-primary"><strong>Market Cap</strong></p>
                    <p class="col-md-1 text-primary"><strong>Trade</strong></p>

                </span>
            </li>

            <li class=" list-group-item " style="" v-for="(data,index) in cardData" :key="index">
                <span class="row   " >
                    <p class="col-md-5 text-secondary"><strong>{{data.name}}</strong> <strong class="ml-5">{{data.fName}}</strong></p>
                    <p class="col-md-2 text-secondary">{{data.price}}</p>
                    <p class="col-md-2 text-danger" v-if="parseInt(data.changes) < 0">{{data.changes}}</p>
                    <p class="col-md-2 text-success" v-else>{{data.changes}}</p>

                    <p class="col-md-2 text-secondary">{{data.marketCap}}</p>
                    
                    <p class="col-md-1 text-success bg-light pl-4" v-if="data.trade == 'Buy'"><strong >{{data.trade}}</strong></p>
                    <p class="col-md-1 text-danger bg-light pl-4" v-else><strong >{{data.trade}}</strong></p>
                
                </span>
            </li>

            




        </ul>
    </div>


    </div>    
</template>

<script>
export default {

    data(){
        return{
cardData:[
        {name:'BTC',fName:'Bitcoin',price:'$131',changes:'-21%',marketCap:'125',trade:'Buy'},
        {name:'Eth',fName:'Ethereum',price:'$331',changes:'-11%',marketCap:'235',trade:'Sale'},
        {name:'EOS',fName:'Bitcoin',price:'$111',changes:'-1%',marketCap:'123',trade:'Buy'},
        {name:'BCH',fName:'BitcoinSv',price:'$31',changes:'1%',marketCap:'135',trade:'Buy'},
        {name:'BCV',fName:'BitcoinCash',price:'$11',changes:'-21%',marketCap:'56',trade:'Buy'},
        {name:'RSR',fName:'cardona',price:'$13',changes:'-211%',marketCap:'67',trade:'Sale'},
        {name:'ADA',fName:'Bitcoin',price:'$1312',changes:'132%',marketCap:'89',trade:'Buy'},
        {name:'TRX',fName:'litecoin',price:'$1312',changes:'-53%',marketCap:'78',trade:'Buy'},
        {name:'LTC',fName:'Bitcoin',price:'$131',changes:'-21%',marketCap:'12',trade:'Buy'},
        ]
}
        }
    }
    
</script>

<style scoped>

</style>