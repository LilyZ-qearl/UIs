<template>
    <div class="cat-select" 
        :style="{width: `${width}px`}"
        v-blur="handleClose"
        @click="selectClick">
        <!-- <p class="cat-select-title" v-if="title">
            {{title}}
        </p> -->
        <div class="cat-select-input-body" :class="`cat-select-input-body--${size}`">
            <cc-row 
                align="center" 
                justify="center" 
                v-if="icon" 
                class="cat-select--tip-icon">
                <i class="iconfont" 
                    :class="[icon, `cat-select-icon-i--${size}`, `cat-select-icon-i--${theme}`]">
                </i>
            </cc-row>
            <input class="cat-select-input-main" 
                @keyup.stop
                @keydown.stop
                :value="label ? label : value" 
                readonly
                :placeholder="placeholder"
                :style="{'padding-left': icon ? `${13 + sizeObj[size]}px` : '10px'}"
                :class="[visible === false ? 'cat-select-input-border--default':
                    'cat-select-input-border--active', `cat-select-input-font-size--${size}`, 
                    theme ? `cat-select--${theme}` : '']"/>
            <cc-row justify="center" 
                align="center"
                class="cat-select-input-icon"
                :class="[`cat-select-input-icon--${size}`, `cat-select--${theme}`]">
                <i class="iconfont_calico icon_calico-take-up cat-select-icon-dropdown"  
                    :class="[visible === false ? '':'cat-select-icon-resever',
                        `cat-select-icon-i--${size}`, `cat-select-icon-i--${theme}`]">
                </i>    
            </cc-row>
        </div>
        <transition name="drop-down">
            <div class="cat-select-dropdown" v-show="visible">
                <cc-row justify="space-around"
                    align="center"
                    wrap="wrap"
                    class="cat-select-wrap">
                    <slot></slot>
                </cc-row>
            </div>
        </transition>
    </div>
</template>
<style lang="scss">
    .cat-select {
        width: $--select-width;
        display: inline-block;
        position: relative;
        // .cat-select-title {
        //     font-size: $--select-font-size-small;
        //     color: $--select-color; 
        //     margin-bottom: 10px;
        //     display: flex;
        //     align-items: center;
        // }
        .cat-select-input-body {
            position: relative;
            width: 100%;
            cursor: pointer;
            .cat-select--tip-icon {
                position: absolute;
                height: calc(100% - 2px);
                left: 10px;
                top: 1px;
                text-align: center;
            }
            .cat-select--dark {
                background-color: $--select-fill-dark;
                color: $--select-color-dark;
            }
            .cat-select--light {
                background-color: $--select-fill-light;
                color: $--select-color-light;
            }
            .cat-select-input-main {
                border-radius: $--select-option-radius; 
                display: inline-block;
                height: 100%;
                line-height: 100%;
                outline: none;
                padding: 0 10px;
                transition: border-color $--transition-base;
                width: 100%;
                cursor: pointer;
            }
            .cat-select-icon-i--small {
                font-size: $--select-font-size-small;
            }
            .cat-select-icon-i--normal {
                font-size: $--select-font-size-normal;
            }
            .cat-select-icon-i--large {
                font-size: $--select-font-size-large;
            }
            .cat-select-icon-i--light {
                color: $--select-title-color;
            }
            .cat-select-icon-i--dark {
                color: $--select-color-dark;
            }
            .cat-select-input-icon {
                position: absolute;
                height: calc(100% - 2px);
                right: 2px;
                top: 1px;
                text-align: center;
                transition: $--transition-base;
                pointer-events: none;
                i {
                    transition: transform .3s;
                    transform: rotate(0deg);
                    cursor: pointer;
                }
                .cat-select-icon-resever {
                    transform: rotate(180deg);
                }
            }
            .cat-select-input-icon--small {
                padding: 0 5px;
            }
            .cat-select-input-icon--normal {
                padding: 0 5px;
            }
            .cat-select-input-icon--large {
                padding: 0 8px;
            }
            .cat-select-input-border--default {
                border: 1px solid $--select-border-color;
                &:hover {
                    border: 1px solid $--select-border-color-hover;
                }
            }
            .cat-select-input-border--active {
                border: 1px solid $--select-border-color-active;
            }
        }
        .cat-select-input-body--small {
            height: $--select-height-small; 
        }
        .cat-select-input-body--normal {
            height: $--select-height-normal; 
        }
        .cat-select-input-body--large {
            height: $--select-height-large; 
        }
        .cat-select-input-font-size--small {
            font-size: $--select-font-size-small;
        }
        .cat-select-input-font-size--normal {
            font-size: $--input-font-size-normal;
        }
        .cat-select-input-font-size--large {
            font-size: $--select-font-size-large;
        }
        .cat-select-dropdown {
            position: absolute;  
            top: calc(100% + 5px);
            left: 0;
            transition: all .2s ease-in;
            min-width: 100%;
            z-index:  $--select-z-index;
            .cat-select-wrap {
                min-width: 100%;  
                background: $--color-white;    
                border: 1px solid $--select-option-border-color; 
                border-radius: $--select-option-radius; 
            }
        }
    }
</style>
<script>
    import {ccModel, getModel} from '@mixins/parentModel';
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcSelect',
        componentName: 'CcSelect',
        mixins: [ccModel(Number | String)],
        components: {
            ccRow
        },
        props: {
            width: {
                type: Number | String,
                default: 80
            },
            placeholder: {
                type: String,
                default: ''
            },
            //small,  normal , large
            size: {
                type: String,
                default: 'small',
            },
            theme: {
                type: String,
                default: 'light'
            },
            icon: {
                type: String,
                default: '',
            }     
        },
        data() {
            return {
                visible: false,
                label: '',
                optionChange: false,
                sizeObj: {
                    small: 12,
                    normal: 12,
                    large: 16
                },
            }
        },
        computed: {
            value() {
                return getModel.call(this);
            },
        },
        watch: {
            value(val, old) {
                // console.log('生活终于对我下手了');
                this.label = this.getLabel();
            },
            //当点击选项时，选项发生变化触发。而不是select的v-model发生改变时触发
            optionChange(val, old) {
                if (val) {
                    this.$emit('change-option');
                    this.optionChange = false;
                }
            }
        },
        methods: {
            selectClick() {
                this.visible = !this.visible;
            },
            handleClose() {
                this.visible = false;
            },
            getLabel() {
                let labelList = [];
                let label = '';
                if (this.$slots && this.$slots.default && this.$slots.default.length) {
                    labelList = this.$slots.default.map(item => item.componentInstance ? item.componentInstance : '');
                    let label = labelList.find(i => i.value === getModel.call(this));
                    if (label) {
                        return label.label;
                    }
                    return label;
                } else {
                    return label;
                }
            }
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            this.label = this.getLabel();
        }
    }
</script>