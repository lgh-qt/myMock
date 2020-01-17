var express = require('express');
var router = express.Router();
var user = require('./modules/user');
var project = require('./modules/project');
var interface = require('./modules/interface')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// 用户部分  start
// 登录
router.post('/user/login', function(req, res, next) {
  user.login(req, res, next)
});
//注册
router.post('/user/sign', function(req, res, next) {
  user.sign(req, res, next)
});
// 用户部分 end

// 项目部分 start
// 增加
router.post('/project/add', function(req, res, next) {
  project.add(req, res, next)
});
// 删除
router.post('/project/del', function(req, res, next) {
  project.del(req, res, next)
});
// 更改
router.post('/project/update', function(req, res, next) {
  project.update(req, res, next)
});
// 查询
router.post('/project/search', function(req, res, next) {
  project.search(req, res, next)
});
// 项目部分 end

// 接口部分 start
// 增加
router.post('/interface/add', function(req, res, next) {
  interface.add(req, res, next)
});
// 删除
router.post('/interface/del', function(req, res, next) {
  interface.del(req, res, next)
});
// 更改
router.post('/interface/update', function(req, res, next) {
  interface.update(req, res, next)
});
// 查询详情
router.post('/interface/search', function(req, res, next) {
  interface.search(req, res, next)
});
// 查询列表
router.post('/interface/searchList', function(req, res, next) {
  interface.searchList(req, res, next)
});
// 接口部分 end

module.exports = router;
