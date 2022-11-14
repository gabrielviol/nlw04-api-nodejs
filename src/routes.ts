import { Router } from 'express'
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const SurveyController = new SurveysController();

const sendMailController = new SendMailController();

router.post("/users", userController.create);

router.post("/surveys", SurveyController.create);
router.get("/surveys", SurveyController.show);

router.post("/sendMail", sendMailController.execute)

export { router };