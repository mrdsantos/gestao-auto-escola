const Footer = () => {
  return (
    <footer className="co bg-primary text-primary-content p-5">
      <div className="w-4/6 mx-auto">
        <p className="font-bold text-center">
          Gestão Auto Escola
            <br />
            A gestão que sua auto escola precisa. Um sistema completo com site institucional e área administrativa para sua auto escola</p>

          <p className="text-center">Copyright © ${new Date().getFullYear()} - Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
