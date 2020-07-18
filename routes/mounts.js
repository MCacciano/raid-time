const express = require('express');
const router = express.Router();

const {
  getMounts,
  getMount,
  createMount,
  updateMount,
  deleteMount
} = require('../controllers/mounts');

router.route('/').get(getMounts).post(createMount);
router.route('/:id').get(getMount).put(updateMount).delete(deleteMount);

module.exports = router;
