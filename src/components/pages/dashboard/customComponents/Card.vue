<template>
    <div>
        <div class="ui segments">
            <div class="ui segment" style="padding-bottom:40px">
                <div class="flex-2">
                    <div>
                        <div class="ui raised segment" v-bind:style="{backgroundColor: color , borderColor: color ,marginTop : '-35px',paddingTop:'25px',paddingBottom:'25px'}">
                            <sui-icon :name="icon" size="big" style="color:white"></sui-icon>
                        </div>
                    </div>
                    <div>
                        <div class="ui header">
                            <div class="sub header">
                                {{title}}
                            </div >
                                <div>{{sub}}</div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui  segment">
                <a style="color: #0e7490;">View all</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
    props:{
        icon:String,
        title:String,
        sub:String,
        color:String
    }
}
</script>
<style src="../../../../assets/css/utilities.css"></style>