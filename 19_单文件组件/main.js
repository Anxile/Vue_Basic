import App from './App.vue'     //浏览器不认识import语句和.vue文件

new Vue({
    el:'#demo',
    template:'<App></App>',    
    components:{App}
})