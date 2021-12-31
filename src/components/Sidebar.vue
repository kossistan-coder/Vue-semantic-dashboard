<template>
    <div>
        <sui-menu
            is="sui-sidebar"
        :visible="visible"
        animation="uncover push"
        width="medium"
        borderless
        vertical
        style="background-color: #0e7490;"
        >
            <sui-menu-item > 
                    <h2 is="sui-header" style="color:#ffffff">
                        <img src="../assets/icon-save.png" alt="">
                        easywire
                    </h2>
            </sui-menu-item>
            <sui-menu-item>
                <div class="color-white">
                    <sui-icon name="home"/>
                    Home
                </div>
            </sui-menu-item>
            <sui-menu-item>
                <div class="color-white">
                    <sui-icon name="history"/>
                    History
                </div>
            </sui-menu-item>
            <sui-menu-item>
                <div class="color-white">
                    <sui-icon name="balance scale"/>
                    Balances
                </div>
            </sui-menu-item>
            <sui-menu-item>
                <div class="color-white">
                    <sui-icon name="address card"/>
                    Cards
                </div>
            </sui-menu-item>
            <sui-menu-item>
                <div class="color-white">
                    <sui-icon name="users"/>
                    Recipients
                </div>
            </sui-menu-item>
            <sui-menu-item>
                <div class="color-white">
                    <sui-icon name="file alternate outline"/>
                    Reports
                </div>
            </sui-menu-item>
            <hr class="trait">
            <sui-menu-item>
                <div class="color-white">
                    <sui-icon name="setting"/>
                    Settings
                </div>
            </sui-menu-item>
            <sui-menu-item>
                <div class="color-white">
                    <sui-icon name=" help"/>
                    Reports
                </div>
            </sui-menu-item>
            <sui-menu-item>
                <div class="color-white">
                    <sui-icon name="privacy"/>
                    Reports
                </div>
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
    .trait{
        color: black;
        opacity: .5;
    }

</style>