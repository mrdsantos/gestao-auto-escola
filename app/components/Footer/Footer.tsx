import Image from "next/image"

const Footer = () => {
  return (
    <footer className="footer bg-gray-950 p-10 mt-10 flex flex-col items-center">
      <div className="w-10/12 flex flex-row flex-wrap justify-evenly text-white">
        <div className="">
          <div className="footer-title p-5 basis[33.3%] flex flex-col gap-5 opacity-1">
            <Image
            src="/img/android-chrome-512x512.png"
            width={80}
            height={80}
            alt=""
            />
            <p>Gestão Auto Escola</p>
            <p>Orgulhosamente desenvolvendo<br />tecnologias confiáveis desde 2024</p>
          </div>
        </div>
        <div className="basis[33.3%] gap-5">
          <div className="footer-title text-white p-5">
            <nav>
              <h6 className="footer-title text-white">Social</h6>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div className="basis[33.3%] gap-5">
          <div className="footer-title text-white p-5">
              <h6 className="footer-title text-white">Newsletter</h6>
            <form>
              <fieldset className="form-control w-48 lg:w-80">
                <label className="label">
                  <span className="label-text text-white">Digite seu E-mail</span>
                </label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="usuario@email.com"
                    className="input input-bordered join-item" />
                  <button className="btn btn-primary join-item">Cadastrar</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div className="text-white block">
        <p>Copyright © {new Date().getFullYear()} - Todos os direitos reservados</p>
      </div>
    </footer>
  )
}
export default Footer
