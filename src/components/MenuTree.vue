<template>
    <div class="menuTree">
        <template v-for="item in parentMenu">
            <template v-if="item.children&&item.children.length <= 0">
                    <el-menu-item
                        :index="item.name"
                        :key="item.path"
                        @click.native="handleBtnRoute(item)"
                    >
                        <!-- <router-link :to="item.path" style="text-decoration: none;"> -->
                            <span >{{item.name}}</span>
                        <!-- </router-link> -->

                    </el-menu-item>
            </template>
           
            <el-submenu
            v-if="item.children&&item.children.length"
            :index="item.name"
            :key="item.path"
            >
                <template slot="title">
                    <img src="" alt="">
                    <span>{{item.name}}</span>
                </template>
                <MenuTree :parentMenu="item.children"></MenuTree>
            </el-submenu>
        </template>
    </div>
</template>
<script>
import router from '@/router'
    export default {
        name: 'MenuTree',
        props: {
            parentMenu: {
                type: Array,
                default: ()=> []
            }
        },
        methods: {
            handleBtnRoute(val){
                console.log(router, 'this')
                router.push({path: val.path})
            }
        }

    }
</script>
<style>
.el-scrollbar__wrap {
 overflow-x: hidden;
}
</style>