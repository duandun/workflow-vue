<template lang="html">
    <div class="echarts-container" id="test-echarts">

    </div>
</template>

<script>
import echarts from 'echarts';

export default {
    data() {
        return {

        }
    },
    mounted() {
        let myChart = echarts.init(document.querySelector('#test-echarts'));
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
}
</script>

<style lang="sass">
    .echarts-container {
        width: 100%;
        height: 100%;
    }
</style>
