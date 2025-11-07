const express = require('express');
const router = express.Router();
const {
  applyForJob,
  getJobApplications,
  getMyApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication
} = require('../controllers/applicationController');
const { protect, authorize } = require('../middleware/auth');

router.post('/', protect, authorize('jobseeker'), applyForJob);
router.get('/my-applications', protect, authorize('jobseeker'), getMyApplications);
router.get('/job/:jobId', protect, authorize('employer'), getJobApplications);
router.get('/:id', protect, getApplicationById);
router.put('/:id/status', protect, authorize('employer'), updateApplicationStatus);
router.delete('/:id', protect, authorize('jobseeker'), deleteApplication);

module.exports = router;