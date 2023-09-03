const router = require('express').Router();
let Sem4 = require('../models/Sem4.model');

router.route('/').get((req,res)=>
{
    Sem4.find()
            .then(Sem4 => res.json(Sem4))
            .catch(err=> res.status(400).json('Error : '+ err));
});

router.route('/:roll').get((req,res) =>
{
    Sem4.findOne({rollnumber : req.params.roll})
        .then(Sem4=>res.json(Sem4))
        .catch(err => res.status(400).json('Error : '+err))
})

router.route('/add').post((req,res) =>
{
    const roll = req.body.rollnumber;
    const adsj = req.body.ADSJ;
    const dbms = req.body.DBMS;
    const camc = req.body.CAMC;
    const daa = req.body.DAA;
    const ann = req.body.ANN;
    
    const newData = new Sem4({
        rollnumber : roll,
        ADSJ : adsj,
        DBMS : dbms,
        CAMC: camc,
        DAA : daa,
        ANN :ann
    });

    newData.save()
              .then(() => res.json("Sem4 marks added!"))
              .catch((err) => res.status(400).json('Error : '+ err));

})

router.route('/delete/:roll').delete((req,res)=>
{
    Sem4.findOneAndDelete({rollnumber:req.params.roll})
    .then(()=> res.json("Sem4 details deleted"))
    .catch(err=> res.status(400).json('Eroor : '+err))
})


router.route('/update/:roll').put((req,res)=>
{
    Sem4.findOne({rollnumber:req.params.roll})
    .then(student => {
        student.rollnumber = req.body.rollnumber;
        student.ADSJ = Number(req.body.ADSJ);
        student.DBMS = Number(req.body.DBMS);
        student.CAMC = Number(req.body.CAMC);
        student.DAA = Number(req.body.DAA);
        student.ANN = Number(req.body.ANN);
        
  
        student.save()
          .then(() => res.json('Sem4 details updatdaa!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
    .catch(err=> res.status(400).json('Eroor : '+err))
})

router.route('/max/:sub').post((req, res) => {
    const subject = req.params.sub;
    const sortQuery = {};
    sortQuery[subject] = -1;
  
    Sem4.findOne({}, {}, { sort: sortQuery })
      .then(maxRow => {
        console.log('maxRow:', maxRow);
        if (maxRow && maxRow[subject] !== undefined) {
          res.json({ [subject]: maxRow[subject] });
        } else {
          res.status(404).json('No data found for subject: ' + subject);
        }
      })
      .catch(err => {
        console.error('Error:', err);
        res.status(500).json('Error: ' + err);
      });
  });
  
  router.route('/avg/:sub').post((req, res) => {
    const subject = req.params.sub;
  
    Sem4.find({})
      .then(data => {
        if (data.length === 0) {
          return res.status(404).json('No data found for subject: ' + subject);
        }
  
        let sum = 0;
        let count = 0;
  
        data.forEach(row => {
          if (row[subject] !== undefined) {
            sum += row[subject];
            count++;
          }
        });
  
        if (count === 0) {
          return res.status(404).json('No data found for subject: ' + subject);
        }
  
        const average = sum / count;
        res.json({ [subject]: average });
      })
      .catch(err => {
        console.error('Error:', err);
        res.status(500).json('Error: ' + err);
      });
  });

module.exports = router;