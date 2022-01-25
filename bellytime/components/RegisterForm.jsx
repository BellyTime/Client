import { Formik, Field, Form, ErrorMessage } from "formik";
import { registerSchema } from "./validation/registerSchema";
import { register } from "../fetch/register";
export const RegisterForm = ({ styles }) => (
  <>
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        nickname: "",
        phoneNumber: "",
        profileImg: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        console.log(values);
        register(values);
      }}
    >
      <Form>
        <label className={styles.label} htmlFor="name">
          Full Name
        </label>
        <Field className={styles.field} id="name" name="name" />
        <ErrorMessage component="a" className={styles.errorMsg} name="name" />
        <label className={styles.label} htmlFor="Email">
          Email
        </label>
        <Field className={styles.field} id="email" name="email" />
        <ErrorMessage component="a" className={styles.errorMsg} name="email" />
        <label className={styles.label} htmlFor="password">
          password
        </label>
        <Field
          className={styles.field}
          id="password"
          name="password"
          type="password"
        />
        <ErrorMessage
          component="a"
          className={styles.errorMsg}
          name="password"
        />
        <label className={styles.label} htmlFor="NickName">
          닉네임
        </label>
        <Field className={styles.field} id="nickname" name="nickname" />
        <ErrorMessage
          component="a"
          className={styles.errorMsg}
          name="nickname"
        />
        <label className={styles.label} htmlFor="phoneNumber">
          휴대폰번호
        </label>
        <Field className={styles.field} id="phoneNumber" name="phoneNumber" />
        <ErrorMessage
          component="a"
          className={styles.errorMsg}
          name="phoneNumber"
        />
        <label className={styles.label} htmlFor="profileImg">
          프로필이미지
        </label>
        <Field className={styles.field} id="profileImg" name="profileImg" />
        <ErrorMessage
          component="a"
          className={styles.errorMsg}
          name="profileImg"
        />
  
          <button type="submit" className={styles.button} onClick={()=>console.log("hi")}>
            Register
          </button>
  
      </Form>
    </Formik>
  </>
);
