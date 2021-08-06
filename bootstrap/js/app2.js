const Home={
option:{  
  status:0

},
setStatus:function (item) {
    this.option.status=item;

    return true;
},
Status:function () {
    return  this.option.status
},

Run:function () {
    document.getElementById('status').addEventListener('change',function (event) {
        this.option.status= event.target.value;
        console.log(this.option)
        
    })
}

}
    Home.Run;
