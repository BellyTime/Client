import { Formik, Field, Form, ErrorMessage } from "formik";
import { loginSchema } from "./validation/loginSchema";
import { handleOauth } from "../fetch/oauthLogin";
import { baseURL } from "@/public/static/data";
import {login} from "../fetch/login";
export const LoginForm = ({ styles }) => (
  <>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        login(values)
      }}
    >
      <Form>
        <label className={styles.label} htmlFor="Email">
          Email
        </label>
        <Field className={styles.field} id="email" name="email" />
        <ErrorMessage component="a" className={styles.errorMsg} name="email" />
        <label className={styles.label} htmlFor="Email">
          Password
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
        <div className="mt-8">
          <button type="submit" className={styles.button}>
            Login
          </button>
          <a
            href={`${baseURL}oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect`}
          >
            <button
              type="submit"
              className={styles.button}
              onClick={(e) => handleOauth(e)}
            >
              Google
            </button>
          </a>
        </div>
      </Form>
    </Formik>
  </>
);
