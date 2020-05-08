<template>
    <div class="hello">
        <el-container>
            <el-header height="80px">

                <!-- Header content -->
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="grid-content">
                            <h1>Line 後台管理系統</h1>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-button class="collapse_btn" v-on:click="navCollapse">{{collapseText}}</el-button>
                <el-aside width="200px" el-col :span="20">
                    <!-- Aside content -->
                    <el-col :span="24">
                        <el-menu default-active="3" class="el-menu-vertical-demo" @open="handleOpen"
                            @close="handleClose" text-color="#707070" active-text-color="#409EFF"
                            :collapse="isCollapse">

                            <el-menu-item v-for="(item, index) in parentItem" :key="item.name" :index="(index+'') "
                                v-on:click="select('http://localhost:8081/#/root/customerList',item.name)">
                                <menuItem :menuIcon="item.icon" :menuName="item.name">
                                </menuItem>
                            </el-menu-item>

                            <!-- <div v-for="(item, index) in childrenItem" :key="item.name" :index="(index+'') "> -->
                            <menuItemBySub :menuIcon="item.icon" :menuName="item.name" :menuIndex="index"
                                v-for="(item, index) in childrenItem" :key="item.name" :index="(index+'') ">
                            </menuItemBySub>
                            <!-- </div>  -->
                            <!-- <el-submenu v-for="(item, index) in childrenItem" :key="item.name" :index="(index+'') ">
                                <menuItemBySub :menuIcon="item.icon" :menuName="item.name" :menuIndex="index"></menuItemBySub>
                            </el-submenu> -->

                            <!--
                            <el-menu-item index="1" v-on:click="select('http://localhost:8081/#/root/customerList')">
                                <i class="el-icon-s-custom"></i>
                                <span slot="title">用戶總覽</span>
                            </el-menu-item>
                            <el-menu-item index="2">
                                <i class="el-icon-s-comment"></i>
                                <span slot="title">通訊聊天</span>
                            </el-menu-item>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-s-order"></i>
                                    <span>訂單管理</span>
                                </template>
                                <el-menu-item index="1-1">訂單確認</el-menu-item>
                                <el-menu-item index="1-2">訂單取消</el-menu-item>
                                <el-menu-item index="1-3">訂單刪除</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="4">
                                <i class="el-icon-date"></i>
                                <span slot="title">訂單時程</span>
                            </el-menu-item>
                            <el-menu-item index="5" disabled>
                                <i class="el-icon-notebook-2"></i>
                                <span slot="title">帳號管理</span>
                            </el-menu-item>
                              -->
                        </el-menu>

                    </el-col>
                </el-aside>
                <el-main height="">
                    <!-- Main content -->
                    <el-page-header @back="goBack" :content="(navItemName)">
                    </el-page-header>
                    <router-view :pageName="(123+'')"></router-view>
                </el-main>
            </el-container>
            <el-footer height="80px">
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import Vue from 'vue'
    Vue.component('menuItem', {
        props: {
            'menuName': [String],
            'menuIcon': [String]
        },
        template: `
        <div>
          <i :class="(menuIcon)"></i>
          <span slot="title">{{menuName}}</span></div>`
    });
    Vue.component('menuItemBySub', {
        props: {
            'menuName': [String],
            'menuIcon': [String],
            'menuIndex': [Number]
        },
        template: `
     <el-submenu index="menuIndex" >
                                <template slot="title">
                                    <i :class="(menuIcon)"></i>
                                    <span>{{menuName}}</span>
                                    </template>
                                    
                                <el-menu-item index="1-1">訂單確認</el-menu-item>
                                <el-menu-item index="1-2">訂單取消</el-menu-item>
                                <el-menu-item index="1-3">訂單刪除</el-menu-item>
                              
                                </el-submenu>`
    });
    export default {
        name: 'root',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App Root',
                circleUrl: "https://api.adorable.io/avatars/285/abott@adorable.png",
                isCollapse: false,
                collapseText: "收起",
                navItemName: '用戶總覽',
                navItemList: [{
                    name: '用戶總覽',
                    icon: 'el-icon-s-custom'
                }, {
                    name: '通訊聊天',
                    icon: 'el-icon-s-comment'
                }, {
                    name: '訂單管理',
                    icon: 'el-icon-s-order',
                    children: [{
                        name: '用戶總覽',
                        icon: 'el-icon-s-custom'
                    }]
                }, {
                    name: '訂單時程',
                    icon: 'el-icon-date'
                }, {
                    name: '帳號管理',
                    icon: 'el-icon-notebook-2'
                }]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            },
            navCollapse: function () {
                this.isCollapse = !this.isCollapse
                if (this.isCollapse) {
                    this.collapseText = "展開"
                } else {
                    this.collapseText = "收起"
                }
            },
            select: function (url, navName) {
                window.location.href = url;
                this.navItemName = navName;
            }

        },
        computed: {
            parentItem: function () {
                return this.navItemList.filter(function (navItem) {
                    return navItem.children == null
                })
            },
            childrenItem: function () {
                return this.navItemList.filter(function (navItem) {
                    return navItem.children != null
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-header,
    .el-footer {
        background-color: #409EFF;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    h1 {
        color: #ffffff;
        text-align: left;
        margin-left: 10px;
    }

    .el-aside {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .collapse_btn {
        color: #409EFF;
    }

    .grid-content {
        color: #ffffff;
        margin: 0px auto;
    }

    .el-main {
        text-align: left;
    }
</style>