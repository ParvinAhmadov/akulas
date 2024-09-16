const bloglist = require("../models/BlogModel");
const { ErrorHandler } = require("../utils/ErrorHandlers");

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await bloglist.find();
    if (!blogs.length) {
      return next(new ErrorHandler("No blogs found", 404));
    }
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    next(error);
  }
};

const getBlogById = async (req, res, next) => {
  try {
    const blog = await bloglist.findById(req.params.id);
    if (!blog) {
      return next(new ErrorHandler("Blog not found", 404));
    }
    res.status(200).json({ success: true, blog });
  } catch (error) {
    next(new ErrorHandler("Invalid blog ID", 400));
  }
};

const createBlog = async (req, res, next) => {
  try {
    const { title, description, desc } = req.body;
    if (!req.file) {
      throw new ErrorHandler("Image upload is required", 400);
    }

    const newBlog = await bloglist.create({
      title,
      description,
      desc,
      image: req.file.path,
    });

    return res.status(201).json({
      success: true,
      newBlog,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllBlogs, getBlogById, createBlog };
