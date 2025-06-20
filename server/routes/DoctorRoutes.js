import express from "express"
import {
    createDoctorProfile,
    getDoctorProfile,
    updateDoctorProfile,
    updateAvailability,
    getDoctorAppointments,
    getNextAvailableSlot,
    deleteDoctorProfile,
    approveAppointment,
    getAllDoctors,
    updateDoctorHospital
} from "../controllers/DoctorControllers.js"
import { middleware } from '../middleware/middleware.js';

const router = express.Router();

router.post("/profile", middleware, createDoctorProfile);
router.get("/profile", middleware, getDoctorProfile);
router.put("/profile", middleware, updateDoctorProfile);
router.delete("/profile", middleware, deleteDoctorProfile);
router.put("/availability", middleware, updateAvailability);
router.get("/availability/next", middleware, getNextAvailableSlot);
router.get("/appointments", middleware, getDoctorAppointments);
router.put("/appointments/:appointmentId/approve", middleware, approveAppointment);
router.put("/update-hospital/:id", middleware, updateDoctorHospital);

router.get("/getall", getAllDoctors);

export default router;