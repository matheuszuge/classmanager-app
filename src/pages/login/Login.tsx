import { LoginForm } from "../../components/loginForm/LoginForm";

export const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Sua Empresa. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
};
