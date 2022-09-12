<template>
    <div class="marge2">
          <div>
    <sui-menu attached="top" borderless style="padding:2px ;">
      
        <sui-menu-item>
            <div class="ui icon col-base button">
                <i class="sidebar icon"></i>
            </div>
        </sui-menu-item>
      <sui-menu-menu position="left">
        
      </sui-menu-menu>
      <sui-menu-menu position="right">
        <sui-menu-item >
         <div style="background-color:#f3f4f6 ; padding:12px;border-radius:20px">
            <sui-input  icon="search" placeholder="Search..." @click="combobox" transparent/>
         </div>
        </sui-menu-item>
        <sui-menu-item>
            <!-- <div >
                    <a class=" active item" style="padding-right:10px;padding-top: 10px;">
                        <i class="icon bell"></i>
                        <div class="floating ui tiny circular red label" >9</div>
                    </a>
                   
                </div> -->
                <VBadge :empty="true" :icon="'bell outline icon'" >

                </VBadge>
            
        </sui-menu-item>
        <sui-menu-item>
            <i class="user outline icon"></i>
        </sui-menu-item>
        
    </sui-menu-menu>
    </sui-menu>
    <sui-modal v-model="open" size=" tiny" basic style="padding-bottom:70vh;">
        <sui-search :source="source" fluid>
    <template v-slot:input="{ props, handlers }" >
      <sui-input
        v-model="input"
        size="fluid"
        v-bind="props"
        v-on="handlers"
        icon="search"
        placeholder="Common passwords..."
        @select="change"
      />
    </template>
  </sui-search>
    </sui-modal>

    <!-- <sui-segment attached="bottom">
      <div class="space-bt">
          <div>
              <div is="sui-header">
          <img src="../../../../../src/assets/images/go.png" alt="" class="ui circular image">
    
         <sui-header-content>
       Good Morning , Emillia Birch
      <sui-header-subheader>
          <div>
              <span>
                  <sui-icon name="briefcase"/>
                  Duke Street Studio
              </span>
             
          </div>
      </sui-header-subheader>
    </sui-header-content>
              </div>
          </div>
          <div>
              <div class="inline">
                  <a  class="ui basic button">Add money</a>
                  <a  class="ui col-base button" @click="showToast">Send money</a>
              </div>
          </div>
      </div>
    </sui-segment> -->
  </div>
    </div>
</template>
<script>
    import VBadge from './V-Badge.vue';
export default {
    components:{
        VBadge ,
    },
    data() {
        return {
            open : false ,
            input:"",
            source:[
            { title: 'Andorra' , value:1},
        { title: 'United Arab Emirates' ,value:3},
        { title: 'Afghanistan' , value:0},
      
            ]
        }
    },
    methods: {
        showToast(){
            this.$toast.open({
                message : 'You have new notification',
            })
        },
        combobox(){
            this.open = !this.open ;
        },
        change(){
          alert(this.input);
        }
    },
}
</script>
<style src="../../../../assets/css/utilities.css"></style>