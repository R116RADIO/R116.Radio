module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '52.25.85.16',
      username: 'ubuntu',
      pem: './pem/finemsys.pem'
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },

  meteor: {
    // TODO: change app name and path
    name: 'radio',
    path: '../',
    port: 80,

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
      debug: true,
      cleanAfterBuild: true, // default
    },

    env: {
      // If you are using ssl, it needs to start with https://
      PORT: 80,
      ROOT_URL: 'http://52.25.85.16',
      MONGO_URL: 'mongodb://localhost/radio_app',
    },

    docker: {
      // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
      image: 'abernix/meteord:base'
    },

    // This is the maximum time in seconds it will wait
    // for your app to start
    // Add 30 seconds if the server has 512mb of ram
    // And 30 more if you have binary npm dependencies.
    deployCheckWaitTime: 120,
    deployCheckPort: 80,

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    port: 27017,
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};
