//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    targets: [
      {
        "target_name": "目标1",
        "target_proof": "证据1",
        "target_start_time": "开始时间1",
        "target_end_time": "结束时间1",
        "target_success": "成功1",
        "target_failed": "失败1"
      }, {
        "target_name": "目标1",
        "target_proof": "证据1",
        "target_start_time": "开始时间1",
        "target_end_time": "结束时间1",
        "target_success": "成功1",
        "target_failed": "失败1"
      }, {
        "target_name": "目标1",
        "target_proof": "证据1",
        "target_start_time": "开始时间1",
        "target_end_time": "结束时间1",
        "target_success": "成功1",
        "target_failed": "失败1"
      }, {
        "target_name": "目标1",
        "target_proof": "证据1",
        "target_start_time": "开始时间1",
        "target_end_time": "结束时间1",
        "target_success": "成功1",
        "target_failed": "失败1"
      }, {
        "target_name": "目标1",
        "target_proof": "证据1",
        "target_start_time": "开始时间1",
        "target_end_time": "结束时间1",
        "target_success": "成功1",
        "target_failed": "失败1"
      }
    ]
  },
  load: function () {
    var targets = wx.getStorageSync('targets')
    this.setData({ targets: this.data.targets })
  },
  onLoad: function () {
    this.load()
  }
})

