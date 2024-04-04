import Joi from "joi"
// validate CRUD
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
// validate đăng nhập và đăng ký
export const registerShema = Joi.object({
    username: Joi.string().required().trim().messages({
        "any.required": "User Name bắt buộc phải nhập",
        "string.empty": "User Name không được bỏ trống",
        "string.trim": "User Name không có chứa khoảng trắng"
    }),
    email: Joi.string().required().trim().messages({
        "any.required": "Email bắt buộc phải nhập",
        "string.empty": "Email không được bỏ trống",
        "string.trim": "Email không có chứa khoảng trắng"
    }),
    password: Joi.string().required().trim().min(6).messages({
        "any.required": "Password bắt buộc phải nhập",
        "string.empty": "Password không được bỏ trống",
        "string.trim": "Password không có chứa khoảng trắng",
        "string.min": "Password cần tối thiểu 6 ký tự"
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
        "any.required": "Password bắt buộc phải nhập",
        "any.only": "Password không khớp",
        "string.empty": "Password không được bỏ trống"
    }),
    age: Joi.number().required().min(1).max(100).messages({
        "any.required": "Age bắt buộc phải nhập",
        "number.empty": "Age không được bỏ trống",
        "number.min": "Age không được nhỏ hơn 1",
        "number.max": "Age không được lớn hơn 100"
    })
})
export const singinSchema = Joi.object({
    email: Joi.string().required().trim().email().messages({
        "any.required": "Email bắt buộc phải nhập",
        "string.empty": "Email không được bỏ trống",
        "string.trim": "Email không có chứa khoảng trắng",
        "string.email": "Bạn phải nhập đúng định dạng email"
    }),
    password: Joi.string().required().trim().min(6).messages({
        "any.required": "Password bắt buộc phải nhập",
        "string.empty": "Password không được bỏ trống",
        "string.trim": "Password không có chứa khoảng trắng",
        "string.min": "Password cần tối thiểu 6 ký tự"
    }),
}); 
