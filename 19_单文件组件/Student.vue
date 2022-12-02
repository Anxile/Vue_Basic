<template>
    <!-- 组件的结构 -->
    <div>
        <h2>学生名称：{{studentName}}</h2>
        <h2>学生年龄：{{age}}</h2>  
    </div>
</template>

<script>
    //组件交互相关代码（数据、方法、属性等等）
    export default Vue.extend({
        name:'name',
        data(){
            return{  
                studentName:'张三',
                age:18,
            }
        }
    })
</script>