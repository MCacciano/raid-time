// @desc    Get all mounts
// @route   GET /api/v1/mounts
// @access  Public
exports.getMount = (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all mounts' });
};

// @desc    Get single mount
// @route   GET /api/v1/mounts/:id
// @access  Public
exports.getMount = (req, res) => {
  res.status(200).json({ success: true, msg: 'Show mount by id' });
};

// @desc    Create new mount
// @route   POST /api/v1/mounts
// @access  Private
exports.createMount = (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new mount' });
};

// @desc    Update mount
// @route   PUT /api/v1/mount/:id
// @access  Private
exports.updateMount = (req, res) => {
  res.status(200).json({ success: true, msg: 'Update mount by id' });
};

// @desc    Delete mount
// @route   DELETE /api/v1/mount/:id
// @access  Private
exports.deleteMount = (req, res) => {
  res.status(200).json({ success: true, msg: 'Delete mount by id' });
};
