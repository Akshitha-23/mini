const router = require('express').Router();
let Sem1 = require('../models/sem1.model');

router.route('/').get((req,res)=>
{
    Sem1.find()
            .then(sem1 => res.json(sem1))
            .catch(err=> res.status(400).json('Error : '+ err));
});

router.route('/:roll').get((req,res) =>
{
    Sem1.findOne({rollnumber : req.params.roll})
        .then(sem1=>res.json(sem1))
        .catch(err => res.status(400).json('Error : '+err))
})

router.route('/add').post((req,res) =>
{
    const roll = req.body.rollnumber;
    const cprog = req.body.Cprogramming;
    const M1 = req.body.M1;
    const Phy = req.body.Physics;
    const Ed = req.body.EngineeringDrawing;
    const Eng = req.body.English;
    
    const newData = new Sem1({
        rollnumber : roll,
        Cprogramming : cprog,
        M1 : M1,
        Physics: Phy,
        EngineeringDrawing : Ed,
        English :Eng
    });

    newData.save()
              .then(() => res.json("Sem1 marks added!"))
              .catch((err) => res.status(400).json('Error : '+ err));

})

router.route('/delete/:roll').delete((req,res)=>
{
    Sem1.findOneAndDelete({rollnumber:req.params.roll})
    .then(()=> res.json("Sem1 details deleted"))
    .catch(err=> res.status(400).json('Eroor : '+err))
})


router.route('/update/:roll').put((req,res)=>
{
    Sem1.findOne({rollnumber:req.params.roll})
    .then(student => {
        student.rollnumber = req.body.rollnumber;
        student.Cprogramming = Number(req.body.Cprogramming);
        student.M1 = Number(req.body.M1);
        student.Physics = Number(req.body.Physics);
        student.EngineeringDrawing = Number(req.body.EngineeringDrawing);
        student.English = Number(req.body.English);
        
  
        student.save()
          .then(() => res.json('Sem1 details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
    .catch(err=> res.status(400).json('Eroor : '+err))
})

module.exports = router;