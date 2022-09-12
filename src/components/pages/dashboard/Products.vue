<template>
    <div class="marge1">
        <div style="background:white;width: 35%; " id="sidebar" class="ui right large visible sidebar" v-show="open">
            <div style="padding:20px">
                <div class="ui tiny col-base icon button " @click="hide">
                    <i class="close icon"  ></i>
                </div>
               <div >
                <div v-if="create == false">
                    <div class="box-center">
                        <img src="../../../assets/images/img1.jpg" alt="" class="ui medium circular image" style="width:200px;height:200px;"/>
                    </div>
                    <div style="padding-top:10px;padding-bottom: 10px;">
                <h2 is="sui-header" class="text-center">
                    Account Settings
                    <sui-header-subheader>
                    Manage your account settings and set e-mail preferences.
                    </sui-header-subheader>
                </h2>
               </div>
                </div>
                <div v-else>
                    <div class="box-center">
                        <h2 is="sui-header" icon="settings">
                            Account Settings
                            <sui-header-subheader>
                            Manage your account settings and set e-mail preferences.
                            </sui-header-subheader>
                        </h2>
                    </div>
                </div>
               </div>
               
               <div>
                <sui-form>
                    
                            <sui-form-field>
                                <label>Name</label>
                                <sui-form-field>
                                    <input
                                        type="text"
                                        name="shipping[first-name]"
                                        placeholder="First Name"
                                    />
                                </sui-form-field>
                            </sui-form-field>
                            <sui-form-field>
                                <label>Billing Address</label>
                                <sui-form-fields fields="two">
                                    <sui-form-field >
                                        <sui-dropdown
                                            placeholder="Role"
                                            selection
                                            :options="role"
                                            v-model="current"
                                        />
                                    </sui-form-field>
                                    <sui-form-field >
                                        <sui-dropdown
                                            placeholder="Role"
                                            selection
                                            :options="role"
                                            v-model="current"
                                        />
                                    </sui-form-field>
                                   
                                    </sui-form-fields>
                                    <sui-form-field v-show="create">
                                        <label for="">Image</label>
                                        <input type="file" class="ui input">
                                    </sui-form-field>
                                    <label for="">Description</label>
                                    <textarea name="" id="" cols="30" rows="10" placeholder="lorem ipsum dollorem ">

                                    </textarea>
                                </sui-form-field>
                                <div v-if="create == false">
                                    <a  class="ui col-base button" @click="showToast">Update product</a>
                                </div>
                                <div v-else>
                                    <a  class="ui col-base button" @click="showToast">create product</a>
                                </div>
                    </sui-form>
               </div>
               
                
            </div>
        </div>
        <div class="flex-between">
            <div>
                <div>
                <sui-breadcrumb size="big">
                <sui-breadcrumb-section link>Account</sui-breadcrumb-section>
                <sui-breadcrumb-divider>/</sui-breadcrumb-divider>
                <sui-breadcrumb-section active>Produits</sui-breadcrumb-section>
                </sui-breadcrumb>
            </div>
            </div>
            <div>
                <div class="inline">
                    <sui-dropdown
                
                    text="Par categories"
                    icon="filter"
                    floating
                    labeled
                    button
                   
                    class="icon"
                    v-model="selectedValue"
                    :menu-header="menuHeader"
                    :search-in-menu="searchInMenu"
                    :options="options"
                />
                <div class="ui col-base button" @click="newProductCard">
                    <i class="add icon"></i>
                    Ajouter un produit
                </div>
                </div>
            </div>
        </div>
        <br>
        <div>
            <sui-table single-line>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell></sui-table-header-cell>
        <sui-table-header-cell>Image</sui-table-header-cell>
        <sui-table-header-cell>Nom</sui-table-header-cell>
        <sui-table-header-cell>Catégories</sui-table-header-cell>
        <sui-table-header-cell>Vendeurs</sui-table-header-cell>
        <sui-table-header-cell text-align="right"></sui-table-header-cell>
       
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-for="i in 5" :key="i">
        <sui-table-cell>
            <sui-checkbox />
        </sui-table-cell>
        <sui-table-cell>
            <img src="../../../assets/images/img1.jpg" alt="" style="width:40px;height:40px;border-radius: 100%;">
        </sui-table-cell>
        <sui-table-cell>September 14, 2013 </sui-table-cell>
        <sui-table-cell>Figurine</sui-table-cell>
        <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell>
        <sui-table-cell text-align="right">
            <div class="ui button" @click="toggle">
                Details
            </div>
        </sui-table-cell>
       
      </sui-table-row>
      
    </sui-table-body>
    <tfoot>
    <tr><th colspan="6">
      <div class="ui right floated pagination menu">
        <a class="icon item">
          <i class="left chevron icon"></i>
        </a>
        <a class="item">1</a>
        <a class="item">2</a>
        <a class="item">3</a>
        <a class="item">4</a>
        <a class="icon item">
          <i class="right chevron icon"></i>
        </a>
      </div>
    </th>
  </tr></tfoot>
  </sui-table>
        </div>
       
        <div>
           
        </div>
    </div>
</template>
<style src="../../../assets/css/utilities.css"></style>
<script>
    export default {
        mounted() {
           
        },
        data() {
           
            return {
               
                open:false ,
                create : false ,
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
                    
                ],
                menuHeader: {
                    icon: '',
                    content: 'Header',
                },
                searchInMenu: { 
                    icon: 'search',
                    iconPosition: 'left',
                },
                selectedValue: null,
                selectedAdmin:null,
                admins:[
                {
                    key: 'Announcement',
                    text: 'Announcement',
                    value: 'Announcement',
                    selectedAdmin:null,
                    label: { color: 'blue', empty: true, circular: true },
                    },
                    {
                    key: 'Cannot Fix',
                    text: 'Cannot Fix',
                    value: 'Cannot Fix',
                    selectedAdmin:null,
                    label: { color: 'black', empty: true, circular: true },
                    },
                ],
                options:[
                {
                    key: 'Important',
                    text: 'Important',
                    value: 'Important',
                    label: { color: 'red', empty: true, circular: true },
                    },
                    {
                    key: 'Announcement',
                    text: 'Announcement',
                    value: 'Announcement',
                    label: { color: 'blue', empty: true, circular: true },
                    },
                    {
                    key: 'Cannot Fix',
                    text: 'Cannot Fix',
                    value: 'Cannot Fix',
                    label: { color: 'black', empty: true, circular: true },
                    },
                    {
                    key: 'News',
                    text: 'News',
                    value: 'News',
                    label: { color: 'purple', empty: true, circular: true },
                    },
                    {
                    key: 'Enhancement',
                    text: 'Enhancement',
                    value: 'Enhancement',
                    label: { color: 'orange', empty: true, circular: true },
                    },
                ]
            }
        },
        methods: {
            showToast(){
                this.$toast.open({
                message : 'You have new notification',
            });
            },
            toggle() {
            this.open = !this.open;
            this.create = false ;
            this.selectedAdmin = null ;
            },
            toggleModal(){
                this.modal = !this.modal;
            },
            assign(){
                this.open = !this.open;
            this.selectedAdmin = null ;
                this.$toast.open({
                message : 'Admin assigner avec success',
            });
            },
            onDeny(){
               this.open = true ;
            },
            hide(){
                this.open = false ;
            },
            newProductCard(){

                this.open = !this.open;
                this.create = true ;
    
            }
            
        },
    }
</script>
