<template>
    <div class="marge1">
        <div>
           <div is="sui-header">
                Overview

            </div>
     </div>
     <br>
        <div class="grid-3">
            <div v-for="card in cards " v-bind:key="card.title" >
                <div >
                    <Card :icon="card.icon" :title="card.title" :sub="card.price"/>
                </div>
            </div>
        </div>
        <br>
        <div>
           <div is="sui-header">
                Packs

            </div>
        </div>
        <br>
     <div class="grid-2">
         <div>
             <sui-segment>
                 <div v-for="item in items" v-bind:key="item.header">
                     <div class="space-bt" style="align-items:baseline">
                           <div>
                               <div is="sui-header">
                                    <sui-icon :name="item.icon" />
                                    <sui-header-content style="opacity:0.8">
                                    {{item.header}}
                                    <sui-header-subheader>{{item.sub}}</sui-header-subheader>
                                    </sui-header-content>
                                </div>
                                
                           </div>
                           
                           <div>
                               <span style="margin-right:10px">{{item.price}}</span>
                               <span>
                                    <a  class="ui tiny  button" style="background-color: #0e7490;color:#ffffff">Look</a>
                            </span>
                           </div>
                     </div>
                     <sui-divider section />
                     
                 </div>
                 
             </sui-segment>
         </div>
         <div>
            <sui-segment >
                <div>
                <div is="sui-header">
                    Your invest
                    <sui-header-subheader>
                    Manage your account settings and 
                    </sui-header-subheader>
                </div>
                <br>
                </div>
            <div class="box-center">
                <vue-ellipse-progress
            :angle="-90"
            color="#0e7490"
            :colorFill="colorFillGradient"
            :legend="true"
            :legendValue="180"
            :progress="progress"
            
           
            :loading="true"
            >
            <span slot="legend-value" >/200</span>
            <p slot="legend-caption">GOOD JOB</p>
            </vue-ellipse-progress>
            </div>
                <sui-divider section />
                <div class="text-center">
                    <span>
                        <a class="ui blue empty circular label"></a>
                        Mobile
                    </span>
                    <span style="margin-left:10px">
                        <a class="ui purple empty circular label"></a>
                        Desktop
                    </span>
                    <span style="margin-left:10px">
                        <a class="ui teal empty circular label"></a>
                        Tablet
                    </span>
                </div>
            </sui-segment>
         </div>
     </div>
     <br>

     
        

        <br>
        <div>
           <div is="sui-header">
                Recent Activity

            </div>
     </div>
     <br>
        <div>
            <sui-table unstackable>
      <sui-table-header>
        <sui-table-row>
            <sui-table-header-cell text-align="left"
            >Transaction</sui-table-header-cell
          >
          <sui-table-header-cell>Amount</sui-table-header-cell>
          <sui-table-header-cell>Status</sui-table-header-cell>
          <sui-table-header-cell>Date</sui-table-header-cell>
          
        </sui-table-row>
      </sui-table-header>
      <sui-table-body>
        <sui-table-row>
            <sui-table-cell text-align="left"><sui-icon name="address card outline"/>Payement to molly sanders</sui-table-cell>
          <sui-table-cell>$200,000 USD</sui-table-cell>
          <sui-table-cell><a  class="ui green circular label" style="opacity:0.7">success</a></sui-table-cell>
          <sui-table-cell>July 11 , 2020</sui-table-cell>
        </sui-table-row>
        
      </sui-table-body>
    </sui-table>
    <br>
        </div>

    </div>
</template>

<script>
    import Card from  './Card.vue'
    export default {
        components:{
              Card
          },
      data(){
          
          return {
              cards:[
                  {
                      icon:"balance scale",
                      title:"Account balance",
                      price:"$ 30,659.45"
                  },
                  {
                      icon:"sync alternate",
                      title:"Account balance",
                      price:"$ 30,659.45"
                  },
                  {
                      icon:"check ",
                      title:"Account balance",
                      price:"$ 30,659.45"
                  }
              ],
              items:[
                  {
                      header:"ipsum dolor sit amet, consectetur ",
                      sub:"ipsum dolor sit",
                      price:"$ 6,82500",
                      icon:"spotify green"
                    
                  },
                  {
                      header:"Buy a new bag via paypal ",
                      sub:"simple secure ",
                      price:"-10 %",
                      icon:"paypal pink"
                    
                  },
                  {
                      header:"You can buy articles via amazon",
                      sub:"simple secure ",
                      price:"-15 %",
                      icon:"amazon teal"
                    
                  },
                  
                  {
                      header:"You can buy articles via amazon",
                      sub:"simple secure ",
                      price:"-15 %",
                      icon:"shopping cart blue"
                    
                  }
              ]
              }
          }
      }

</script>
<style>
    .marge1{
        margin-left: 120px;
        margin-top: 20px;
        margin-right:10px;
    }
    .grid-2{
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 20px;
    }
    .grid-3{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap:20px;
    }
    .flex-center{
        display: flex;
        justify-content: space-between;
        text-align: center;
        
    }

    .box-center{
        display: flex;
        justify-content: center;
    }
    .space-bt{
        display: flex;
        justify-content: space-between;
  
    }

    @media screen and (max-width:900px) {
        .grid-2 , .grid-3{
            grid-template-columns: 1fr;
        }
        .grid-2 div, .grid-3 div{
            margin-top:10px;
        }
        .marge1{
        margin-left: 20px;
        margin-top: 20px;
        margin-right:10px;
    }
    }
</style>