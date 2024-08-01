import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Cadastro"
}
const Cadastro = () => {
    return (
        <main className="flex-grow flex flex-col align-middle bg-gradient-circle bg-cover bg-no-repeat text-custom-content">
            <div className="w-full max-w-full mx-auto text-center mt-10">
                <section className="w-8/12 mx-auto text-center">
                    <h1 className="text-5xl font-semibold all-petit-caps"><span className="underline decoration-primary-lighter decoration-[16px]">B</span>em Vindo</h1>
                </section>
            </div>
            {/* colunas de login */}
            <div className="w-full max-w-full m-auto my-10">
                <div className="md:flex wrap md:w-8/12 lg:w-7/12 2xl:w-5/12 m-auto shadow-xl shadow-slate-400 rounded-md">
                    {/* coluna 1 */}
                    <div className="hidden lg:flex lg:flex-col lg:w-[36%] gap-y-3 p-5 bg-complementary-lighter/30">
                        <p className="font-bold text-lg">Entrar</p>
                        <div>
                            <label htmlFor="username">E-mail:<br /></label>
                            <input type="text" id="username" placeholder="Digite seu e-mail" className="input bg-transparent border-b-black rounded-none w-full" required />
                        </div>
                        <div>
                            <label htmlFor="login-password">Senha:<br /></label>
                            <input type="password" id="login-password" placeholder="Digite sua senha" className="input bg-transparent border-b-black rounded-none w-full" required />
                        </div>
                        <button className="btn bg-complementary-darker hover:bg-complementary w-[180px] text-white mt-5 mx-auto">Entrar</button>
                    </div>
                    {/* coluna 2 */}
                    <div className="w-[100%] lg:w-[64%] p-5 gap-y-3">
                        <p className="font-bold text-lg">Cadastro</p>
                        {/* Coluna 2 -> Coluna 1 */}
                        <div className="flex flex-row flex-wrap gap-x-5 mt-3">
                            {/* Coluna 2 - > Coluna 1 - > coluna 1 */}
                            <div className="order-1 w-5/12  max-w-[48%] flex flex-col gap-y-3">
                                <div>
                                    <label htmlFor="nome">Nome:<br /></label>
                                    <input type="text" id="nome" placeholder="Nome" className="input bg-transparent border-b-black rounded-none w-full" required />
                                </div>
                                <div>
                                    <label htmlFor="telefone">Telefone:<br /></label>
                                    <input type="text" id="telefone" placeholder="(99) 9 9999-9999" className="input bg-transparent border-b-black rounded-none w-full" required />
                                </div>
                                <div className="text-start flex flex-wrap gap-2">
                                    <label htmlFor="como-conheceu">Como conheceu o Gestão Auto Escola?</label>
                                    <select id="como-conheceu" className="select max-w-sm">
                                        <option disabled selected>Escolha um</option>
                                        <option>Google</option>
                                        <option>Mídias Sociais</option>
                                        <option>Indicação</option>
                                    </select>
                                </div>
                            </div>
                            {/* Coluna 2 - >  Coluna 1 - >coluna 2 */}
                            <div className="order-2 w-5/12 max-w-[48%] flex flex-col gap-y-3">
                                <div>
                                    <label htmlFor="email">E-mail:<br /></label>
                                    <input type="email" id="email" placeholder="email@exemplo.com" className="input bg-transparent border-b-black rounded-none w-full" required />
                                </div>
                                <div>
                                    <label htmlFor="password">Senha:<br /></label>
                                    <input type="password" id="password" placeholder="******" className="input bg-transparent border-b-black rounded-none w-full" required />
                                </div>
                                <div className="flex flex-row flex-nowrap gap-3 items-center">
                                    <label htmlFor="termos" className="text-sm">Aceito os Termos de Uso e Política de Privacidade </label>
                                    <input type="checkbox" id="termos" className="checkbox checkbox-sm" required />
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <button className="btn bg-primary-darker w-[180px] hover:bg-primary text-white">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Cadastro;
