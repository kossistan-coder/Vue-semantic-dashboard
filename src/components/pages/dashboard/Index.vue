<template >
    <div >
      <Sidebar class="mob" :visible="visible"></Sidebar>
   
      <sui-sidebar-puhser>
        <div id="marge">
          <div class="header-2">
          <sui-menu fixed borderless>
              <sui-menu-item>
                  <sui-button icon="sidebar" @click="setState"  style="background-color: #0e7490;color:#ffffff" />
              </sui-menu-item>
             <sui-menu-menu position="right">
          <sui-menu-item>
                      <sui-menu-item>
            <sui-input transparent  icon="search" placeholder="Search..." />
          </sui-menu-item>
          </sui-menu-item>
          <sui-menu-item>
               <a is="sui-label" style="background-color: #ffffff; color:#36393a ">
                  <img src="../../../assets/images/go.png" alt="" class="ui right spaced big avatar image">
                  <sui-icon name="dropdown"/>
               </a>
          </sui-menu-item>
      </sui-menu-menu>
          </sui-menu>
      </div>
          <Header class="header-1"></Header>
          
            <router-view></router-view>
          
        </div>
      </sui-sidebar-puhser>
     
    </div>
  </template>
  
  <script>
  
  //import Overview from "./customComponents/Overview.vue"
  import Sidebar from './customComponents/Sidebar.vue'
  import Header from './customComponents/Header.vue'
  
  
  export default {
    name: 'App',
    components: {

      Sidebar,
      Header,
  
     
  },
  data(){
    return{
      visible:true
    }
  },
  methods:{
          setState(){
              this.visible = !this.visible
  
          }
      },
      mounted(){
        if (window.innerWidth < 900 ) {
          this.visible=false
        }else{
          this.visible=true
        }
      }
  }
  </script>
  
  
  <style  >
    #marge{
      margin-left: 150px;
    }
    .header-2{
        display: none;
      }
    @media screen and (max-width:900px) {
  
      #marge{
      margin-left: 0px;
  
      }
      .header-1{
        display: none;
      }
      .header-2{
        display: block;
      }
      
    }
    
  </style>