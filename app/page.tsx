"use client"
import Image from "next/image";
import FeatureCardLarge from "./components/FeatureCardLarge/FeatureCardLarge";


export default function Home() {
  return (
    <main className="flex-grow space-y-14 bg-background">
      {/* //STYLE create margins and padding */}
      <div className=" mx-auto max-w-full flex flex-row flex-nowrap justify-center p-5 sm:p-10">
        {/* //IMG create images for hero section */}
        <section className="hidden sm:inline-block">
          <Image
            src="/img/home-header-banner-640-640.png"
            width={640}
            height={640}
            alt=""
          />
        </section>
        <section className="prose max-w-80 text-center flex flex-col justify-center">
          <h1 className="mb-0 text-complementary-darker">Transforme Sua Autoescola</h1>
          <p className="text-start text-lg text-neutral-900 indent-5 font-semibold">Maximize a eficiência e simplifique a administração da sua autoescola com nosso sistema inovador.</p>
        </section>
      </div>
      <div className="wrapper">
        <div className=" max-w-7xl mx-auto flex flex-row flex-wrap justify-center gap-10">
          <FeatureCardLarge
            title="Dashboard"
            description="Visão completa da sua autoescola com nosso painel de controle."
            imagePath="/img/home-card-dashboard-180-180.png"
            width={180}
            height={180}
            alt="Ilustração de uma pessoa, computadores e gráficos"
            backgroundColor="bg-[#53D7FF]"
          />
          <FeatureCardLarge
            title="Notificações"
            description="Todos informados de forma automáticas e personalizada."
            imagePath="/img/home-card-notification-180-180.png"
            width={180}
            height={180}
            alt="Ilustração de várias pessoas de mãos dadas e formas tecnológicas ao fundo"
            backgroundColor="bg-[#FFD153]"
          />
          <FeatureCardLarge
            title="Automação"
            description="Elimine erros manuais e otimize om processos de agendamento e matrículas."
            imagePath="/img/home-card-automacao-180-180.png"
            width={180}
            height={180}
            alt="Ilustração de computadores e celulares enviando dados para a internet"
            backgroundColor="bg-[#81FF53]"
          />
          <FeatureCardLarge
            title="Segurança"
            description="Proteja informações com nossa avançada segurança de dados."
            imagePath="/img/home-card-protection-180-180.png"
            width={180}
            height={180}
            alt="Ilustração de pessoas e computadores protegidas por um escudo"
            backgroundColor="bg-[#DE85FF]"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center content-center items-center gap-4 mx-auto max-w-full p-5 bg-primary-darker">
          <div className="md:w-5/12 font-bold text-lg text-neutral-100 lg:pr-10 text-center md:text-start">
            <p>Experimente o Gestão Auto Escola agora e descubra como nossa solução pode transformar sua autoescola.<br />Cadastre-se gratuitamente e aproveite todos os benefícios!</p>
          </div>
          <div className="md:w-3/12">
            <button className="btn btn-wide self-center bg-black text-white border-rose-900 font-bold text-lg hover:bg-rose-950 hover:text-white hover:border-black hover:b-2">Cadastrar</button>
          </div>
        </div>
        <div className="w-full h-2 bg-black"></div>
      </div>
      <div className="carousel w-full">
        

        <div className="md:w-11/12 lg:w-7/12 mx-5 mb-10 sm:mx-auto flex flex-col md:flex-row flex-nowrap justify-center items-center sm:gap-5 bg-surface shadow-lg shadow-slate-400 rounded-xl">
          <section className="w-fit p-5 prose order-2 md:order-1">
            <h2 className="text-center md:text-end">Gestão Auto Escola transformou minha auto escola.</h2>
            <p className="font-medium indent-5 text-lg sm:text-base text-pretty">
              O sistema agilizou a marcação de aulas e reduziu desordens.
              As mensagens automáticas garantem que alunos e instrutores estão sempre cientes, diminuindo abstenções e aumentando pontualidade.
            </p>
          </section>
          <section className="w-96 mx-auto p-5 text-center order-1 md:order-2 grayscale-[50%]">
            <Image
              src="/img/home-testimonial-pic-500-500.png"
              width={500}
              height={500}
              alt="Foto close-up de uma mulher de negócios ruiva sorrindo"
              className="mask mask-parallelogram"
            />
            <p className="text-end -mt-4 mb-2 w-fit mx-auto text-lg sm:text-">Rafaella Freitas</p>
            <div className="rating not-prose order-3">
              <input type="radio" name="rating-1" className="mask mask-star bg-primary" checked disabled />
              <input type="radio" name="rating-1" className="mask mask-star bg-primary" checked disabled />
              <input type="radio" name="rating-1" className="mask mask-star bg-primary" checked disabled />
              <input type="radio" name="rating-1" className="mask mask-star bg-primary" checked disabled />
              <input type="radio" name="rating-1" className="mask mask-star bg-primary" checked disabled />
            </div>
          </section>
        </div>
      </div>

      <div className="max-w-full">
        <div className="prose">
          <h1 className="text-center">Nossos Clientes</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-16 mt-5">
          <div className="lg:grayscale lg:hover:grayscale-0">
            <Image
              src="/img/home-logo-1-200-200.png"
              width={200}
              height={200}
              alt="Business Logo"
              style={{ height: "90px", width: "auto" }}
            />
          </div>
          <div className="lg:grayscale lg:hover:grayscale-0">
            <Image
              src="/img/home-logo-2-200-200.png"
              width={200}
              height={200}
              alt="Business Logo"
              style={{ height: "90px", width: "auto" }}
            />
          </div>
          <div className="lg:grayscale lg:hover:grayscale-0">
            <Image
              src="/img/home-logo-3-200-200.png"
              width={200}
              height={200}
              alt="Business Logo"
              style={{ height: "90px", width: "auto" }}
            />
          </div>
          <div className="lg:grayscale lg:hover:grayscale-0">
            <Image
              src="/img/home-logo-4-200-200.png"
              width={200}
              height={200}
              alt="Business Logo"
              style={{ height: "90px", width: "auto" }}
            />
          </div>
          <div className="lg:grayscale lg:hover:grayscale-0">
            <Image
              src="/img/home-logo-5-200-200.png"
              width={200}
              height={200}
              alt="Business Logo"
              style={{ height: "90px", width: "auto" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}