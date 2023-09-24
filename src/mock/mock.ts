import Mock from 'mockjs'
// //@ts-ignore
// import { mockFetch } from './fetchHandler'
//
// mockFetch(Mock)

export default Mock.mock('/mine/test',{
  code: 200,
  data: {
    id: '7mu_12'
  }
})
