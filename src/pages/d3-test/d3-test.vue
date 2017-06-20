<template lang="html">
  <div class="d3-container">

  </div>
</template>

<script>
import * as d3 from 'd3';
import * as Mock from './mock-data.tsv';

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
                    .attr('width', width)
                    .attr('height', height);
        this.inner = this.svg.append('g')
                    .attr('transform', `translate(${margin.left}, ${margin.top})`);
        let x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
        let y = d3.scaleLinear().rangeRound([height, 0]);
        d3.tsv(Mock, (d) => {
            d.frequency = +d.frequency;
            return d;
        }, (error, data) => {
          if (error) throw error;
          let g = this.inner;
          x.domain(data.map(function(d) { return d.letter; }));
          y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

          g.append("g")
              .attr("class", "axis axis--x")
              .attr("transform", "translate(0," + height + ")")
              .call(d3.axisBottom(x));

          g.append("g")
              .attr("class", "axis axis--y")
              .call(d3.axisLeft(y).ticks(10, "%"))
            .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", "0.71em")
              .attr("text-anchor", "end")
              .text("Frequency");

          g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.letter); })
              .attr("y", function(d) { return y(d.frequency); })
              .attr("width", x.bandwidth())
              .attr("height", function(d) { return height - y(d.frequency); });
        });
    },
    methods: {

    }
}
</script>

<style lang="sass">
</style>
