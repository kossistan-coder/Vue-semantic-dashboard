<template>
    <div class="marge1">
        <div class="flex-2">
            <div>
                <sui-breadcrumb size="big">
                <sui-breadcrumb-section link>Account</sui-breadcrumb-section>
                <sui-breadcrumb-divider>/</sui-breadcrumb-divider>
                <sui-breadcrumb-section active>Overview</sui-breadcrumb-section>
                </sui-breadcrumb>
            </div>
            <div class="inline">
                <div class="ui  button" style="background-color:white;">
                    Statictiques                                    
                </div>
                <div class="ui button col-base">
                    Admins
                </div>
            
            </div>
     </div>
     <br>

        <CardShimmerVue></CardShimmerVue>
        <div class="grid-4">
            <div v-for="card in cards " v-bind:key="card.title" >
                <div >
                    <Card :icon="card.icon" :title="card.title" :sub="card.price" :color="card.color" :angle="card.angle" />
                </div>
            </div>
        </div>
        <br>
    
     <div class="grid-2">
         <div>
             <sui-segment>
                <PacksShimmer></PacksShimmer>
  
                 <!-- <div v-for="item in items" v-bind:key="item.header">
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
                                    <a  class="ui tiny  button" style="background-color: #2d3647;color:#ffffff">Look</a>
                            </span>
                           </div>
                     </div>
                     <sui-divider section />
                     
                 </div> -->
                 
             </sui-segment>
         </div>
         <div>
           <sui-segment>
            <div>
                            <div class="flex-2">
                            <div>
                                <h2 class="ui small header">
                                <img src="../../../../../src/assets/images/go.png" class="ui circular image">
                                <div class="content">
                                    Kamara laye
                                    <div class="sub header">kamara@gmail.com</div>
                                </div>
                            </h2>
                            </div>
                            <div>
                                <div class="ui circular basic label">
                                    
                                    Details
                                </div>
                            </div>
                        </div>
                        <div class="ui divider"></div>
                    </div>
                    <div>
                            <div class="flex-2">
                            <div>
                                <h2 class="ui small header">
                                <img src="../../../../../src/assets/images/go.png" class="ui circular image">
                                <div class="content">
                                    Kamara laye
                                    <div class="sub header">kamara@gmail.com</div>
                                </div>
                            </h2>
                            </div>
                            <div>
                                <div class="ui circular basic label">
                                    
                                    Details
                                </div>
                            </div>
                        </div>
                        <div class="ui divider"></div>
                    </div>                  
                    <div>
                            <div class="flex-2">
                            <div>
                                <h2 class="ui small header">
                                <img src="../../../../../src/assets/images/go.png" class="ui circular image">
                                <div class="content">
                                    Kamara laye
                                    <div class="sub header">kamara@gmail.com</div>
                                </div>
                            </h2>
                            </div>
                            <div>
                                <div class="ui circular basic label">
                                    
                                    Details
                                </div>
                            </div>
                        </div>
                        <div class="ui divider"></div>
                    </div>
                    <div>
                            <div class="flex-2">
                            <div>
                                <h2 class="ui small header">
                                <img src="../../../../../src/assets/images/go.png" class="ui circular image">
                                <div class="content">
                                    Kamara laye
                                    <div class="sub header">kamara@gmail.com</div>
                                </div>
                            </h2>
                            </div>
                            <div>
                                <div class="ui circular basic label">
                                    
                                    Details
                                </div>
                            </div>
                        </div>
                        <div class="ui divider"></div>
                    </div>
                    <div>
                            <div class="flex-2">
                            <div>
                                <h2 class="ui small header">
                                <img src="../../../../../src/assets/images/go.png" class="ui circular image">
                                <div class="content">
                                    Kamara laye
                                    <div class="sub header">kamara@gmail.com</div>
                                </div>
                            </h2>
                            </div>
                            <div>
                                <div class="ui circular basic label">
                                    
                                    Details
                                </div>
                            </div>
                        </div>
                        <div class="ui divider"></div>
                    </div>
           </sui-segment>
         </div>
     </div>
     <br>

     
        

        <br>
        <div class="flex-between">
           <div is="sui-header">
                Recent Box

            </div>
            <div>
                View all
            </div>
        </div>
     <br>
     <ImageCardShimmer></ImageCardShimmer>
       <!-- <sui-card-group :items-per-row="3 ">
        <sui-card>
            <img src="../../../../../src/assets/images/maquette.webp" />
            <sui-card-content>
            <sui-card-header>Matt Giampietro</sui-card-header>
            <sui-card-meta>Friends</sui-card-meta>
            <sui-card-description>
                Matthew is an interior designer living in New York.
            </sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
            <sui-icon name="user" /> 75 Friends
            <span slot="right">Joined in 2013</span>
            </sui-card-content>
      </sui-card>
      <sui-card>
            <img src="../../../../../src/assets/images/maquette2.webp" />
            <sui-card-content>
            <sui-card-header>Matt Giampietro</sui-card-header>
            <sui-card-meta>Friends</sui-card-meta>
            <sui-card-description>
                Matthew is an interior designer living in New York.
            </sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
            <sui-icon name="user" /> 75 Friends
            <span slot="right">Joined in 2013</span>
            </sui-card-content>
      </sui-card>
      <sui-card>
            <img src="../../../../../src/assets/images/maquette1.webp" />
            <sui-card-content>
            <sui-card-header>Matt Giampietro</sui-card-header>
            <sui-card-meta>Friends</sui-card-meta>
            <sui-card-description>
                Matthew is an interior designer living in New York.
            </sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
            <sui-icon name="user" /> 75 Friends
            <span slot="right">Joined in 2013</span>
            </sui-card-content>
      </sui-card>
       </sui-card-group> -->

    </div>
</template>

<script>
    import Card from  './Card.vue'
    //import CardShimmerVue from './CardShimmer.vue';
    import ImageCardShimmer from './ImageCardShimmer.vue'
    import PacksShimmer from './packsShimmer.vue'
    export default {
        components:{
         
             // CardShimmerVue,
              PacksShimmer,
              ImageCardShimmer,
              Card
          },
      data(){
          
          return {
              cards:[
                  {
                      icon:"balance scale",
                      title:"Account balance",
                      price:"$ 30,659",
                      color:"#10b7cb",
                      angle:100
                  },
                  {
                      icon:"sync alternate",
                      title:"Account balance",
                      price:"$ 30,659.45",
                      color:"#e12c6c",
                      angle:59
                  },
                  {
                      icon:"bookmark icon",
                      title:"Account balance",
                      price:"$ 30,659.45",
                      color:"#54ad58",
                      angle:43
                  },
                  {
                      icon:"check ",
                      title:"Account balance",
                      price:"$ 30,6",
                      color:"#fd9810",
                      angle:180
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
<style src="../../../../assets/css/utilities.css"></style>