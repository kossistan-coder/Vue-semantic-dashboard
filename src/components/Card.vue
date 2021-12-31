<template>
    <div>
        <div class="ui segments">
            <div class="ui segment">
                <sui-header size="tiny">
                    <sui-icon :name="icon" />
                    <sui-header-content style="opacity:0.8">
                            {{title}}
                            <sui-header-subheader>{{sub}}</sui-header-subheader>
                    </sui-header-content>
                </sui-header>
            </div>
            <div class="ui secondary segment">
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
    }
}
</script>