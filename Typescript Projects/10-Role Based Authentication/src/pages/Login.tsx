import React from 'react';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl">Login</h1>
      <button onClick={() => login('admin')} className="btn">Login as Admin</button>
      <button onClick={() => login('editor')} className="btn">Login as Editor</button>
      <button onClick={() => login('user')} className="btn">Login as User</button>
    </div>
  );
};

export default Login;
