const express= require("express");
const router = express.Router();

const projectService = require("../services/projects");



// router.get('/',(req,res)=>{
//     res.send("hi i am listening to that port");
// })

router.get('/', (req, res) => {
    projectService.getAllProjects(res);
});


router.get('/:id', (req, res) => {
    projectService.getProjectByID(req.params.id, res);
});


router.post('/', (req, res) => {
    projectService.insertProject(req.body, res);
});

// router.delete('/:id', (req, res) => {
//     projectService.deleteProject(req.params.id, res);
// });

module.exports = router;
