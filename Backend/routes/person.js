import express from "express"
import { CreatePerson, GetPerson, UpdatePerson, DeletePerson } from "../Controllers/Person.js";
const router = express.Router();

router.route('/').post(CreatePerson).get(GetPerson)
router.put('/:id', UpdatePerson)
router.delete('/:id', DeletePerson)

export default router;