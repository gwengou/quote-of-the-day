const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))
// This line creates the endpoints. All static endpoints point to the public folder.

app.use(bodyParser.json())
//for parsing application/xwww-
app.use(bodyParser.urlencoded({
  extended: true
}));
// form-urlencoded



app.listen(3000, function() {
  console.log('Final Project app listening on port 3000')
});


app.get('/quotes/:month/:day', function(req, res) {
  var month = req.params.month;
  var day = req.params.day;
  // validating input:
  const month_regex = new RegExp("^([1-9]|1[0-2])$");
  const day_regex = new RegExp("^([1-9]|[1-2][0-9]|3[0-1])$");

  if (month_regex.test(month) && day_regex.test(day)) {
    if (month == 2 && day > 28) {
      res.send({
        "quoteText": "Invalid Date",
        "quoteAuthor": "This February has only 28 days"
      })
    } else if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
      res.send({
        "quoteText": "Invalid Date",
        "quoteAuthor": "This month has only 30 days"
      })
    } else {
      var filename = path.join(__dirname, "public/quotes/", month) + ".json";
      fs.readFile(filename, 'utf8', (err, month_file) => {
        var month_data = JSON.parse(month_file);
        res.json(month_data[day - 1]);
        //use [ ] to access json attributes by by index!
      });
    }
  } else {
    res.send({
      "quoteText": "Invalid Input",
      "quoteAuthor": "Please enter a valid date."
    })
  }
});
