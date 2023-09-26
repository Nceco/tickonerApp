import moment from "moment";

//获取两个时间之间存在的自然月度
export const getNaturalMonth = (start: number | string, end: number | string, format: string = 'YYYY-MM-DD HH:mm:ss') => {
  //开始时间 精确到时分秒
  const startDate = moment(start).format(format)

  //开始时间月份的最后一天 精确到时分秒
  const startDate_end = moment(start).endOf('month').format(format)

  //结束时间 精确到时分秒
  const endDate = moment(end).format(format)

  const months = []

  //处理起始日期为某月的1号
  if (moment(startDate).isSame(moment(startDate).startOf('month')) && (moment(startDate_end).isSameOrBefore(moment(endDate)))) {
    months.push({
      start: startDate,
      end: moment(startDate).endOf('month').format(format)
    })
  }

  //开始时间月份的后一个月的最后一天与结束时间对比
  let samed = moment(start).add(1, 'month').endOf('month')

  //（如果一样符合一个自然月，如果在结束时间之前也符合一个自然月,直到不符合为止）
  while (moment(samed.format(format)).isSameOrBefore(moment(endDate))) {
    months.push({
      start: samed.startOf('month').format(format),
      end: samed.endOf('month').format(format)
    })
    samed = samed.add(1, 'month').endOf('month')
  }

  return months
}

//获取两个时间之间存在的自然季度
export const getNaturalQuarter = (start: number | string, end: number | string, format: string = 'YYYY-MM-DD HH:mm:ss') => {
  let end_time = moment(end)

  //获取结束时间所在季度
  let end_quarter = moment(end).quarter()

  //获取结束时间所在季度的第一天的日期
  //考虑到跨年度需要加上end_time.format('YYYY')
  //end_quarter_start是个moment对象 下面不能直接操作这个变量
  let end_quarter_start = moment(end_time.format('YYYY')).quarter(end_quarter)

  const quarter = []

  //获取结束时间所在季度起始日期的前一天
  let end_quarter_pre_date = moment(end_time.format('YYYY')).quarter(end_quarter).add(-1, 'month').endOf('month')

  while (moment(start).isSameOrBefore(moment(end_quarter_start))) {
    //将一个季度的时间段存入数组 最后筛选出符合一个自然季度的时间段 例如 2023-01-01 00:00:00 - 2023-03-31 23:59:59
    quarter.push({
      start: end_quarter_start.format(format),
      end: end_time.format(format)
    })
    // 重新设置结束时间
    end_time = end_quarter_pre_date
    //获取最新的结束时间的季度
    end_quarter = moment(end_quarter_pre_date).quarter()
    end_quarter_start = moment(end_time.format('YYYY')).quarter(end_quarter)
    end_quarter_pre_date = moment(end_time.format('YYYY')).quarter(end_quarter).add(-1, 'month').endOf('month')
  }

  return quarter.filter(item => {
    return moment(moment(item.start).add(2, 'month').endOf('month').format(format)).isSame(moment(item.end).format(format))
  })

}

//获取两个时间之间存在的自然半年度
export const getNaturalHalfYear = (start: number | string, end: number | string, format: string = 'YYYY-MM-DD HH:mm:ss') => {
  let start_time = moment(start)
  //获取开始时间所在年度的最后一天
  let start_year_last_date = moment(moment(start_time).format('YYYY-12')).endOf('month')
  //获取开始时间所在年度的半年度的最后一天
  let start_half_year_date = moment(moment(start_time).format('YYYY-6')).endOf('month')

  let half_year = []

  while (moment((moment(start_time).add('5','month').endOf('month').format(format))).isSameOrBefore(moment(end).format(format))){
    half_year.push({
      start:moment(start_time).format(format),
      end:moment(start_time).add('5','month').endOf('month').format(format)
    })
    if(moment(start_time).isSameOrBefore(start_half_year_date)){
      //前半年
      start_time = start_half_year_date.add('1','month').startOf('month')
    }else {
      //后半年
      start_time = start_year_last_date.add('1','month').startOf('month')
    }
    start_year_last_date = moment(moment(start_time).format('YYYY-12')).endOf('month')
    start_half_year_date = moment(moment(start_time).format('YYYY-6')).endOf('month')
  }

  return half_year.filter(item => {
    //满足的起始时间
    const start_1 = moment(moment(item.start).format('YYYY-1')).startOf('month').format(format)
    const start_2 = moment(moment(item.start).format('YYYY-7')).startOf('month').format(format)
    //满足的截止时间
    const end_1 = moment(moment(item.start).format('YYYY-6')).endOf('month').format(format)
    const end_2 = moment(moment(item.start).format('YYYY-12')).endOf('month').format(format)
    return (moment(moment(item.start).format(format)).isSame(start_1) || moment(moment(item.start).format(format)).isSame(start_2)) && (moment(moment(item.end).format(format)).isSame(end_1) || moment(moment(item.end).format(format)).isSame(end_2))
  })

}

//获取两个时间之间存在的自然年度
export const getNaturalYear = (start: number | string, end: number | string, format: string = 'YYYY-MM-DD HH:mm:ss') => {
  let start_time = moment(start)
  //获取开始时间所在年度的最后一天
  let start_year_last_date = moment(moment(start_time).format('YYYY-12')).endOf('month')

  let year = []

  while (moment((moment(start_time).add('11','month').endOf('month').format(format))).isSameOrBefore(moment(end).format(format))){
    year.push({
      start:moment(start_time).format(format),
      end:moment(start_time).add('11','month').endOf('month').format(format)
    })
    start_time = start_year_last_date.add('1','month').startOf('month')
    start_year_last_date = moment(moment(start_time).format('YYYY-12')).endOf('month')
  }

  return year.filter(item => {
    //满足的起始时间
    const start_1 = moment(moment(item.start).format('YYYY-1')).startOf('month').format(format)
    //满足的截止时间
    const end_1 = moment(moment(item.start).format('YYYY-12')).endOf('month').format(format)
    return moment(moment(item.start).format(format)).isSame(start_1) && moment(moment(item.end).format(format)).isSame(end_1)
  })
}
