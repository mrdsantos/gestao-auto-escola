import Image from "next/image";
import FeatureCardSmall from "../components/FeatureCardSmall/FeatureCardSmall";
import { SmilePlus, Cpu, BarChart4, ShieldCheck } from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sobre"
}
export default function sobre() {
  return (
    <main className="flex-grow bg-gradient-circle bg-cover bg-no-repeat space-y-10 text-custom-content">
      {/* Primeira linha com headline */}
      <div className="w-full max-w-full mx-auto text-center mt-10">
        <section className="w-8/12 mx-auto text-center">
          <h1 className="text-5xl font-semibold all-petit-caps"><span className="underline decoration-accent-lighter decoration-[16px]">Transf</span>orme a gestão da sua auto escola</h1>
        </section>
      </div>
      {/* segunda linha com features lado a lado */}
      <div className="w-full max-w-full mx-auto flex flex-row flex-wrap justify-center">
        <div className="basis-5/12 flex items-center">
          <div className="w-fit ml-auto mr-5">
            <Image
              src="/img/sobre-banner-1700-1280.png"
              width={400}
              height={400}
              alt="Uma desenho abstrato de pessoas construindo um sistema"
              className="rounded-lg border-complementary-darker border-l-4"
            />
          </div>
        </div>
        <div className="basis-6/12">
          <article className="text-center">
            <h3 className="text-lg font-semibold">Na Gestão Auto Escola, <span className="underline decoration-primary-lighter decoration-4 underline-offset-4">entendemos</span> as suas dificuldades.</h3>
            <p className="text-start indent-5">Nosso sistema foi desenvolvido especialmente para simplificar e oferecer uma solução completa e eficiente.</p>
          </article>
          <FeatureCardSmall
            iconName="Check"
            iconStyle="rounded-full bg-complementary text-white  p-4"
            iconSize="22"
            title="Agendamento Simplificado"
            description="Evite Conflitos e Sobrecarga de Instrutores de Tempo"
          />
          <FeatureCardSmall
            iconName="Check"
            iconStyle="rounded-full bg-complementary text-white  p-4"
            iconSize="22"
            title="Documentação Digital"
            description="Evite papelada e confusão ao encontrar documentos importantes"
          />
          <FeatureCardSmall
            iconName="Check"
            iconStyle="rounded-full bg-complementary text-white  p-4"
            iconSize="22"
            title="Boa Comunicação"
            description="Melhore a comunicação entre estudantes, instrutores e funcionários"
          />
        </div>
      </div>
      {/* terceira linha com cards */}
      <div className="mx-auto max-w-full text-custom-content">
        <h1 className="text-center text-4xl font-semibold petit-caps mb-5 w-4/12 mx-auto bg-gradient-square bg-cover">Por que escolher a gente?</h1>
        <div className="mx-auto w-11/12 flex flex-row flex-wrap items-center justify-center gap-7">
          <div className="card shadow-xl shadow-slate-400 h-[250px] flex-1 min-w-[260px] max-w-[290px]">
            <div className="card-body items-center bg-surface">
              <div className="w-fit text-sky-600">
                <Cpu size={38} />
              </div>
              <h2 className="card-title text-center">Eficiência Operacional</h2>
              <p className="text-center">Simplifique agendamentos, gerencie instrutores e alunos de forma precisa, sem erros</p>
            </div>
          </div>
          <div className="card shadow-xl shadow-slate-400 h-[250px] flex-1 min-w-[260px] max-w-[290px]">
            <div className="card-body items-center bg-surface">
              <div className="w-fit text-rose-600">
                <SmilePlus size={38} />
              </div>
              <h2 className="card-title text-center">Experiência do Aluno</h2>
              <p className="text-center">Acesso fácil ao cronograma de aulas, progresso e comunicação direta com instrutores</p>
            </div>
          </div>
          <div className="card shadow-xl shadow-slate-400 h-[250px] flex-1 min-w-[260px] max-w-[290px]">
            <div className="card-body items-center bg-surface">
              <div className="w-fit text-emerald-600">
                <BarChart4 size={38} />
              </div>
              <h2 className="card-title text-center">Análises Estratégicas</h2>
              <p className="text-center">Insights precisos sobre desempenho, taxa de aprovação e análise financeira para decisões</p>
            </div>
          </div>
          <div className="card shadow-xl shadow-slate-400 h-[250px] flex-1 min-w-[260px] max-w-[290px]">
            <div className="card-body items-center bg-surface">
              <div className="w-fit text-violet-600">
                <ShieldCheck size={38} />
              </div>
              <h2 className="card-title text-center">Segurança Garantida</h2>
              <p className="text-center">Proteção robusta de dados e suporte técnico contínuo para tranquilidade total</p>
            </div>
          </div>
        </div>
      </div>
      {/* quarta linha com call to action */}
      <div className="flex flex-row flex-wrap justify-center content-center items-center mx-auto w-3/4 bg-complementary py-7 mt-14 text-black">
        <div className="w-3/6">
          <h2 className="font-bold text-xl">Cadastre-se e receba nossa proposta</h2>
        </div>
        <div className="join">
          <label className="label">
            <input type="text" placeholder="usuario@email.com" className="input join-item" />
            <button className="btn btn-primary join-item">Cadastrar</button>
          </label>
        </div>
      </div>
    </main>
  );
}
