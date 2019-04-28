var app = new Vue({
    el: '#app',
    data: {
      tx:[]
    },
    computed:{
      showtx(){
        var now = Date.now();
        this.tx.forEach(transaction => {
          transaction.showtime = parseInt(now-transaction.time/1000/60);
        });
        return this.tx;
      }
    },
    mounted(){
      console.log('view mounted');
      this.getTx();
    },

    methods:{
      getTx(){
        axios.get('http://localhost:8090/transaction/getTranscation')
        .then(function (response) {
            // handle success
            console.log(response);
            app.tx = response.data;

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
      },
      jimu(){
        location.href="blockchainindex.html";
      },
      jiaoyi(){
        location.href="Transaction.html";
      }
    }
  })
  