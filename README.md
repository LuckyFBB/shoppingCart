# shoppingCart
* ### 5.11--first stage 
   * #### v-for重复渲染元素
     img中src属性值不能使用{{}}读取，要使用v-bind绑定。
* ### 5.13--second stage 
    * #### filters
      使用过滤器对价格进行格式化(全局过滤器定义失败)
    * #### v-model双向绑定数据 
      使书籍数量更改的同时，订单总价也更改
    * #### v-on事件监听
      @click中可以写表达式(一元或者三元表达)，不能写业务逻辑。
    * #### v-bind：class添加class类
      v-bind:class="{'check':book.checked}"，v-bind：class后面只能跟对象或者数组。
      
      
##### (demo来自于https://github.com/Yfling/shoppingCart/tree/master/unit)
