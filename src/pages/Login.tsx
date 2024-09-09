import { Button } from "antd";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const naivete = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "0001",
      password: "admin12345",
    },
  });

  const onSubmit = async (data : FieldValues ) => {
    const toastId =  toast.loading("Log in....")
    try {
        const userInformation = {
            id: data.id,
            password: data.password,
          };
          const res = await login(userInformation).unwrap();
      
          const user = verifyToken(res.data.accessToken) as TUser ;
          console.log(user);
          dispatch(setUser({ user, token: res.data.accessToken }));
          toast.success("Successfully login", {id : toastId, duration : 2000});
          naivete(`/admin/dashboard`);
    }
    catch(err)
    {
        toast.error("Invalid id or password", {id : toastId, duration : 2000});
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: "20px", textAlign: "center", margin: "10px" }}>
        Login Page{" "}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">ID : </label>
          <input type="text" id="id" {...register("id")} />
        </div>
        <div>
          <label htmlFor="password">password : </label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit"> Login </Button>
      </form>
    </div>
  );
};

export default Login;
