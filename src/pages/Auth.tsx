import { useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  // login should be default route
  // if user clicks 'sign up' button, hide login form and show sign up form
  return (
    <section className="auth">
      <h1 className="auth__title">{isLogin ? "Login" : "Sign up"}</h1>
      {isLogin ? (
        <form className="auth__form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <p className="auth__signup">
            Don't have an account? Click here to{" "}
            <a href="#" onClick={() => setIsLogin(false)}>
              Sign up
            </a>
          </p>
        </form>
      ) : (
        <form className="auth__form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Sign up</button>
          <p className="auth__signup">
            Already have an account? Click here to{" "}
            <a href="#" onClick={() => setIsLogin(true)}>
              Login
            </a>
          </p>
        </form>
      )}
    </section>
  );
}

export default Auth;
