<template>
    <div class="columns">
        <div class="column is-half is-offset-one-quarter brand-list">
            <div class="box">
                <h2 class="title">My brands</h2>
                <hr>
                <div class="field has-addons">
                    <div class="control is-expanded">
                        <input class="input" type="text" placeholder="New brand" v-model="brand.body">
                    </div>
                    <div class="control">
                        <a class="button is-primary" @click="createBrand()">
                            Add brand
                        </a>
                    </div>
                </div>
                <div class="tabs is-centered">
                    <ul>
                        <li :class="{'is-active':isActive('current')}">
                            <h3 class="title">
                                <a href="#" v-on:click.prevent="fetchBrandList()">
                                    Current brand
                                </a>
                            </h3>
                        </li>
                        <li :class="{'is-active':isActive('archive')}">
                            <h3 class="title">
                                <a href="#" v-on:click.prevent="fetchBrandList(1)">
                                    Archived brands
                                </a>
                            </h3>
                        </li>
                    </ul>
                </div>
                <div class="card" v-for="brand in list">
                    <header class="card-header">
                        <p class="card-header-title">
                            Brand {{ brand.id }}
                        </p>
                        <a href="#" class="card-header-icon" aria-label="more options"
                            v-on:click.prevent="archiveBrand(brand.id)">
                            <span class="icon">
                                <i class="fa " :class="{'fa-square-o': !brand.archive,check: !brand.archive, 'fa-check-square-o': brand.archive, done: brand.archive}" aria-hidden="true"></i>
                            </span>
                        </a>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <p v-if="brand !== editingBrand" @dblclick="editBrand(brand)" v-bind:title="message">
                                {{ brand.body }}
                            </p>
                            <input class="input" v-if="brand === editingBrand" v-autofocus @keyup.enter="endEditing(brand)" @blur="endEditing(brand)" type="text" placeholder="New brand" v-model="brand.body">
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a class="card-footer-item" v-on:click.prevent="deleteBrand(brand.id)">Delete</a>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        directives: {
            'autofocus': {
                inserted(el) {
                    el.focus();
                }
            }
        },
        data() {
            return {
                message: 'Double click for editing.',
                list: [],
                brand: {
                    id: '',
                    body: '',
                    archive: ''
                },
                editingBrand: {},
                activeItem: 'all'
            }
        },
        created() {
            this.fetchBrandList();
        },
        methods: {
            fetchBrandList(archive = null) {
                if (archive === null) {
                    var url = 'all_brands';
                    this.setActive('all');
                } else {
                    var url = 'create_brand';
                    this.setActive('create');
                }
                axios.get(url).then(result => {
                    this.list = result.data
                });
            },
            isActive(menuItem) {
                return this.activeItem === menuItem;
            },
            setActive(menuItem) {
                this.activeItem = menuItem;
            },
            createBrand() {
                axios.post('create_brand', this.brand).then(result => {
                    this.brand.body = '';
                    this.fetchBrandList();
                }).catch(err => {
                    console.log(err);
                });
            },
            editBrand(brand) {
                this.editingBrand = brand;
            },
            endEditing(brand) {
                this.editingBrand = {};
                if (brand.body.trim() === '') {
                    this.deleteBrand(brand.id);
                } else {
                    axios.post('edit_brand', brand).then(result => {
                        console.log('access!')
                    }).catch(err => {
                        console.log(err);
                    });
                }
            },
            deleteBrand(id) {
                axios.post('delete_brand/' + id).then(result => {
                    this.fetchBrandList();
                }).catch(err => {
                    console.log(err);
                });
            },
            archiveBrand(id) {
                axios.post('update_brand/' + id).then(result => {
                    this.fetchBrandList();
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
</script>