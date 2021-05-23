export const constants = {
  socketUrl: 'http://localhost:3000',
  // socketUrl: 'https://ajfo-peerjs-server.herokuapp.com/',
  socketNamespaces: {
      room: 'room',
      lobby: 'lobby'
  },
  peerConfig: Object.values({
      id: undefined,
      config: {          
        // host: 'https://ajfo-peerjs-server.herokuapp.com/',
        // secure: true,
        // path: '/',
        port: 9000,
        host: 'localhost',
        path: '/'
      }
  }),
  pages: {
      lobby: '/pages/lobby',
      login: '/pages/login',
  },
  events: {
      USER_CONNECTED: 'userConnection',
      USER_DISCONNECTED: 'userDisconnection',

      JOIN_ROOM: 'joinRoom',
      LOBBY_UPDATED: 'lobbyUpdated',
      UPGRADE_USER_PERMISSION: 'upgradeUserPermission',

      SPEAK_REQUEST: 'speakRequest',
      SPEAK_ANSWER: 'speakAnswer'
  },

    firebaseConfig: {
      apiKey: "AIzaSyDpEun17U_UTZi2_ctP0Flntey-_op8vO4",
      authDomain: "semana-js-expert-1a92c.firebaseapp.com",
      projectId: "semana-js-expert-1a92c",
      storageBucket: "semana-js-expert-1a92c.appspot.com",
      messagingSenderId: "996694585705",
      appId: "1:996694585705:web:b1ff50294cea24adc6cdf8",
      measurementId: "G-TJ13G93PL4"
    },
    storageKey: 'jsexpert:storage:user'
}