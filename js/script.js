


/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */


// INIZIALIZZO VUE dopo aver linkato la CDN nell HTML:

const App = new Vue (

  {
    // con El collego le istruzioni di App al #root nell HTML
    el: '#root',

    //  In Data inserisco tutti i dati che voglio iniettare in HTML
    data: {

      title: 'HELLO VUE JS !!!',
      imgLink: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
      palette1: 'palette1',
      palette2: 'palette2',
      palette3: 'palette3',
      palette4: 'palette4',
    },

    //  In Data inserisco tutte le funzioni che voglio richiamare tramite eventi.
    methods: {

      messColorsUp: function() {

        if (App.palette1 == "palette1") {
          return (App.palette1 = "palette5",  App.palette2 = "palette6", App.palette3 = "palette7", App.palette4 = "palette8");
        } else {
          return (App.palette1 = 'palette1', App.palette2 = "palette2", App.palette3 = "palette3", App.palette4 = "palette4");
        }
      },

    },

  },

);
