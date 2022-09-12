<template>
    <div style="padding-top:20vh;">
        
        <div class="box-center">
                <div class="ui segment" id="size">
                <h2 class="text-center">Ambox Account </h2>
                <sui-form  >
                    
                    <sui-form-field>
                        <label>Email</label>
                        <div class="ui left icon input">                          
                            <input placeholder="Your email adress" type="email" />
                            <i class="user icon"></i>
                        </div>
                    </sui-form-field>
                    <sui-form-field>
                        <label>Password</label>
                        <div class="ui left icon input">                          
                            <input placeholder="Your password" type="password" />
                            <i class="lock icon"></i>
                        </div>
                    </sui-form-field>
                    
                    <sui-form-field>
                       <sui-button  size="fluid" class="col-base" >Log In</sui-button>
                    </sui-form-field>
                </sui-form>
                
            </div>
          </div>
    </div>
</template>
<style src="../../../assets/css/utilities.css"></style>