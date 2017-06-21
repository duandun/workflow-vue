<template lang="html">
  <div class="d3-container">

  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
    data() {
        return {
            svg: null,
            inner: null
        }
    },
    created() {
    },
    mounted() {
        const margin = {top: 20, right: 20, bottom: 30, left: 40};
        const width = 960 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        this.svg = d3.select('.d3-container').append('svg')
                    .attr('width', 960)
                    .attr('height', 500);
        this.inner = this.svg.append('g')
                    .attr('transform', `translate(${margin.left}, ${margin.top})`);
        let g = this.inner;
        let datasetV = [10, 20, 30, 40, 33, 24];
        let datasetN = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'];

        let xScale = d3.scaleBand().rangeRound([0, width]).padding(0.1);
        let yScale = d3.scaleLinear()
                .rangeRound([height, 0]);

        xScale.domain(datasetN);
        yScale.domain([0, d3.max(datasetV)]);

        //定义x轴
        g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale));
        //定义y轴
        g.append('g')
            .attr('class', 'axis axis-y')
            .call(d3.axisLeft(yScale))
            .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end');

        g.selectAll('.bar')
            .data(datasetV)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', (d, i) => xScale(datasetN[i]))
            .attr('y', (d, i) => yScale(d))
            .attr('width', xScale.bandwidth())
            .attr('height', (d) => {
                return height - yScale(d);
            });
    },
    methods: {

    }
}
</script>

<style lang="sass">
    .bar {
      fill: steelblue;
    }

    .bar:hover {
      fill: brown;
    }

    .axis--x path {
      display: none;
    }
    .d3-container {
        width: 80%;
        height: 80%;
        margin: 10px auto;
    }
</style>
