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
            <sui-input  icon="search" placeholder="Search..." transparent/>
         </div>
        </sui-menu-item>
        <sui-menu-item>
            <sui-dropdown icon="bell outline">
                <i class="dropdown icon" style="margin-left:-3px"></i>
                 <sui-dropdown-menu>
                        <sui-dropdown-item>Settings</sui-dropdown-item>
                        <sui-dropdown-item>Manage apps</sui-dropdown-item>
                        <sui-dropdown-item>Help</sui-dropdown-item>
                </sui-dropdown-menu>
            </sui-dropdown>
        </sui-menu-item>
        
    </sui-menu-menu>
    </sui-menu>
    

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
export default {
    methods: {
        showToast(){
            this.$toast.open({
                message : 'You have new notification',
            })
        }
    },
}
</script>
<style src="../../../../assets/css/utilities.css"></style>