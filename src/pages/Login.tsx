import { FormEvent, useState } from "react";

export interface ILoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const [formValues, setFormValues] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const handleLogin = (e: FormEvent): void => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <div>
      <form onSubmit={handleLogin} className="card-body max-w-md mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
            value={formValues.password}
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
