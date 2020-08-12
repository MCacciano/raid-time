const Group = require('../models/Group');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc        Get all groups
// @route       GET /api/v1/groups
// @access      Public
exports.getGroups = asyncHandler(async (req, res, next) => {
  const groups = await Group.find();

  res.status(200).json({ success: true, count: groups.length, data: groups });
});

// @desc        Get group by id
// @route       GET /api/v1/groups/:id
// @access      Public
exports.getGroup = asyncHandler(async (req, res, next) => {
  const group = await Group.findById(req.params.id);

  if (!group) {
    return next(new ErrorResponse(`Group not found with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({ success: true, data: group });
});

// @desc        Create group
// @route       POST /api/v1/groups
// @access      Private
exports.createGroup = asyncHandler(async (req, res, next) => {
  const group = await Group.create(req.body);

  return res.status(201).json({ success: true, data: group });
});

// @desc        Update group
// @route       PUT /api/v1/groups/:id
// @access      Private
exports.updateGroup = asyncHandler(async (req, res, next) => {
  const group = await Group.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!group) {
    return next(new ErrorResponse(`Group not found with id of ${req.params.id}`, 404));
  }

  res.status(200).json({ success: true, data: bootcamp });
});

// @desc        Delete group
// @route       DELETE /api/v1/groups/:id
// @access      Private
exports.deleteGroup = asyncHandler(async (req, res, next) => {
  const group = await Group.findByIdAndDelete(req.params.id);

  if (!group) {
    return next(new ErrorResponse(`Group not found with id of ${req.params.id}`, 404));
  }

  res.status(200).json({ success: true, data: {} });
});
