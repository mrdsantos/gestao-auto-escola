import { Metadata } from "next";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";


export const metadata: Metadata = {
  title: "Login"
}

export default function Login() {
  return (
    <main className="space-y-10 bg-gradient-circle bg-cover bg-no-repeat text-custom-content">
      {/* Primeira linha com headline */}
      <div className="w-full max-w-full mx-auto text-center mt-10">
        <h1 className="text-5xl font-bold all-petit-caps">
        Be<span className="underline decoration-complementary-lighter decoration-8">m-vin</span>do de volta!
        </h1>
      </div>

      <p className="text-center text-lg font-semibold">Faça login para continuar</p>

      {/* Formulário de login */}
      <div className="w-full max-w-full mx-auto flex flex-row flex-wrap justify-center mt-8">
        <div className="basis-5/12">
          <div className="shadow-xl shadow-slate-400 p-8 max-w-md mx-auto bg-surface rounded-lg">
            <form className="flex flex-col gap-4">
              <div className="input flex items-center gap-2 all-petit-caps">
                <Mail className="" />
                <input type="email" placeholder="Digite seu E-mail" className="w-full p-2 border-b border-gray-300 focus:outline-none" />
              </div>
              <div className="input flex items-center gap-2 all-petit-caps">
                <Lock className="" />
                <input type="password" placeholder="Digite sua Senha" className="w-full p-2 border-b border-gray-300 focus:outline-none" />
              </div>
              <button type="submit" className="btn self-center bg-complementary-darker hover:bg-complementary text-white py-2 mt-4">Login</button>
            </form>
            <div className="text-center mt-4">
              <p>Não tem uma conta? <Link href="/cadastro" className="text-complementary-darker"><span className="font-semibold">Cadastre-se</span></Link></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
