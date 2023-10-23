// These are the parameters for the path to the website
const express = require('express')
const app = express()
const port = 3000
const path = require('path');
// bodyParser is used for the post method working
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// These get methods display information of the local host url it corosponds with so this one is for the home page 



app.get('/', (req, res) => {
  res.send('Good Morning World!')
})
// this one is for the whatever page
app.get('/whatever', (req, res) => {
    res.send('Good Night World!')
  })
//This one will take whatever value is enteted after wahtever in the search bar and treat it as a Name which will then get pulled using req.params.name to display it
  app.get('/whatever/:name', (req, res) => {
    res.send('Hello ' +req.params.name )
  })
//This one will display a set of data which will be displayed using a res.json method
  app.get('/api/books', (req, res) => {
    //
    const data =[     
        {
            "books":[
               {
                  "title":"Learn Git in a Month of Lunches",
                  "isbn":"1617292419",
                  "pageCount":0,
                  "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
                  "status":"MEAP",
                  "authors":[
                     "Rick Umali"
                  ],
                  "categories":[
                     
                  ]
               },
               {
                  "title":"MongoDB in Action, Second Edition",
                  "isbn":"1617291609",
                  "pageCount":0,
                  "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
                  "status":"MEAP",
                  "authors":[
                     "Kyle Banker",
                     "Peter Bakkum",
                     "Tim Hawkins",
                     "Shaun Verch",
                     "Douglas Garrett"
                  ],
                  "categories":[
                     
                  ]
               },
               {
                  "title":"Getting MEAN with Mongo, Express, Angular, and Node",
                  "isbn":"1617292036",
                  "pageCount":0,
                  "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
                  "status":"MEAP",
                  "authors":[
                     "Simon Holmes"
                  ],
                  "categories":[
                     
                  ]
               }
            ]
         }          
            ];
        // This code is for displaying the above template of the data 
        res.status(200).json({
            books:data,
        

        })
  })
//this get request will take the first and last name from the index.Html file and display them on the screen
  app.get('/name', (req,res) => {
    console.log(req.query.Firstname + " " +req.query.LastName  );
    res.send('hello ' + req.query.Firstname + " " + req.query.LastName )
})

// This get method will send the file index.html to the website to display itself
app.get('/test', (req,res) => {
    res.sendFile(path.join(__dirname+ '/index.html'))
})

// This is simialr to the last one however it just uses a post method with the index file instead of get
app.post('/name', (req, res) => {
    res.send('Hello ' + req.body.Firstname + " " + req.body.LastName )
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

 