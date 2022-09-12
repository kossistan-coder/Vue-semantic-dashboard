<template>
    <div class="marge1">
        
        <div class="flex-between">
            <div>
                <div>
                <sui-breadcrumb size="big">
                <sui-breadcrumb-section link>Account</sui-breadcrumb-section>
                <sui-breadcrumb-divider>/</sui-breadcrumb-divider>
                <sui-breadcrumb-section active>Vendeurs</sui-breadcrumb-section>
                </sui-breadcrumb>
            </div>
            </div>
            <div>
                <div class="inline">
                    <sui-dropdown
                
                    text="Filtrer par"
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
                <div class="ui  col-base icon button " @click="toggle">
                    <i class="add icon"></i>
                    Ajouter un vendeur
                </div>
                </div>
            </div>
        </div>
        <br>
        <div>
            <sui-table single-line>
    <sui-table-header>
      <sui-table-row>
       
        <sui-table-header-cell>label</sui-table-header-cell>
        <sui-table-header-cell>Nom</sui-table-header-cell>
        <sui-table-header-cell>Numero</sui-table-header-cell>
        <sui-table-header-cell >email</sui-table-header-cell>
        <sui-table-header-cell text-align="right">Site du vendeur</sui-table-header-cell>
        
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-for="i in 5" :key="i">
      
        <sui-table-cell>
            <a class="ui circular label" :class="options[i-1].label.color">N</a>
        </sui-table-cell>
        <sui-table-cell>September 14, 2013 </sui-table-cell>
        <sui-table-cell>+228 89477444</sui-table-cell>
        <sui-table-cell>
            <div>kossise@gmail.com</div>
        </sui-table-cell>
        <sui-table-cell text-align="right">
            <div class="ui action input">
                <input type="text" value="http://ww.short.url/c0opq">
                <button class="ui icon button">
                    <i class="copy icon"></i>
                    
                </button>
            </div>
        </sui-table-cell>
       
      </sui-table-row>
      
    </sui-table-body>
    <tfoot>
    <tr><th colspan="5">
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

            <sui-modal v-model="open" style="position:absolute;padding-bottom:200px;" onDeny="">
      <sui-modal-header>Ajouter un vendeur</sui-modal-header>
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