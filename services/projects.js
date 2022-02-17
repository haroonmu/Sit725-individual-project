const dbo= require("../db/conn");

let projectCollection;
//  getProjectCollection() = dbo.getDb().collection("projects");
// setTimeout(() => {
// }, 2000);

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

const getAllProjects = (res) => { 
    getProjectCollection().find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

const getProjectByID = (id, res) => {
    //const getProjectCollection() = dbo.getDb().collection("projects");
    console.log(id);
    getProjectCollection().find({ projectID: id }).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

const insertProject = (project, res) => {
    //const getProjectCollection() = dbo.getDb().collection("projects");
    getProjectCollection().insertOne(project, (err, result) => {
        if (err) throw err;
        res.send({ result: 204 });
    });
}

module.exports={
    getAllProjects,
    getProjectByID,
  insertProject
}
