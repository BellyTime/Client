import { Formik, Field, Form, ErrorMessage } from "formik";
import { loginSchema } from "./validation/loginSchema";
import { handleOauth } from "../fetch/oauthLogin";
import { baseURL } from "@/public/static/data";
import { login } from "../fetch/login";
import { settingState, userState } from "@/state/atom";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
export const LoginForm = ({ styles }) => {
  const [setting, setSetting] = useRecoilState(settingState);
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
          const { userId, userNickName, accessToken } = await login(values);
          console.log("form", userId, userNickName, accessToken);
          setSetting((old) => ({ ...old, token: accessToken }));
          setUser((old) => ({ ...old, userId, userNickName }));
          if (accessToken) router.push("/");
        }}
      >
        <Form>
          <label className={styles.label} htmlFor="Email">
            Email
          </label>
          <Field className={styles.field} id="email" name="email" />
          <ErrorMessage
            component="a"
            className={styles.errorMsg}
            name="email"
          />
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
          </div>
        </Form>
      </Formik>
      <div className="flex-col">
        <a href={`${baseURL}/oauth2/authorize/google`}>
          <button className={styles.button}>Google</button>
        </a>
        <a href={`${baseURL}/oauth2/authorize/naver`}>
          <button className={styles.button}>Naver</button>
        </a>
        <a href={`${baseURL}/oauth2/authorize/kakao`}>
          <button className={styles.button}>Kakao</button>
        </a>
      </div>
    </>
  );
};
