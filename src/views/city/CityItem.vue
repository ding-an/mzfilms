<template>
    <div class="cityItem">
        {{cityName}}
    </div>
</template>

<script>
export default {
    name: 'CityItem',
    props: {
        cityName: {
            type: String,
            default () {
                return '定位失败'
            }
        }
    }
}
</script>

<style scoped>
    .cityItem {
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin: 0 7.5px 15px 7.5px;
        background-color: #f4f4f4;
    }
</style>