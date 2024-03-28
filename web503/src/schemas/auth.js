import Joi from "joi"
export const ProductShemas = Joi.object({
    code: Joi.string().required().messages({
        "any.required": "Code bắt buộc phải nhập",
        "string.empty": "Code không được bỏ trống"
    }),
    name: Joi.string().required().messages({
        "any.required": "Name bắt buộc phải nhập",
        "string.empty": "Name không được bỏ trống"
    }),
    price: Joi.number().required().messages({
        "any.required": "Giá bắt buộc phải nhập",
        "number.empty": "Giá không được bỏ trống"
    }),
});
