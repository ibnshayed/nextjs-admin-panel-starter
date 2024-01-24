import LoginForm from "@/components/forms/LoginForm";

const LoginPage = () => {
  return (
    <div className="bg-blue-50 h-screen flex justify-center items-center">
      <div className="bg-white p-5 lg:p-10 lg:w-2/5 rounded-lg shadow-lg">
        <p className="text-center text-xl">Login</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
