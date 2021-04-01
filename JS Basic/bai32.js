var readlineSync = require('readline-sync');
var fs= require('fs');
var arr=[];
do{
    console.log("1.show all student");
    console.log("2.create new student");
    console.log("3.save and exit");
    var choice  = readlineSync.question('chon thao tac?    ');
    if(choice==1)
    {
        var studens = fs.readFileSync('./data.json');
        var studensString = JSON.parse(studens);
        console.log("====All Student====");
        console.log(studensString);
    }
    if(choice==2)
    {
        var name = readlineSync.question('what is your name?:  ')
        var age = readlineSync.question('how old are you?:  ')
        var clas = readlineSync.question('what is your class?:  ')   
        var Student1 =
        {
          name : name,
          age : age,
          clas : clas,
        };
     
      arr.push(Student1);
         var arr1 = JSON.stringify(arr); 
         fs.writeFileSync('./data.json',arr1);
        
    }
    if(choice==3)
    {
        console.log("---bye---");
        break;
    }
}while(choice<=3);

