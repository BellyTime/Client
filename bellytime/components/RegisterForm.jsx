import { Formik, Field, Form, ErrorMessage } from "formik";
import { registerSchema } from "./validation/registerSchema";
import {register} from "../fetch/register";
export const RegisterForm = ({ styles }) => (
  <>
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        nickname: "",
        phonenumer: "",
        profileImg: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        register(values);
      }}
    >
      <Form>
        <label className={styles.label} htmlFor="Name">
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
        <Field className={styles.field} id="password" name="password" type="password" />
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
        <label className={styles.label} htmlFor="phonenumber" >
          휴대폰번호
        </label>
        <Field className={styles.field} id="phonenumber" name="phonenumber" />
        <ErrorMessage
          component="a"
          className={styles.errorMsg}
          name="phonenumber"
        />
        <label className={styles.label} htmlFor="ProfileImg">
          프로필이미지
        </label>
        <Field className={styles.field} id="profileimg" name="profileimg" />
        <ErrorMessage
          component="a"
          className={styles.errorMsg}
          name="profileimg"
        />
        <div class="mt-8">
          <button type="submit" className={styles.button}>
            Register
          </button>
        </div>
      </Form>
    </Formik>
  </>
);
