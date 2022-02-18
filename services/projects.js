const dbo= require("../db/conn");

let projectCollection;

//creating funtion that return getprojectcollection all projects from database
const getProjectCollection = () =>{
        if(projectCollection){
            return projectCollection ;
        }        
        try{
            projectCollection = dbo.getDb().collection("projects");
            return projectCollection;
        }catch(e){
            return null;
        }
}
// respond to get api and sending project fron database
const getAllProjects = (res) => { 
    getProjectCollection().find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    });
}
//services of get by Id  
const getProjectByID = (id, res) => {
    console.log(id);
    getProjectCollection().find({ projectID: id }).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

//services for post api to post new project
const insertProject = (project, res) => {
    getProjectCollection().insertOne(project, (err, result) => {
        if (err) throw err;
        res.send({ result: 204 });
    });
}

//exposting the funtions here to routes
module.exports={
    getAllProjects,
    getProjectByID,
  insertProject
}
