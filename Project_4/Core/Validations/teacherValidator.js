const {body,param,query}=require("express-validator");

exports.teacherPostValidator=[
    body("_id").isMongoId().withMessage("Id should be Mongo Object...!"),
    body("fullName").isString().withMessage("FullName Must Consists of Alpha Only...!"),
    body("password").isStrongPassword().withMessage("Password Must Be Alpha Numeric...!"),
    body("email").isEmail().withMessage("Email Must Be in Email Format...!"),
    body("image").isString().withMessage("Image Must Contain Path as a String Value...!")
];

exports.teacherPutValidator=[
    body("_id").isMongoId().withMessage("Id should be Mongo Object...!"),
    body("fullName").optional().isString().withMessage("FullName Must Consists of Alpha Only...!"),
    body("password").optional().isStrongPassword().withMessage("Password Must Be Alpha Numeric...!"),
    body("email").optional().isEmail().withMessage("Email Must Be in Email Format...!"),
    body("image").optional().isString().withMessage("Image Must Contain Path as a String Value...!")
];