<template>
    <div class="marge1">
        
        <div>
                <sui-breadcrumb size="big">
                <sui-breadcrumb-section link>Account</sui-breadcrumb-section>
                <sui-breadcrumb-divider>/</sui-breadcrumb-divider>
                <sui-breadcrumb-section active>Profile</sui-breadcrumb-section>
                </sui-breadcrumb>
            </div>
            <br>
            <br>
        <div class="grid-2">
            <div>
                <div class="ui segment">
                    <div class="inline-flex">
                        <div class="ui raised segment" v-bind:style="raisedCardStyle">
                            <sui-icon name="user" size="big" style="color:white"></sui-icon>
                    </div>
                    <span class="size-2">
                        Edit your profile
                    </span>
                    </div>

                    <div>
                        <sui-form>
                            <sui-header divinding>
                                Remplir vos informations
                            </sui-header>
                            <sui-form-field>
                                <label>Name</label>
                                <sui-form-fields fields="two">
                                    <sui-form-field>
                                    <input
                                        type="text"
                                        name="shipping[first-name]"
                                        placeholder="First Name"
                                    />
                                    </sui-form-field>
                                    <sui-form-field>
                                    <input
                                        type="text"
                                        name="shipping[last-name]"
                                        placeholder="Last Name"
                                    />
                                    </sui-form-field>
                                </sui-form-fields>
                            </sui-form-field>
                            <sui-form-field>
                                <label>Billing Address</label>
                                <sui-form-fields>
                                    <sui-form-field width="twelve">
                                    <input
                                        type="text"
                                        name="shipping[address]"
                                        placeholder="Street Address"
                                    />
                                    </sui-form-field>
                                    <sui-form-field width="four">
                                    <input type="text" name="shipping[address-2]" placeholder="Apt #" />
                                    </sui-form-field>
                                    </sui-form-fields>
                                </sui-form-field>
                                <a  class="ui col-base button" @click="showToast">Update profile</a>
                        </sui-form>
                    </div>
                </div>
            </div>
            <div>
                <div class="ui segment"></div>
            </div>
         
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                raisedCardStyle :{
                    backgroundColor: '#54ad58' , 
                    borderColor: '#54ad58' ,
                    marginTop : '-35px',
                    paddingTop:'25px',
                    paddingBottom:'25px',
                    maxWidth:'65px'
            }
            }
        },
        methods: {
        showToast(){
            this.$toast.open({
                message : 'Your profile has been update',
            })
        }
    },
    }
</script>