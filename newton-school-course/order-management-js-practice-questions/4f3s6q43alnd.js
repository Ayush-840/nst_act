const OldPerson =(name,time)=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(name);
        }, time);
    });
      
        };
        const YoungPerson=(name,time)=>{
            return new Promise((resolve) => {
        setTimeout(() => {
            resolve(name);
        }, time);
    });
    
        };
 function execution(oldPersonName,oldPersonTime,person1Name,person1Time,person2Name,person2Time){
//using async await execute them
            OldPerson(oldPersonName,oldPersonTime);
            YoungPerson(person1Name,person1Time);
            YoungPerson(person2Name,person2Time); 
        }