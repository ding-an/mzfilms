<template>
    <div class="filmItem">
        <img class="left" :src="film.poster" />
        <div class="mid">
            <div class="filmName">
                <span>{{film.name}}</span>
                <span>{{film.item.name}}</span>
            </div>
            <div class="filmGrade">
                <span>观众评分</span>
                <span>{{film.grade}}</span>
            </div>
            <div class="filmActor">
                <span>{{`主演: ${film.actors.map(actor => actor.name).join(' ')}`}}</span>
            </div>
            <div class="filmNation">
                <span>{{`${film.nation} | ${film.runtime}分钟`}}</span>
            </div>
        </div>
        <div v-show="isPlaying" class="right">
            <div>购票</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilmItem',
    props: {
        isPlaying: {
            type: Boolean,
            default () {
                return true
            }
        },
        film: {
            type: Object,
            default () {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .filmItem {
        height: 124px;
        padding: 15px;
        border-bottom: 1px solid rgba(200,200,200,.2);
        box-sizing: border-box;
        display: flex;
    }
    .left {
        width: 66px;
    }
    .mid {
        margin-left: 4px;
        flex: 1
    }
    .filmName {
        height: 22px;
        line-height: 22px;
        font-size: 16px;
        color: #191A1B;
    }
    .filmName span {
        margin-right: 4px;
    }
    .filmGrade {
        height: 21px;
        line-height: 21px;
        color: #797D82;
    }
    .filmActor span {
        height: 18px;
        line-height: 18px;
        text-overflow: ellipsis;
        color: #797D82;
    }
    .filmNation {
        height: 18px;
        line-height: 18px;
        color: #797D82;
    }
    .right {
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right div {
        width: 48px;
        height: 23px;
        color: red;
        border: 1px solid red;
        line-height: 23px;
        text-align: center;
    }
</style>