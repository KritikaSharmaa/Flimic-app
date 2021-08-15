const Login = () => {
  return (
    <div className="login">
      <div class="mb-3 w-100 ">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control w-100"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3 w-100">
        <label for="exampleFormControlTextarea1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control w-100"
          id="exampleFormControlInput1"
          placeholder="Password"
        />
      </div>
      <button>Login</button>
    </div>
  );
};
export default Login;
