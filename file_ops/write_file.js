const fs=require("fs")

fs.writeFile(--dirname + '/myfile.txt',"some data",function(err){
    if(err)throw err
    console.log('File was written')
})