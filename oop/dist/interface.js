"use strict";
(function () {
    /*
     * 定义类时，可以使类去实现一个接口,
     *   实现接口就是使类满足接口的要求
     * */
    class myClass {
        constructor(name) {
            this.name = name;
        }
        say() {
            console.log('123');
        }
    }
})();
