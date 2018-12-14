<template>
    <div class="cat-float-panel-body" 
        :style="position" 
        v-show="show"
        v-drag>
        <div style="cursor: default">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss">
    .cat-float-panel-body {
        background-color: $--float-panel-fill;
        box-shadow: $--float-panel-box-shadow;
        padding: $--float-panel-padding;
        // padding: 20px;
        border-radius: $--float-panel-radius;
        width: fit-content;
        cursor: grab;
        cursor: -webkit-grab;
        position: fixed;
        height: fit-content;
        z-index: $--float-panel-z-index;
    }
</style>
<script>
    export default {
        name: 'CcFloatPanel',
        components: {
        },
        props: {
            show: {
                type: Boolean,
                default: false,
            },
            left: {
                type: Number | String,
                default: 220,
            },
            top: {
                type: Number | String,
                default: 72,
            },
        },
        data() {
            return {
                position: {
                    left: '220px',
                    top: '72px',
                },
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            this.position.left = `${this.left}px`;
            this.position.top = `${this.top}px`;
        },
        directives: {
            drag: {
                // 指令的定义
                bind (el, binding, vnode) {
                    let self = vnode.context;
                    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                        el.addEventListener('touchstart', ee => {
                            console.log(ee.targetTouches);
                            if (ee.targetTouches[0].target !== el) {
                                return;
                            }
                            let e;
                            if(ee.touches){
                                e = ee.touches[0];
                            }   else {
                                e = ee;
                            }

                            //算出鼠标相对元素的位置
                            let disX = e.clientX - el.offsetLeft;
                            let disY = e.clientY - el.offsetTop;
                            function cacl(ee) {
                                let e;
                                if(ee.touches){
                                    e = ee.touches[0];
                                }   else {
                                    e = ee;
                                }
                                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                                let left = e.clientX - disX;    
                                let top = e.clientY - disY; 
                                console.log(e.clientX);
                                let width = window.innerWidth - el.clientWidth;
                                let height = window.innerHeight - el.clientHeight;

                                left = left > width ? width : left;
                                top = top > height ? height : top;
                                self.position.left = left < 0 ? 0 : `${left}px`;
                                self.position.top = top < 0 ? 0 : `${top}px`; 
                                // console.log(left);
                                // console.log(top);
                            };
                            function remove(e) {
                                window.removeEventListener('touchmove', cacl);
                                window.removeEventListener('ontouchend', remove);
                            }
                            window.addEventListener('touchmove', cacl);
                            window.addEventListener('touchend', remove);
                        });

                    } else {
                        

                        el.addEventListener('mousedown', e => {
                            if (e.path[0] !== el) {
                                return;
                            }
                            // console.log(e);
                            //算出鼠标相对元素的位置
                            let disX = e.clientX - el.offsetLeft;
                            let disY = e.clientY - el.offsetTop;
                            function cacl(e) {
                            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                                let left = e.clientX - disX;    
                                let top = e.clientY - disY; 
                                let width = window.innerWidth - el.clientWidth;
                                let height = window.innerHeight - el.clientHeight;

                                left = left > width ? width : left;
                                top = top > height ? height : top;
                                self.position.left = left < 0 ? 0 : `${left}px`;
                                self.position.top = top < 0 ? 0 : `${top}px`; 
                            };
                            function remove(e) {
                                window.removeEventListener('mousemove', cacl);
                                window.removeEventListener('onmouseup', remove);
                            }
                            window.addEventListener('mousemove', cacl);
                            window.addEventListener('mouseup', remove);
                        }) 



                    }
                    
                }
            }
        }
    }
</script>