import * as yup from "yup";


export const LoginSchema = () => {
    return yup.object().shape({
        email: yup.string().email("Invalid email address").required("Email is required"),
        password:yup
        .string()
        .required("Please enter your password")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
          "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
        ),
    })
}