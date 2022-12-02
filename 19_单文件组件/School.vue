<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点我显示学校名</button>    
    </div>
</template>

<script>
    //组件交互相关代码（数据、方法、属性等等）
    export default Vue.extend({
        name:'School',
        data:function(){
            return{
                schoolName:'硅谷',
                address:'北平',
            }
        },
        methods: {
            showName(){
                alert(this.schoolName)
            }
        },
    })
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: burlywood;
    }
</style>