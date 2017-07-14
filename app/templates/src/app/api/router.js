// Import core modules
import express from 'express';
import adminRouter from './admin/adminRouter';

let router = new express.Router();

router.use('/admin', adminRouter);

export default router;
