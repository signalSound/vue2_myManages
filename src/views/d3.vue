<template>
    <div class="home-container">
      <div class="circle-bg"></div>
      <!--    <div class="voice-icon">-->
      <!--      <svg-icon icon-class="voice"></svg-icon>-->
      <!--    </div>-->
      <!-- <div class="voice-talk">
        {{ talk }}
      </div> -->
      <svg width="1920" height="1000" class="container-border"></svg>
      <transition name="fade">
        <div class="nav-mask" v-if="maskShow" @click="closeMsg">
          <div class="nav-content">
            <div class="nav-point" :style="`background:${pointState.pointBg}`">
              <span><i :class="`fa ${pointState.pointIcon}`"></i></span>
              <div class="name">{{ pointState.pointName }}</div>
            </div>
            <div class="nav-address">
              <el-button class="nav-btn" @click.prevent="go()">前往{{ pointState.pointName }}</el-button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </template>
<script>
import * as d3 from "d3";

export default {
  name: "HomeIndex",
  data() {
    return {
    //   talk: '您可以问我：“小新，小新休息室在哪儿啊？”',
      maskShow: false,
      minWidth: '',
      widthList: [],
      nodes: [
        {name: '1湖南邵阳', value: 1, icon: 'icon-bangongshi'},
        {name: '2山东泰安', value: 2, icon: 'icon-bangongshi'},
        {name: '3广东阳江', value: 3, icon: 'icon-kafei'},
        {name: '4山西太原', value: 4, icon: 'icon-kafei'},
        {name: '5吉安市博物馆一层', value: 5, icon: 'icon-kafei'},
        {name: '6丽', value: 6, icon: 'icon-kafei'},
        {name: '7雪', value: 7, icon: 'icon-kafei'},
        {name: '8小明', value: 8, icon: 'icon-kafei'},
      ],
      pointState: {
        pointBg: '',
        pointName: '',
        pointIcon: ''
      }

    }
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.forceChart()
    })
  },
  methods: {
    forceChart() {
      let that = this
      let marge = {top: -100, bottom: 60, left: -60, right: 60}
      let svg = d3.select("body").select('.home-container').select("svg").attr("preserveAspectRatio", "xMidYMid meet").attr("viewBox", "0 0 1920 1000")

      let width = svg.attr('width')
      let height = svg.attr('height')
      let g = svg.append('g')
          .attr('transform', 'translate(' + marge.left + ',' + marge.top + ')')

      // Set a color scale
      // 设置一个颜色比例尺
      let colorScale = ['#4104C8', '#FF505D', '#FF8A00', '#55C243', '#3948FF', '#F3C41E', '#2985CC', '#4104C8', '#FF505D', '#FF8A00', '#55C243', '#3948FF', '#F3C41E', '#2985CC', '#4104C8', '#FF505D', '#FF8A00', '#55C243', '#3948FF', '#F3C41E', '#2985CC', '#4104C8', '#FF505D', '#FF8A00', '#55C243', '#3948FF', '#F3C41E', '#2985CC', '#4104C8', '#FF505D', '#FF8A00', '#55C243', '#3948FF', '#F3C41E', '#2985CC', '#4104C8', '#FF505D', '#FF8A00', '#55C243', '#3948FF', '#F3C41E', '#2985CC']

      // Create a new force guide diagram
      // 新建一个力导向图
      let forceSimulation = d3.forceSimulation()

          .force('charge', d3.forceManyBody())
          .force('center', d3.forceCenter())
          .force('collide', d3.forceCollide().radius(70).iterations(2))

      // Generate node data
      // 生成节点数据
      forceSimulation.nodes(that.nodes)
          .on('tick', ticked)
      // Set drawing center location
      // 设置图形中心位置
      forceSimulation.force('center')
          .x(width / 2)
          .y(height / 2)

      // Create group
      // 创建分组
      let gs = g.selectAll('.circleText')
          .data(that.nodes)
          .enter()
          .append('g')
          .attr('transform', function (d) {
            let cirX = d.x
            let cirY = d.y
            return 'translate(' + cirX + ',' + cirY + ')'
          })
          .call(d3.drag()
              .on('start', started)
              .on('drag', dragged)
              .on('end', ended)
          )
      // Draw node
      // 绘制节点
      gs.append('circle')
          .attr('r', function (d) {
            let ss = 120
            if (d.value < 3) {
              ss = 130 - d.value * 8
            } else if (d.value >= 3 < 10) {
              ss = 130 - d.value * 8
            } else {
              ss = 130 - d.value * 6
            }
            return ss
          })
          .attr('fill', function (d, i) {
            return colorScale[i]
          })
      d3.selectAll('circle').each(function (d, i) {
        that.widthList.push(d3.select(this).attr('r') * 2)
      })
      gs.append('svg:foreignObject')
          .attr('width', 40)
          .attr('height', 40)
          .attr('x', -17)
          .attr('y', -36)
          .style('font-size', '30px')
          .append('xhtml:body')
          .append('i')
          .attr('class', function (d) {
            return `iconfont ${d.icon}`
          })
          .style('font-size', '40px')
          .style('color', '#fff')
          .style('text-anchor', 'middle')
          .style('text-align', 'center')

      // Draw text
      // 绘制文字
      gs.append('text')
          .attr('y', 30)
          .style('text-anchor', 'middle')
          .style('fill', '#fff')
          .style('font-size', '20px')
          .text(function (d) {
            let valueTxt = ''
            let num = Math.min(...that.widthList) / 22
            if (d.name.length > num) {
              valueTxt = d.name.substring(0, num) + '...'
            } else {
              valueTxt = d.name
            }
            return valueTxt
          })

      // ticked
      function ticked() {
        gs
            .attr('transform', function (d) {
              return 'translate(' + d.x + ',' + d.y + ')'
            })
      }

      // drag
      function started(d) {
        if (!d.event.active) {
          forceSimulation.alphaTarget(0.2).restart() // Set the attenuation coefficient to simulate the node position movement process. The higher the value, the faster the movement. The value range is [0, 1] // 设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0, 1]
        }
        d.fx = d.x
        d.fy = d.y
      }

      function dragged(d) {
        d.fx = d.event.x
        d.fy = d.event.y
      }

      function ended(d) {
        if (!d.event.active) {
          forceSimulation.alphaTarget(0)
        }
        d.fx = null
        d.fy = null
      }

      // click事件：
      d3.selectAll('g').on("click", function (d) {
        let event = d.event
        debugger
        event.stopPropagation();//阻止事件冒泡
        event.preventDefault();  //阻止默认行为
        for (let i = 0; i < that.nodes.length; i++) {
          if (that.nodes[i].name === d.name) {
            that.pointState.pointBg = colorScale[i]
            that.pointState.pointName = that.nodes[i].name
            that.pointState.pointIcon = that.nodes[i].icon
          }
        }
        that.maskShow = true
        console.log(d.name)
      }, false);
    },
    // 关闭弹层
    handleClose() {
      this.maskShow = false;
    },
    closeMsg(event) {
      let btn = document.querySelector(".nav-content");
      if (btn) {
        if (!btn.contains(event.target)) {
          this.maskShow = !this.maskShow;
        }
      }
    },
    // 前往任务地点
    go() {
      console.log(11)
      this.$router.push({
        path: "/Leading"
      })
    }
  }
}
</script>