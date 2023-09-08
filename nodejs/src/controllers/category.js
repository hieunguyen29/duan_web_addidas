import joi from 'joi';
import Category from '../models/category';
import Product from '../models/product';

const categorySchema = joi.object({
  name: joi.string().required(),
});

export const getAll = async (req, res) => {
  try {
    // const { data: products } = await axios.get(`${API_URI}/products`);
    const category = await Category.find().populate("products");
    if (category.length === 0) {
      return res.json({
        message: 'Không có sản phẩm nào',
      });
    }
    return res.json(category);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const get = async function (req, res) {
  try {
    // const { data: product } = await axios.get(`${API_URI}/products/${req.params.id}`);
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.json({
        message: 'Không có sản phẩm nào',
      });
    }
    const products = await Product.find({ categoryId: req.params.id });
    return res.json({ ...category.toObject(), products });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const create = async function (req, res) {
  try {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details.map((err) => err.message),
      });
    }
    // const { data: product } = await axios.post(`${API_URI}/products`, req.body);
    const category = await Category.create(req.body);
    if (!category) {
      return res.json({
        message: 'Không thêm sản phẩm',
      });
    }
    return res.json({
      message: 'Thêm sản phẩm thành công',
      category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const update = async function (req, res) {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      return res.json({
        message: 'Cập nhật sản phẩm không thành công',
      });
    }
    return res.json({
      message: 'Cập nhật sản phẩm thành công',
      category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const remove = async function (req, res) {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    return res.json({
      message: 'Xóa sản phẩm thành công',
      category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
