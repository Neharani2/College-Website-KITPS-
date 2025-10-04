import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMsg(data.error);
      } else {
        setMsg(data.message);
      }
    } catch {
      setMsg("Error connecting to server");
    }
  };

  return (
    <div className="back">
      <form onSubmit={handleSubmit}>
        <p className="heading">Login</p>
        <div><p className="fieldName">Email</p><input type="email" onChange={(e)=>setEmail(e.target.value)} /></div>
        <div><p className="fieldName">Password</p><input type="password" onChange={(e)=>setPassword(e.target.value)} /></div>
        <button className="bttnm">Login</button>
        {msg && <p>{msg}</p>}
      </form>
    </div>
  );
};

export default Login;
