"use client"
import Image from "next/image";
import FeatureCardLarge from "./components/FeatureCardLarge/FeatureCardLarge";
import Link from "next/link";
import LottieRedCar from "./components/LottieRedCar/LottieRedCar";

export default function Home() {

  return (
    <main className="flex-grow space-y-14 bg-gradient-circle bg-cover bg-no-repeat">
      <div className="mx-auto image flex flex-row flex-nowrap justify-center px-5 sm:px-10">
        {/* //IMG create images for hero section */}
        <div className="hidden sm:inline-block mr-5 mt-10">
          <LottieRedCar />
        </div>
        <section className="max-w-80 text-center flex flex-col justify-center">
          <h1 className="mb-0 text-complementary-darker font-black text-5xl sm:text-6xl md:text-7xl">Transforme Sua Autoescola</h1>
          <p className="text-start text-2xl text-base-content indent-5 font-semibold">Maximize a eficiência e simplifique a administração da sua <span className="underline underline-offset-2 decoration-complementary-lighter decoration-8">Auto Escola</span> com nosso sistema inovador.</p>
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
          <div className="md:w-5/12 font-bold text-black text-lg lg:pr-10 text-center md:text-start">
            <p>Experimente o Gestão Auto Escola agora e descubra como nossa solução pode transformar sua autoescola.<br />Cadastre-se gratuitamente e aproveite todos os benefícios!</p>
          </div>
          <div className="md:w-3/12">
            <button className="btn btn-wide self-center bg-black text-white border-rose-900 font-bold text-lg hover:bg-rose-950 hover:text-white hover:border-black hover:b-2"><Link href={"/cadastro"}>Cadastre-se</Link></button>
          </div>
        </div>
        <div className="w-full h-2 bg-black"></div>
      </div>
      <div className="w-full bg-gradient-square bg-cover text-custom-content">
        <div className="text-center all-petit-caps mx-auto mb-10">
          <h1 className="text-center text-4xl font-semibold petit-caps mb-5 w-5/12 mx-auto bg-gradient-square bg-cover">O que Nossos Clientes <span className="underline underline-offset-2 decoration-8 decoration-complementary">Diz</span>em</h1>
        </div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item w-full flex flex-col">
            <div className="md:w-11/12 lg:w-6/12 mx-5 mb-10 sm:mx-auto flex flex-nowrap flex-col md:flex-row justify-center items-center sm:gap-5 bg-surface shadow-lg shadow-slate-400 rounded-xl">
              <section className="text-base-content w-4/5 p-5 order-2 md:order-1 ">
                <h2 className="text-center md:text-end font-bold mb-5 text-lg">Gestão Auto Escola Transformou Minha Auto Escola</h2>
                <p className="font-medium indent-5">
                  O sistema agilizou a marcação de aulas e reduziu desordens.
                  As mensagens automáticas garantem que alunos e instrutores estão sempre cientes, diminuindo abstenções e aumentando pontualidade.
                </p>
              </section>
              <section className="mx-auto p-5 text-center order-1 md:order-2 rounded-lg">
                <div className="grayscale-[50%]">
                  <Image
                    src="/img/home-testimonial-pic-1-500-500.png"
                    width={200}
                    height={200}
                    alt=""
                    className="mask mask-parallelogram"
                  />
                </div>
                <p className="text-end -mt-4 mb-2 w-fit mx-auto text-lg">Rafaella Freitas</p>
                <div className="rating order-3 gap-3">
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                </div>
              </section>
            </div>
            <div className="flex justify-center w-full space-x-10">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item w-full flex flex-col">
            <div className="md:w-11/12 lg:w-6/12 mx-5 mb-10 sm:mx-auto flex flex-nowrap flex-col md:flex-row justify-center items-center sm:gap-5 bg-surface shadow-lg shadow-slate-400 rounded-xl">
              <section className="text-base-content w-4/5 p-5 order-2 md:order-1 ">
                <h2 className="text-center md:text-end font-bold mb-5 text-lg">A Digitalização Melhorou Tudo</h2>
                <p className="font-medium indent-5">
                  A digitalização dos documentos facilitou o acesso e organização de informações. O suporte contínuo da equipe foi essencial para nossa adaptação.
                </p>
              </section>
              <section className="mx-auto p-5 text-center order-1 md:order-2 rounded-lg">
                <div className="grayscale-[50%]">
                  <Image
                    src="/img/home-testimonial-pic-3-500-500.png"
                    width={200}
                    height={200}
                    alt=""
                    className="mask mask-parallelogram"
                  />
                </div>
                <p className="text-end -mt-4 mb-2 w-fit mx-auto text-lg">Luiz Alberto Cunha </p>
                <div className="rating order-3 gap-3">
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                </div>
              </section>
            </div>
            <div className="flex justify-center w-full space-x-10">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item w-full flex flex-col">
            <div className="md:w-11/12 lg:w-6/12 mx-5 mb-10 sm:mx-auto flex flex-nowrap flex-col md:flex-row justify-center items-center sm:gap-5 bg-surface shadow-lg shadow-slate-400 rounded-xl">
              <section className="text-base-content w-4/5 p-5 order-2 md:order-1 ">
                <h2 className="text-center md:text-end font-bold mb-5 text-lg">Aumento de Produtividade e Eficiência</h2>
                <p className="font-medium indent-5">
                  Padronizamos tarefas diárias, aumentando a produtividade e eficiência. A interface intuitiva e o excelente suporte técnico facilitaram a rápida adoção da plataforma. Agora, temos mais tempo para focar no desenvolvimento dos alunos, com resultados impressionantes.

                </p>
              </section>
              <section className="mx-auto p-5 text-center order-1 md:order-2 rounded-lg">
                <div className="grayscale-[50%]">
                  <Image
                    src="/img/home-testimonial-pic-2-500-500.png"
                    width={200}
                    height={200}
                    alt=""
                    className="mask mask-parallelogram"
                  />
                </div>
                <p className="text-end -mt-4 mb-2 w-fit mx-auto text-lg">Maria Alice Xavier</p>
                <div className="rating order-3 gap-3">
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                  <input type="radio" name="rating-1" className="mask mask-star bg-blue-800 " checked disabled />
                </div>
              </section>
            </div>
            <div className="flex justify-center w-full space-x-10">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full">
        <div className="text-custom-content">
          <h1 className="text-center text-4xl font-semibold petit-caps mb-10 w-5/12 mx-auto bg-gradient-square bg-cover">Nossos <span className="underline decoration-8 underline-offset-2 decoration-accent-lighter">Clientes</span></h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-16 mt-5">
          <div className="lg:grayscale lg:hover:grayscale-0">
            <Link href="/">
              <Image
                src="/img/home-logo-1-200-200.png"
                width={200}
                height={200}
                alt="Business Logo"
                style={{ height: "90px", width: "auto" }}
              />
            </Link>
          </div>
          <div className="lg:grayscale lg:hover:grayscale-0">
            <Link href="/">
              <Image
                src="/img/home-logo-2-200-200.png"
                width={200}
                height={200}
                alt="Business Logo"
                style={{ height: "90px", width: "auto" }}
              />
            </Link>
          </div>
          <div className="lg:grayscale lg:hover:grayscale-0">
            <Link href="/">
              <Image
                src="/img/home-logo-3-200-200.png"
                width={200}
                height={200}
                alt="Business Logo"
                style={{ height: "90px", width: "auto" }}
              />
            </Link>
          </div>
          <div className="lg:grayscale lg:hover:grayscale-0">
            <Link href="/">
              <Image
                src="/img/home-logo-4-200-200.png"
                width={200}
                height={200}
                alt="Business Logo"
                style={{ height: "90px", width: "auto" }}
              />
            </Link>
          </div>
          <div className="lg:grayscale lg:hover:grayscale-0">
            <Link href="/">
              <Image
                src="/img/home-logo-5-200-200.png"
                width={200}
                height={200}
                alt="Business Logo"
                style={{ height: "90px", width: "auto" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}