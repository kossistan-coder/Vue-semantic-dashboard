<template>
    <div>
        <div class="ui segments">
            <div class="ui segment" style="padding-bottom:40px">
                <div class="flex-2">
                    <div>
                        <vue-ellipse-progress
            :angle="angle"
            :color="color"
            :colorFill="colorFillGradient"
            :legend="true"
            :legendValue="angle"
            :progress="angle*progress/360"
            :size="50"
            :half="false"
            :loading="false"
            >
                    
    
            </vue-ellipse-progress>
                        <!-- <div class="ui  segment" v-bind:style="{backgroundColor: color , borderColor: color ,}">
                            <sui-icon :name="icon"  style="color:white"></sui-icon>
                        </div> -->
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
                <div >
                    <sui-icon :name="icon" ></sui-icon>
                    All historiques
                </div>
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
        color:String,
        angle:Number
    }   ,     
    data() {
        return {
            progress : 90,
            
        }
    },
}
</script>
<style src="../../../../assets/css/utilities.css"></style>