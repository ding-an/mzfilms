<template>
    <div class="search">
        <div class="searchWrap">
            <span class="iconfont">&#xe61c;</span>
            <input 
                class="searchInput" 
                type="text" 
                :placeholder="placeHolder"
                @focus="changeIsInput"
                @input="getInputValue"/>
        </div>
        <div class="cancel" v-show="isShow" @click="cancelInput">
            取消
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search',
    props: {
        isShow: {
            type: Boolean,
            default () {
                return false
            }
        },
        placeHolder: {
            type: String,
            default () {
                return ''
            }
        }
    },
    methods: {
        changeIsInput () {
            this.$emit('changeIsInput');
        },
        getInputValue (e) {
            this.$emit('getInputValue',e.target.value);
        },
        cancelInput () {
            this.$emit('cancelInput');
        }
    }
}
</script>

<style scoped>
    .search {
        display: flex;
        padding: 9.5px 15px;
        background-color: #f4f4f4;
    }
    .searchWrap {
        flex: 1;
        height: 30px;
        line-height: 30px;
        background-color: #fff;
    }
    .searchImg {
        margin-right: 10px;
    }
    .searchInput {
        padding-left: 20px;
        border: none;   
        outline: none; /* 聚焦边框 */
    }
    .cancel {
        line-height: 30px;
        text-align: center;
        width: 43px
    }
</style>