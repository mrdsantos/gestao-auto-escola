import Image from "next/image";
import FeatureCardSmall from "../components/FeatureCard/FeatureCardSmall";



export default function sobre() {
  return (
    <main>
      <div className="container w-full max-w-full mx-auto flex flex-col flex-nowrap items-center text-center">
        <section className="max-w-2xl text-center prose">
          <h1>Transforme a gestão da sua auto escola</h1>
        </section>
      </div>
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
            iconName="CheckCheck"
            iconStyle="rounded-full bg-green-400 text-white"
            iconSize="40"
            title="Feature 1"
            description="lorem lipsun dolor siamet"
          />
        </div>
      </div>
    </main>
  );
}