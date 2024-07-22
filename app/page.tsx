import Image from "next/image";
export default function Home() {
  return (
    <main className="flex-grow">
      {/* //STYLE create margins and padding */}
      <div className="container mx-auto max-w-full flex flex-row flex-nowrap justify-evenly">
        {/* //IMG create images for hero section */}
        <section className="w-80 h-80 border-2 border-black">
          01
        </section>
        <section className="w-80 h-80 border-2 border-black">
          02
        </section>
      </div>
      <div className="container max-w-7xl mx-auto flex flex-row flex-wrap justify-center gap-4">
        {/* //CONTENT Create Images and content for cards */}
        <article className="card card-compact w-48 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <div className="badge badge-secondary">NEW</div>
              Feature
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus.</p>
          </div>
          <figure>
            <Image
              src="/img/homepage-card-img-340-180.png"
              width={340}
              height={180}
              alt="Placeholder"
            />
          </figure>
        </article>
        <article className="card card-compact w-48 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <div className="badge badge-secondary">NEW</div>
              Feature
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus.</p>
          </div>
          <figure>
            <Image
              src="/img/homepage-card-img-340-180.png"
              width={340}
              height={180}
              alt="Placeholder"
            />
          </figure>
        </article>
        <article className="card card-compact w-48 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <div className="badge badge-secondary">NEW</div>
              Feature
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus.</p>
          </div>
          <figure>
            <Image
              src="/img/homepage-card-img-340-180.png"
              width={340}
              height={180}
              alt="Placeholder"
            />
          </figure>
        </article>
        <article className="card card-compact w-48 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <div className="badge badge-secondary">NEW</div>
              Feature
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus.</p>
          </div>
          <figure>
            <Image
              src="/img/homepage-card-img-340-180.png"
              width={340}
              height={180}
              alt="Placeholder"
            />
          </figure>
        </article>
      </div>
      <div className="container mx-auto max-w-full flex flex-row flex-nowrap justify-evenly">
        {/* //CONTENT Create image for section */}
        <section className="w-80 h-80 border-2 border-black">
          01
        </section>
        <section className="w-80 h-80 border-2 border-black">
          02
        </section>
      </div>
      <div className="containter flex flex-row flex-wrap justify-center content-center items-center gap-4 mx-auto max-w-full bg-primary h-60 ">
        <div className="w-3/12">
          <h1 className="prose-h1">Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio corporis necessitatibus, possimus temporibus soluta tenetur labore consequatur!</p>
        </div>
        <div className="w-3/12 ">
          <button className="btn self-center">Click me</button>
        </div>
      </div>
    </main>
  );
}