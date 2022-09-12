<template>
    <div class="marge1">
        
        <div class="flex-between">
            <div>
                <div style="padding-top:10px">
                <sui-breadcrumb size="big">
                <sui-breadcrumb-section link>Account</sui-breadcrumb-section>
                <sui-breadcrumb-divider>/</sui-breadcrumb-divider>
                <sui-breadcrumb-section active>Categories</sui-breadcrumb-section>
                </sui-breadcrumb>
            </div>
            </div>
            <div>
                <div class="inline">
                    <sui-dropdown
                
                    text="Filter par"
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
                <div class="ui left labeled icon col-base button">
                    <i class="add icon"></i>
                    Ajouter une categorie 
                </div>
                </div>
            </div>
        </div>
        <br>
        <div>
            <sui-table single-line>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>N .</sui-table-header-cell>
        <sui-table-header-cell>Nom</sui-table-header-cell>
        <sui-table-header-cell>Nbre d'abonnements</sui-table-header-cell>
        <sui-table-header-cell >description</sui-table-header-cell>
        <sui-table-header-cell></sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-for="i in 5" :key="i">
        <sui-table-cell>
            {{i}}
        </sui-table-cell>
        <sui-table-cell>Vin</sui-table-cell>
        <sui-table-cell>25</sui-table-cell>
        <sui-table-cell >
            lorem ...                            
        </sui-table-cell>
        <sui-table-cell >
            <router-link style="color: blue ;" to="/dashboard">Détails</router-link>                         
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
            
        },
    }
</script>