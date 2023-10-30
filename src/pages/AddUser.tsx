import { FormEvent, useState } from "react";
import { ILoginForm } from "./Login";
import axios from "axios";
import baseUrl from "../api/urls";

interface IAddUserForm extends ILoginForm {
  role: string;
}

const AddUser = () => {
  const [formValues, setFormValues] = useState<IAddUserForm>({
    email: "",
    password: "",
    role: "basic",
  });

  const handleAddUser = (e: FormEvent) => {
    e.preventDefault();
    axios.post(`${baseUrl}/users`, formValues).then((res) => {
      if (res.data.insertedId) {
        alert("User created successfully");
        // Clear form values
        setFormValues({
          email: "",
          password: "",
          role: "basic",
        });
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleAddUser} className="card-body max-w-md mx-auto">
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select user role</span>
          </label>
          <select
            className="select select-bordered"
            defaultValue={formValues.role}
            onChange={(e) =>
              setFormValues({ ...formValues, role: e.target.value })
            }
          >
            <option>Basic</option>
            <option>Moderator</option>
            <option>Advisor</option>
            <option>Admin</option>
          </select>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Create User</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
