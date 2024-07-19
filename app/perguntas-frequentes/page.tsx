import { Metadata } from "next";
import Image from "next/image";
import AcordeonPlusSign from "../components/AcordeonPlusSign/AcordeonPlusSign";

export const metadata: Metadata = {
  title: "Perguntas Frequentes"
}

export default function PerguntasFrequentes() {
  return (
    <main>
      {/* primeira linha com banner */}
      <div className="w-full flex bg-primary items-center justify-center h-28">
        <h1 className=" text-4xl font-black text-slate-900">PERGUNTAS FREQUENTES</h1>
      </div>
      {/* segunda linha com 2 colunas, 1 imagem e 1 acordeon */}
      <div className="div flex flex-row flex-wrap justify-center align-top
       gap-4 overflow-hidden">
        <div className="w-5/12">
          <Image
            src="/img/banner540x430.png"
            width={420}
            height={300}
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="w-5/12">
          <AcordeonPlusSign
            defaultChecked={true}
            title="1. O que é o Gestão Auto Escola?"
            content="O Gestão Auto Escola é um sistema completo de gestão para auto escolas. Ele inclui um site institucional para apresentação da escola e um dashboard administrativo para gerenciar operações internas, como agendamento de aulas, controle de pagamento e acompanhamento de alunos."
            className="pb-3 border-b-2 rounded-none border-gray-300 "
          />
          <AcordeonPlusSign
            defaultChecked={false}
            title="2. Como posso me cadastrar no sistema?"
            content="Para se cadastrar no Gestão Auto Escola, basta preencher o formulário de inscrição. Após o envio, nossa equipe entrará em contato para concluir o processo de cadastro e fornecer as instruções necessárias para acessar o sistema."
            className="pb-3 border-b-2 rounded-none border-gray-300 "
          />
          <AcordeonPlusSign
            defaultChecked={false}
            title="3. Quais recursos são oferecidos para o gerenciamento de alunos?"
            content="O Gestão Auto Escola oferece recursos avançados para o gerenciamento de alunos, incluindo a possibilidade de acompanhar o progresso de cada aluno, agendar aulas de forma eficiente e enviar notificações automáticas sobre compromissos e vencimentos. Isso facilita o acompanhamento do desempenho e a comunicação com os alunos."
            className="pb-3 border-b-2 rounded-none border-gray-300 "
          />
          <AcordeonPlusSign
            defaultChecked={false}
            title="4. Como garantimos a segurança dos arquivos da sua auto escola?"
            content="Protegemos os arquivos da auto escola com medidas de segurança robustas, como criptografia de dados em trânsito e em repouso, e autenticação de dois fatores para acesso ao sistema. Essas práticas garantem a integridade e a confidencialidade das informações armazenadas."
            className="pb-3 border-b-2 rounded-none border-gray-300 "
          />
          <AcordeonPlusSign
            defaultChecked={false}
            title="Como posso obter suporte técnico?"
            content="Para suporte técnico, você pode acessar nossa seção de ajuda no site, onde encontrará tutoriais e artigos úteis. Se precisar de assistência personalizada, nossa equipe de suporte está disponível através do e-mail ou chat ao vivo, cujos contatos estão disponíveis na mesma seção."
            className="pb-3 border-b-2 rounded-none border-gray-300 "
          />

        </div>
      </div>
      {/* terceira linha com cta */}
      <div className="containter w-full min-w-full flex bg-accent h-32 justify-center items-center">
        <button className="btn btn-primary btn-circle w-fit h-auto p-6 text-2xl">Cadastre-se</button>
      </div>



    </main>
  );
}