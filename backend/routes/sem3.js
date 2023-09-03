const router = require('express').Router();
let Sem3 = require('../models/Sem3.model');

router.route('/').get((req,res)=>
{
    Sem3.find()
            .then(Sem3 => res.json(Sem3))
            .catch(err=> res.status(400).json('Error : '+ err));
});

router.route('/:roll').get((req,res) =>
{
    Sem3.findOne({rollnumber : req.params.roll})
        .then(Sem3=>res.json(Sem3))
        .catch(err => res.status(400).json('Error : '+err))
})

router.route('/add').post((req,res) =>
{
    const roll = req.body.rollnumber;
    const oop = req.body.OOP;
    const OS = req.body.OS;
    const msf = req.body.MSF;
    const dsgt = req.body.DSGT;
    const dlco = req.body.DLCO;
    
    const newData = new Sem3({
        rollnumber : roll,
        OOP : oop,
        OS : OS,
        MSF: msf,
        DSGT : dsgt,
        DLCO :dlco
    });

    newData.save()
              .then(() => res.json("Sem3 marks addded!"))
              .catch((err) => res.status(400).json('Error : '+ err));

})

router.route('/delete/:roll').delete((req,res)=>
{
    Sem3.findOneAndDelete({rollnumber:req.params.roll})
    .then(()=> res.json("Sem3 details deleted"))
    .catch(err=> res.status(400).json('Eroor : '+err))
})


router.route('/update/:roll').put((req,res)=>
{
    Sem3.findOne({rollnumber:req.params.roll})
    .then(student => {
        student.rollnumber = req.body.rollnumber;
        student.OOP = Number(req.body.OOP);
        student.OS = Number(req.body.OS);
        student.MSF = Number(req.body.MSF);
        student.DSGT = Number(req.body.DSGT);
        student.DLCO = Number(req.body.DLCO);
        
  
        student.save()
          .then(() => res.json('Sem3 details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
    .catch(err=> res.status(400).json('Eroor : '+err))
})

router.route('/max/:sub').post((req, res) => {
    const subject = req.params.sub;
    const sortQuery = {};
    sortQuery[subject] = -1;
  
    Sem3.findOne({}, {}, { sort: sortQuery })
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
  
    Sem3.find({})
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