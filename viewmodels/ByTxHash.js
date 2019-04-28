var app = new Vue({
    el: '#app',
    data: {
      showTx:[],
      txhash:''
    },
    mounted(){
      
      var url = new URL(location.href);
      var txhash = url.searchParams.get('txhash');
      this.getTx(txhash);
    },
    methods:{
      getTx(txhash){
        axios.get('http://localhost:8090/transaction/getTransactionInfoByTxhash', {
          params: {
            txhash:txhash
             }
        })
        .then(function (response) {
          console.log(response);
          app.showTx=response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  })