import Image from "next/image";
import FeatureCardSmall from "../components/FeatureCard/FeatureCardSmall";
import { Mail } from "lucide-react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";



export default function sobre() {
  return (
    <main>
      {/* Primeira linha com headline */}
      <div className="container w-full max-w-full mx-auto flex flex-col flex-nowrap items-center text-center">
        <section className="max-w-2xl text-center prose">
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
        <div className="basis-5/12 border b-2 border-red-300">
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

      {/* terceira linha com call to action */}
      <div className="containter flex flex-row flex-wrap justify-center content-center items-center mx-auto w-3/4 bg-slate-900 text-neutral py-7 ">
        <div className="w-3/6 prose">
          <h2 className="">Cadastre-se e receba nossa proposta</h2>
        </div>
        <div className="w-2/5 ">
          <label className="input flex items-center gap-2 ">
            <Mail className="text-neutral-600 " strokeWidth={1.5}/>
            <input type="text" placeholder="Digite seu E-mail" className="placeholder-neutral-800"/>
            <Link href="#" className="ml-auto">
            <ArrowUp strokeWidth={2.5} size={30} className="text-base-300 justify-self-end bg-slate-900 w-9 h-9 rounded-lg"/>
            </Link>
              
          </label>
        </div>
      </div>
    </main>
  );
}
