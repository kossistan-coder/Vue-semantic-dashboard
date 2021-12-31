<template>
    <div class="marge2">
          <div>
    <sui-menu attached="top" borderless>
      

      <sui-menu-menu position="left">
        <sui-menu-item righ>
          <sui-input transparent icon="search" placeholder="Search..." />
        </sui-menu-item>
      </sui-menu-menu>
      <sui-menu-menu position="right">
        <sui-menu-item>
            <sui-dropdown icon="bell outline">
                 <sui-dropdown-menu>
                        <sui-dropdown-item>Settings</sui-dropdown-item>
                        <sui-dropdown-item>Manage apps</sui-dropdown-item>
                        <sui-dropdown-item>Help</sui-dropdown-item>
                </sui-dropdown-menu>
            </sui-dropdown>
        </sui-menu-item>
        <sui-menu-item>
             <a is="sui-label" style="background-color: #ffffff; color:#36393a ">
                <img src="../assets/go.png" alt="" class="ui right spaced big avatar image">
        
                <sui-icon name="dropdown"/>
             </a>
        </sui-menu-item>
    </sui-menu-menu>
    </sui-menu>
    

    <sui-segment attached="bottom">
      <div class="space-bt">
          <div>
              <div is="sui-header">
          <img src="../assets/go.png" alt="" class="ui circular image">
    
         <sui-header-content>
       Good Morning , Emillia Birch
      <sui-header-subheader>
          <div>
              <span>
                  <sui-icon name="briefcase"/>
                  Duke Street Studio
              </span>
              <span style="margin-left:10px">
                  <sui-icon name="check circular green  inverted" style="font-size:10px"/>
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
                  <a  class="ui col-base button">Send money</a>
              </div>
          </div>
      </div>
    </sui-segment>
  </div>
    </div>
</template>
<style >
    .space-bt{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    .ui.button.col-base{
        background-color: #0e7490;
        color: #ffffff;
    }
    .marge2{
        margin-left:110px;
    }
  
</style>