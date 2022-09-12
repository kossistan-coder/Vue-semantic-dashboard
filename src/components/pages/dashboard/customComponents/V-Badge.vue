<template>
    <div>
        <div class="ui top dropdown item">
                    <i :class="icon"></i>
                    <div class="floating ui red label  tiny circular " style="top:10px;left:39px;" :class="{empty:empty}">
                       
                   </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            icon : String,
     
            empty:Boolean,
        }
    }
</script>