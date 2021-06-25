<template>
  
    <div id="box" style="width: 100%;height:100%;"></div>
</template>
<script>
export default {
 mounted() {
    this.createEchart()
  },
  methods: {
     async createEchart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = await this.$echarts.init(document.getElementById('box'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '1-4月书籍借阅种类分析',
        },
        tooltip: {},
        xAxis: {
          data: ['文学', '历史', '政治', '科技', '社会', '艺术'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      })
    },
  },
}
</script>
