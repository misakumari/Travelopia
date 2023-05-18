### Created two JSON API endpoints using Node.js, MongoDB, and Express.js to receive data from a form, store it in a MongoDB database, and retrieve existing form submissions:
Before you proceed, ensure that you have Node.js, MongoDB, and Express.js installed on your system.

Install the required packages:
```npm install express mongoose body-parser```

Ensure that MongoDB is running on your local machine or update the MongoDB connection URL in the code if your database is hosted elsewhere.
You can test these endpoints by sending requests to http://localhost:3000/submit for storing form submissions and 
http://localhost:3000/submissions to retrieve existing form submissions.

#### Two JSON API endpoints are :GET and POST 

POST /submit receives data from the form and stores it in the MongoDB database.

GET /submissions retrieves all existing form submissions from the MongoDB 


Run: ```node src/app.js```

![database](https://github.com/misakumari/Travelopia/assets/50099748/6c61c933-b80c-4409-9319-c9162d78675f)
