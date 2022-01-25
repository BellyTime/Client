import * as Yup from "yup";

const phoneRegExp = new RegExp("01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}");
export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(7, "Too long!"),
  nickname: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(7, "Too long!"),
  email: Yup.string().email().required("Required"),
  password: Yup.string().required("Required").min(3, "Too Short!"),
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  profileImg: Yup.string().required("Required"),
});

