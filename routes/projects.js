const express= require("express");
const router = express.Router();

const projectService = require("../services/projects");



//get api for fetching all projects from database
router.get('/', (req, res) => {
    projectService.getAllProjects(res);
});

// get api for fetching a single project using ID for testing only
router.get('/:id', (req, res) => {
    projectService.getProjectByID(req.params.id, res);
});

//post api for posting a new project into database.
router.post('/', (req, res) => {
    projectService.insertProject(req.body, res);
});


//delete api incase want to use delete funtion aswell

// router.delete('/:id', (req, res) => {
//     projectService.deleteProject(req.params.id, res);
// });

module.exports = router;
