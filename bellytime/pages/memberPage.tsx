import { useState } from "react";
import { LoginForm } from "components";
import { RegisterForm } from "components";
const styles = {
  label: "block text-gray-700 text-sm font-bold pt-2 pb-1",
  field:
    "bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none",
  button:
    " bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600",
  errorMsg: "text-red-500 text-sm",
};

const MemberPage = () => {
  const [isLogin, setIsLogin] = useState<string|boolean>("Login");
    return (
      <div>
        <div className="flex flex-row w-full">
          {isLogin ? (
            <LoginForm styles={styles} />
          ) : (
            <RegisterForm styles={styles} />
          )}
        </div>
        <button
          onClick={() => {
            setIsLogin(!isLogin);
          }}
          className={`${styles.button}`}
        >
          <h1>{isLogin ? "Become Member" : "Back to Login"}</h1>
        </button>
      </div>
    );
};

export default MemberPage;
