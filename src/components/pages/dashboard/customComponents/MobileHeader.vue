<template>
    <div>
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
                <img src="../assets/go.png" alt="" class="ui right spaced big avatar image">
                <sui-icon name="dropdown"/>
             </a>
        </sui-menu-item>
    </sui-menu-menu>
        </sui-menu>
    </div>
</template>

<script>
export default {
    props:{
        visible:Boolean
    },
    methods:{
        setState(){
            this.visible = !this.visible
        }
    }
}
</script>