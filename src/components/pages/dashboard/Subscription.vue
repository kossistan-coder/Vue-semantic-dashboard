<template>
    <div class="marge1">
        
        <div class="flex-between">
            <div>
                <div>
                <sui-breadcrumb size="big">
                <sui-breadcrumb-section link>Account</sui-breadcrumb-section>
                <sui-breadcrumb-divider>/</sui-breadcrumb-divider>
                <sui-breadcrumb-section active>Abonnements</sui-breadcrumb-section>
                </sui-breadcrumb>
            </div>
            </div>
            <div>
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
            </div>
        </div>
        <br>
        <div>
            <sui-table single-line>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Image</sui-table-header-cell>
        <sui-table-header-cell>Categorie</sui-table-header-cell>
        <sui-table-header-cell>Propriétaire</sui-table-header-cell>
        <sui-table-header-cell text-align="right">Admin assigné</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-for="i in 5" :key="i">
        <sui-table-cell>
            <img src="../../../assets/images/img1.jpg" alt="" style="width:40px;height:40px;border-radius: 100%;">
        </sui-table-cell>
        <sui-table-cell>September 14, 2013 </sui-table-cell>
        <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell>
        <sui-table-cell text-align="right">
            <div class="ui buttons">
                <div class="ui left labeled icon button">
                <i class="user icon"></i>
                pierre ahoble
            </div>
            <div class="ui icon col-base button" @click="toggle">
                <i class="edit icon"></i>
            </div>
            </div>
        </sui-table-cell>
      </sui-table-row>
      
    </sui-table-body>
  </sui-table>
        </div>
        <div >
            <sui-modal size="small" v-model="open" style="position:absolute;padding-bottom:200px;" dimmerClick>
            <sui-modal-content image>
                <img src="../../../assets/images/img1.jpg" alt="" class="ui medium image" style="border-radius:5px">
                <sui-modal-description>
          <sui-header>Default Profile Image</sui-header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
          <sui-dropdown
                
                    text="Assigner un admin"
                    icon="filter"
                    floating
                    labeled
                    button
                   
                    class="icon"
                    v-model="selectedAdmin"
                    :menu-header="menuHeader"
                    :search-in-menu="searchInMenu"
                    :options="admins"
                />
        </sui-modal-description>
        
            </sui-modal-content>
            <sui-modal-actions>
        <sui-button color="blue" @click.native="assign">
            Valider
        </sui-button>
      </sui-modal-actions>
        </sui-modal>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                open:false ,
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
            this.selectedAdmin = null ;
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
            }
        },
    }
</script>