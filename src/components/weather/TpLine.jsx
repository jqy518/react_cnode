import React,{ Component } from 'react'
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/dataZoom');
require('echarts/lib/component/grid');
require('echarts/lib/component/markLine');
class TpLine extends Component {
  constructor(props){
    super(props)
    this.setLineOption = this.setLineOption.bind(this)
    this.initLine = this.initLine.bind(this)
  }
  componentDidMount() {
      this.initLine();
  }
  initLine(){
    const { data } = this.props //外部传入的data数据
    this.refs.lineChart.style.width = this.refs.lineChart.offsetWidth+"px";
    let myChart = echarts.init(this.refs.lineChart) //初始化echarts

    //我们要定义一个setPieOption函数将data传入option里面
    let options = this.setLineOption(data)
    //设置options
    myChart.setOption(options)
  }
  render(){
    return (
      <div ref='lineChart' className='line-chart'></div>
    );
  }
  setLineOption(_data){
      return {
        title: {
            left:'center',
            text: '24H气温',
            textStyle:{
              color:'#fff',
              fontSize:'14',
              fontWeight:'lighter'
            },
            padding:[20,0,0,0]
        },
        tooltip: {
            trigger: 'axis'
        },
        grid:{
          left:0,
          right:0 
        },
        backgroundColor:'rgba(255, 255, 255, .1)',
        color:['#61a0a8'],
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00',]
        },
        yAxis: {
            type: 'value',
            show:false,
            axisLabel: {
                formatter: '{value} °C'
            },
            min:'dataMin'
        },
        dataZoom: [
          
            {
                type: 'inside',
                realtime: true,
                start: 0,
                end: 50
            }
        ],
        series: [
            {
                name:'最高气温',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10,13, 10,13, 10],
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: '{c} °C'
                    }
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
  
  }
}

export default TpLine;