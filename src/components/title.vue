
<template>
    <h2>
        <span><slot></slot></span>
        <em v-if="isRealTime" class="tag tag-realtime">realtime</em>
        <strong>{{ desc }}</strong>
        <b class="flr cur"><slot name="btn"></slot></b>
    </h2>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        isRealTime: {
            default: false
        },
        desc: {
            default: ''
        }
    }
})
</script>
<style scoped>
h2 {
    font-weight: 700;
    height: 30px;
    line-height: 30px;
    color: #222;
    border-bottom: 1px solid #EFEFF5;
    font-size: 16px;
    margin: 12px 0 15px;
}

h2 span {
    border-bottom: 1px solid #000;
    display: inline-block;
    height: 30px;
    line-height: 30px;
}

h2 strong {
    font-size: 12px;
    color: #777;
    padding-left: 10px;
    font-weight: 400;
}

h2:first-child {
    margin-top: 0;
}

.tag {
    display: inline-block;
    padding: 1px 7px 3px 7px;
    font-size: 16px;
    line-height: normal;
    font-style: normal;
    font-family: tahoma,sans-serif;
    transform: scale(0.625);
    margin: 0 0 0 -8px;
}

.tag-realtime {
    background: #ea5455;
    color: #fff;
}
</style>
