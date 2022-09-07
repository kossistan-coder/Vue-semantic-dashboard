<template>
    <div class="marge1">
        <br>
        <div>
                <sui-breadcrumb size="big">
                <sui-breadcrumb-section link>Account</sui-breadcrumb-section>
                <sui-breadcrumb-divider>/</sui-breadcrumb-divider>
                <sui-breadcrumb-section active>Admins</sui-breadcrumb-section>
                </sui-breadcrumb>
            </div>
        <table class="ui  stripped table">
            <thead>
                <tr>
                <th colspan="5">
                Git Repository
                </th>
                </tr>
            </thead>
            <tbody>
                
    <tr v-for="i in 5" :key="i">
        <td>N. {{i}}</td>
      <td>John</td>
      <td>+228 59756388</td>
      <td>koositomou@gmail.com</td>
      <td class="right aligned">
        <div class="inline">
            
            <div class="ui icon button blue" @click="toggle">
                 <i class="ui edit icon"></i>
                 
            </div>
            <div class="ui icon button green">
                 <i class="ui eye icon"></i>
            </div>
            <div class="ui icon button red">
                 <i class="ui trash icon"></i>
            </div>
        </div>
      </td>
    </tr>
    
  </tbody>

        </table>
        <sui-modal v-model="open" style="position:absolute;padding-bottom:200px;" onDeny="">
      <sui-modal-header>Select a Photo</sui-modal-header>
      <sui-modal-content image>
      
        <sui-modal-description>
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
                                        <sui-dropdown
                                            placeholder="Role"
                                            selection
                                            :options="role"
                                            v-model="current"
                                        />
                                    </sui-form-field>
                                    </sui-form-fields>
                                </sui-form-field>
                                <a  class="ui col-base button" @click="showToast">Update profile</a>
                        </sui-form>
        </sui-modal-description>
      </sui-modal-content>
   
    </sui-modal>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                open: false ,
                current:null,
                role : [
                    {
                        text:'Super admin',
                        value:1
                    },
                    {
                        text:'Admin',
                        value:2
                    },
                    {
                        text:'gestionnaire',
                        value:3
                    }
                    
                ]
            }
        },
        methods: {                              
            toggle() {
            this.open = !this.open;
            },
            showToast(){
            this.$toast.open({
                message : 'You have update successfuly this admin information',
            })
        }
        },
    }
</script>