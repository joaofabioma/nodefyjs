const notifier = require('node-notifier');
const path = require('path');


notifier.notify({
    appID: 'NodeFyjs',
    title: 'Notificação!',
    message: 'Primeiro funcionamento',
    icon: path.join(__dirname + '/assets', 'exc.png'),
    sound: true,
    wait: true
  },
  function (err, response) {
    console.log(response);
  }
);