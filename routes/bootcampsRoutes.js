const express = require('express')
const bootcampModel = require('../models/bootcampModel')
const router = express.Router()


router.get('/',async function(req,res){

    const bootcamps = await bootcampModel.find()
    res.json({
        success:true,
        data: bootcamps
    })
})

router.get('/:id', async (req,res) => {
    const bootcamp =  await bootcampModel.findById(req.params.id)
    res.json({
        success:true,
        data : bootcamp 
    })
})


router.put ('/:id',function (req,res){
    res.json({
        success:true,
        msg: `aqui se editara un bootcamp`
    })
})


router.post ('/', async  (req,res)=>{
    const newBootcamp = await  bootcampModel.create(req.body)
    res.json({
        success:true,
        data : newBootcamp 
    })
})


router.delete ('/:id', async(req,res)=>{
    const bootcampdelete = await  bootcampModel.findOneAndDelete(req.body)
    res.json({
        success:true,
        data : bootcampdelete 
        
    })
})

module.exports = router