const fs=require('fs');
fs.writeFile("Student.txt","Hello student",(err)=>{
    if(err){
        console.log("Error creating file:",err);
        return;
    }
    console.log("File created successfully:");
});