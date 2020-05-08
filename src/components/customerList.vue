<template>
    <div>
        <ul>
            <el-table :data="info" stripe style="width: 100%">
                <el-table-column width="60">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </el-table-column>
                <el-table-column prop="customer_id" label="編號" width="180">
                </el-table-column>
                <el-table-column prop="customer_name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </ul>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        name: 'customerList',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App Root',
                circleUrl: "https://api.adorable.io/avatars/285/abott@adorable.png",
                isCollapse: false,
                collapseText: "收起",
                list: [{
                        id: '123456789',
                        name: '選項 1'
                    },
                    {
                        id: '234567890',
                        name: '選項 2'
                    },
                    {
                        id: '345678901',
                        name: '選項 3'
                    },
                ],
                info: null
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            navCollapse: function () {
                this.isCollapse = !this.isCollapse
                if (this.isCollapse) {
                    this.collapseText = "展開"
                } else {
                    this.collapseText = "收起"
                }
            }
        },
        mounted() {
            axios
                .get('http://localhost:8080/API/customers')
                .then(response => (
                    this.info = response.data,
                    console.log(response.data)
                ))

        },
        props: {
            'pageName': [String]
        }
    }
</script>
<style scope>
    ul li {
        list-style: none
    }
</style>