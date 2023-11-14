import Mock from 'mockjs'
import {UUID6} from "@/utils/Utils";
import {DEFAULT_LIMIT_PARAMS} from "@/components/GridLayout/Constant";

Mock.mock('/mine/test', {
  code: 200,
  data: {
    id: '7mu_12'
  }
})

Mock.mock('/grid/layout/panel.json', {
  code: 200,
  list: [
    {
      key: UUID6(),
      layouts: {x: 0, y: 0, w: 6, h: 8, ...DEFAULT_LIMIT_PARAMS},
      cardProps: {
        title: 'bar'
      },
      echartOptions: {
        xAxis: {
          type: 'category',
          data: ['AD', '上单', '辅助', '中单', '打野', '教练', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      },
      valueType: 'bar',
      transformFunc: "var options;\n" +
        "options = {\n" +
        "   xAxis: {\n" +
        "     type: 'category',\n" +
        "     data: ['AD', '上单', '辅助', '中单', '打野', '教练', 'Sun']\n" +
        "   },\n" +
        "   yAxis: {\n" +
        "     type: 'value'\n" +
        "   },\n" +
        "   series: [\n" +
        "     {\n" +
        "       data: [120, 200, 150, 80, 70, 110, 130],\n" +
        "       type: 'bar'\n" +
        "     }\n" +
        "   ]\n" +
        " }\n" +
        " return options;"
    },
    {
      key: UUID6(),
      layouts: {x: 6, y: 0, w: 6, h: 8, ...DEFAULT_LIMIT_PARAMS},
      cardProps: {
        title: 'line'
      },
      echartOptions: {
        xAxis: {
          type: 'category',
          data: ['AD', '上单', '辅助', '中单', '打野', '教练', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      },
      valueType: 'line',
      transformFunc: "var options;\noptions = {\n  xAxis: {\n   type: 'category',\n   data: ['AD', '上单', '辅助', '中单', '打野', '教练', 'Sun']\n  },\n  yAxis: {\n  type: 'value'\n  },\n  series: [\n  {\n   data: [150, 230, 224, 218, 135, 147, 260],\n   type: 'line'\n  }\n  ]\n}\nreturn options;"
    },
    {
      key: UUID6(),
      layouts: {x: 0, y: 6, w: 6, h: 8, ...DEFAULT_LIMIT_PARAMS},
      cardProps: {
        title: 'pie'
      },
      echartOptions: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'LOL',
            type: 'pie',
            radius: '50%',
            data: [
              {value: 1048, name: 'AD'},
              {value: 735, name: '上单'},
              {value: 580, name: '辅助'},
              {value: 484, name: '中单'},
              {value: 300, name: '打野'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      valueType: 'line',
      transformFunc: "var options;\noptions = {\n  tooltip: {\n  trigger: 'item'\n  },\n" +
        "  legend: {\n" +
        "    orient: 'vertical',\n" +
        "    left: 'left'\n" +
        "  },\n" +
        "  series: [\n" +
        "    {\n" +
        "      name: 'LOL',\n" +
        "      type: 'pie',\n" +
        "      radius: '50%',\n" +
        "      data: [\n" +
        "        {value: 1048, name: 'AD'},\n" +
        "        {value: 735, name: '上单'},\n" +
        "        {value: 580, name: '辅助'},\n" +
        "        {value: 484, name: '中单'},\n" +
        "        {value: 300, name: '打野'}\n" +
        "      ],\n" +
        "      emphasis: {\n" +
        "        itemStyle: {\n" +
        "          shadowBlur: 10,\n" +
        "          shadowOffsetX: 0,\n" +
        "          shadowColor: 'rgba(0, 0, 0, 0.5)'\n" +
        "        }\n" +
        "      }\n" +
        "    }\n" +
        "  ]\n" +
        "}\n" +
        "return options;"
    }
  ]
})
