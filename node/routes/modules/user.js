var common =require('../common/common')
module.exports = {
    login:function(req,res,next){
        const result={
            code:0,
            msg:'究极成功！',
            data:req.body
        }
        common.jsonWrite(res,result)
    },
    sign:function(req,res,next){
        console.log(req,res,next)
    }
}