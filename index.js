const notifier = require('node-notifier');
const path = require('path');

const express = require('express');

const app = express();


//app.use(express.urlencoded())

app.use(express.json())

app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'});
    notifier.notify({
        appID: 'NodeFyjs',
        title: 'Notificação!',
        message: 'Alguem acessou',
        icon: path.join(__dirname + '/assets', 'exc.png'),
        sound: true,
        wait: true
      },
      function (err, response) {
        console.log(response);
        //console.log('Teste');
        console.log(request.headers);
      }
    );

})

app.listen(3000);
