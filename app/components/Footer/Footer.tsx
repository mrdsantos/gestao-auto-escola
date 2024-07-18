const Footer = () => {
  return (
    <footer className="bg-primary p-5 mt-5">
      <div className="w-4/6 mx-auto flex flex-col flex-nowrap items-center text-center">
        <p className="font-bold prose">
          Gestão Auto Escola
            <br />
            A gestão que sua auto escola precisa. Um sistema completo com site institucional e área administrativa para sua auto escola</p>

          <p className="prose">Copyright © ${new Date().getFullYear()} - Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
