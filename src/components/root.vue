<template>
    <div class="hello">
        <el-container>
            <el-aside width="200px">
                <!-- Aside content -->
                    <el-col :span="24">
                        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
                            @close="handleClose" background-color="#545c64" text-color="#fff"
                            active-text-color="#ffd04b">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>導航一</span>
                                </template>
                                <el-menu-item-group>
                                    <template slot="title">分组一</template>
                                    <el-menu-item index="1-1">選項1</el-menu-item>
                                    <el-menu-item index="1-2">選項2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="分组2">
                                    <el-menu-item index="1-3">選項3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="1-4">
                                    <template slot="title">選項4</template>
                                    <el-menu-item index="1-4-1">選項1</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">導航二</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                                <i class="el-icon-document"></i>
                                <span slot="title">導航三</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span slot="title">導航四</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-container>
                <el-header height="">
                    <!-- Header content -->
                </el-header>
                <el-main height="">
                    <!-- Main content -->
                </el-main>
            </el-container>
        </el-container>

        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'root',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App Root'
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>