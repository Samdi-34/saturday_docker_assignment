const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Saturday's Docker Assignment</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 100px;
            background-color: #f4f4f4;
          }

          .container {
            background: white;
            padding: 40px;
            margin: auto;
            width: 70%;
            border-radius: 10px;
            box-shadow: 0 0 10px #ccc;
          }

          h1 {
            color: #222;
          }

          p {
            font-size: 18px;
          }
        </style>
      </head>

      <body>
        <div class="container">
          <h1>Saturday's Docker Deployment Assignment</h1>

          <p>
            Welcome! This application was created by Saturday
            to demonstrate how to deploy a Node.js application
            using Docker.
          </p>

          <p>
            <strong>Status:</strong> Application is running successfully!
          </p>

          <p>
            Node.js → Docker → Docker Hub → EC2 Linux Server
          </p>
        </div>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Saturday's Docker application is running on port ${PORT}`);
});
