<template>
    <div class="listStyle">
        <img :src="imgUrl" class="left" />
        <div class="center">{{text}}</div>
        <img src="@/assets/img/forward.png" class="right" />
    </div>
</template>

<script>
export default {
    name: 'List',
    props: {
        imgUrl: {
            default () {
                return ''
            }
        },
        text: {
            type: String,
            default () {
                return ''
            }
        }
    }
}
</script>

<style scoped>
    .listStyle {
        height: 49px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(222, 222, 222, .3);
        background-color: #fff;
    }
    .left {
        width: 20px;
        height: 20px;
        margin-left: 20px;
    }
    .center {
        margin-left: 15px;
        font-size: 15px;
        flex: 1;
    }
    .right {
        width: 6px;
        height: 10px;
        margin-right: 10px;
    }
</style>