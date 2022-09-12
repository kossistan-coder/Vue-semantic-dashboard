<template>
    <div>
        <sui-menu
            is="sui-sidebar"
        :visible="visible"
        animation="uncover push"
        width="medium"
        borderless
        vertical
        style="background-color: #2d3647;"
        >
            <sui-menu-item > 
                    <h2 is="sui-header" style="color:#ffffff">
                        <img src="../../../../../src/assets/images/icon-save.png" alt="">
                        easywire
                    </h2>
            </sui-menu-item>
            <sui-menu-item class="active">
                <router-link  :to="{name:'overview'}" class="color-white ">
                    <sui-icon name="home"/>
                    Home
                </router-link>
            </sui-menu-item>
            <sui-menu-item >
                <router-link :to="{name:'subscription'}" class="color-white">
                    <sui-icon name="history"/>
                    Abonnements utilisateurs 
                </router-link>
            </sui-menu-item>
            <sui-menu-item>
                <router-link :to="{name:'categories'}" class="color-white">
                    <sui-icon name="balance scale"/>
                    Categories
                </router-link>
            </sui-menu-item>
            <sui-menu-item>
                <router-link :to="{name:'sellers'}" class="color-white">
                    <sui-icon name="address card"/>
                    Vendeurs
                </router-link>
            </sui-menu-item>
            <sui-menu-item>
                <router-link :to="{name:'produits'}" class="color-white">
                    <sui-icon name=" briefcase "/>
                    Produits
                </router-link>
            </sui-menu-item>
         
            <hr class="trait">
            <sui-menu-item>
                <router-link :to="{name:'profile'}" class="color-white">
                    <sui-icon name="setting"/>
                    Settings
                </router-link>
            </sui-menu-item>
            
            <sui-menu-item>
                <router-link :to="{name:'admins'}" class="color-white">
                    <sui-icon name="privacy"/>
                    Admins
                </router-link>
            </sui-menu-item>
        </sui-menu>
    </div>
</template>
<script>
    export default{
        props:{
            visible:Boolean
        }
    }
</script>
<style>
    .text-center{
        text-align: center;
    }
    .color-white{
        color: white;
    }
    .color-white:hover{
        color:white;
    }
    .trait{
        color: black;
        opacity: .5;
    }

</style>