    var users ={
        name:"Tasnim",
         password : "12345",
        email:"T@gmail.com",

        
        getUser:function(){
            console.log(this.user);
        },
        getName:function(){
            console.log(this.name);
        },
        getEmail:function(){
            console.log(this.email);
        },
        getPassword:function(password) {
            console.log(this.password)

        },
        setName:function(name){
            this.name=name;
            console.log(this.name);
        },
        setEmail:function(email){
            this.email=email;
            console.log(this.email);
        },
        setPassword:function (password) {
            this.password=password;
            console.log(this.password)
        },
        setUser:function (user) {
            this.user=user;
            console.log(this.user)
        },
        user:[
            {id:1,name:"A",email:"a@gmail.com",option:""},
            {id:2,name:"B",email:"b@gmail.com",option:""},
            {id:3,name:"C",email:"c@gmail.com",option:""},
            {id:4,name:"D",email:"d@gmail.com",option:""},         
            {id:5,name:"E",email:"e@gmail.com",option:""},

        ],
    };
    users.getName();
    users.setName("Tasnim Kh");
    users.getEmail();
    users.setEmail("T.kh@gmail.com")
    users.getPassword();
    users.setPassword("6789");


    var body ='';
    users.user.forEach(element => {
        body+='<tr>'
        body+= '<td>' +element.id +'</td>'
        body+= '<td>' +element.name +'</td>'
        body+= '<td>' +element.mail +'</td>'
        body+= '<td>'+'<button>Edit </button>'+'<button>Delete </button>' +element.option +'</td>'

        body+='</tr>'
        
    });
    document.getElementById("table").innerHTML(body);
    


    
 