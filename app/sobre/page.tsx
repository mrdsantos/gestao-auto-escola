import Image from "next/image";
import FeatureCardSmall from "../components/FeatureCard/FeatureCardSmall";
import { Mail, SmilePlus, Cpu, BarChart4, ShieldCheck } from "lucide-react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre"
}




export default function sobre() {
  return (
    <main>
      {/* Primeira linha com headline */}
      <div className="container w-full max-w-full mx-auto flex flex-col flex-nowrap items-center text-center">
        <section className="max-w-2xl text-center prose all-petit-caps">
          <h1>Transforme a gestão da sua auto escola</h1>
        </section>
      </div>
      {/* segunda linha com features lado a lado */}
      <div className="container w-full max-w-full mx-auto flex flex-row flex-wrap justify-center">
        <div className="basis-5/12 b-2 border-sky-700">
          <div className="m-auto w-fit">
            <Image
              src="/img/sobre-article-img-640-640.png"
              width={320}
              height={320}
              alt="Uma desenho abstrato de pessoas construindo um sistema"
            />
          </div>
        </div>
        <div className="basis-5/12">
          <article className="prose text-center">
            <h3>Na Gestão Auto Escola, entendemos as suas dificuldades.</h3>
            <p className="text-start">Nosso sistema foi desenvolvido especialmente para simplificar e oferecer uma solução completa e eficiente.</p>
          </article>
          <FeatureCardSmall
            iconName="Check"
            iconStyle="rounded-full bg-emerald-100 text-emerald-500  p-4"
            iconSize="22"
            title="Agendamento Simplificado"
            description="Evite Conflitos e Sobrecarga de Instrutores de Tempo"
          />
          <FeatureCardSmall
            iconName="Check"
            iconStyle="rounded-full bg-emerald-100 text-emerald-500  p-4"
            iconSize="22"
            title="Documentação Digital"
            description="Evite papelada e confusão ao encontrar documentos importantes"
          />
          <FeatureCardSmall
            iconName="Check"
            iconStyle="rounded-full bg-emerald-100 text-emerald-500  p-4"
            iconSize="22"
            title="Boa Comunicação"
            description="Melhore a comunicação entre estudantes, instrutores e funcionários"
          />
        </div>
      </div>
      {/* terceira linha com cards */}
      <div className="containter mx-auto max-w-full prose">
        <h1 className="text-center petit-caps">Porque escolher a gente?</h1>
        <div className="mx-auto w-11/12 md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 not-prose">
          <div className="card shadow-xl shadow-slate-400 h-[250px] flex-1 max-w-[290px]">
            <div className="card-body items-center">
              <div className="w-fit text-sky-600">
                <Cpu size={38} />
              </div>
              <h2 className="card-title text-center">Eficiência Operacional</h2>
              <p className="text-center">Simplifique agendamentos, gerencie instrutores e alunos de forma precisa, sem erros</p>
            </div>
          </div>
          <div className="card shadow-xl shadow-slate-400 h-[250px] flex-1 max-w-[290px]">
            <div className="card-body items-center">
              <div className="w-fit text-rose-600">
                <SmilePlus size={38} />
              </div>
              <h2 className="card-title text-center">Experiência do Aluno</h2>
              <p className="text-center">Acesso fácil ao cronograma de aulas, progresso e comunicação direta com instrutores</p>
            </div>
          </div>
          <div className="card shadow-xl shadow-slate-400 h-[250px] flex-1 max-w-[290px]">
            <div className="card-body items-center">
              <div className="w-fit text-emerald-600">
                <BarChart4 size={38} />
              </div>
              <h2 className="card-title text-center">Análises Estratégicas</h2>
              <p className="text-center">Insights precisos sobre desempenho, taxa de aprovação e análise financeira para decisões</p>
            </div>
          </div>
          <div className="card shadow-xl shadow-slate-400 h-[250px] flex-1 max-w-[290px]">
            <div className="card-body items-center">
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
      <div className="containter flex flex-row flex-wrap justify-center content-center items-center mx-auto w-3/4 bg-slate-900 text-neutral py-7 mt-14">
        <div className="w-3/6 prose">
          <h2 className="">Cadastre-se e receba nossa proposta</h2>
        </div>
        <div className="w-2/5 ">
          <label className="input flex items-center gap-2 all-petit-caps">
            <Mail className="text-neutral-600 " strokeWidth={1.5} />
            <input type="text" placeholder="Digite seu E-mail" className="placeholder-neutral-800" />
            <Link href="#" className="ml-auto">
              <ArrowUp strokeWidth={2.5} size={30} className="text-base-300 justify-self-end bg-slate-900 w-9 h-9 rounded-lg" />
            </Link>
          </label>
        </div>
      </div>
    </main>
  );
}
