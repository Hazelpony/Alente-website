import "./index.css"

const Cadastro = () => {
  //JavaScript aqui se precisar
  return(
    <main className="altura cadpage">
      <br/>
      <fieldset className="formcad">
        <form>
          <h1>Cadastre-se</h1>
          <div className="form-floating">
	          <div className="form-floating mb-3">
		          <input type="text" className="form-control" id="floatingName" placeholder="your name"/>
		          <label for="floatingName">Nome</label>
	          </div>
		  <div className="form-floating mb-3">
			  <input type="text" className="form-control" id="floatingProfissao" placeholder="Sua profissão"/>
			  <label for="floatingProfissao">Profissão</label>
		  </div>
		  <div className="form-floating mb-3">
			  <input type="date" className="form-control birthinput" id="floatingBirth" placeholder="your birthday"/>
			  <label for="floatingBirth">Nascimento</label>
		  </div>
		  <div className="form-floating mb-3">
			  <input type="tel" className="form-control" id="floatingPhone" placeholder="your phone number"/>
			  <label for="floatingPhone">Seu telefone</label>
		  </div>
		  <div className="form-floating mb-3">
			  <input type="email" className="form-control" id="floatingEmail" placeholder="your email"/>
			  <label for="floatingEmail">Seu email</label>
		  </div>
		  <div className="form-floating mb-3">
			  <textarea className="txtarea" rows="5" placeholder="A família alente precisa de mãos! conte-nos um pouco sobre como você pode agregar à nossa comunidade"></textarea>
		  </div>
		  <div className="form-floating mb-3">
			  <input type="checkbox" className="inputtermoseconds"/>
			  <label className="termoseconds"><a href="#">Aceito termos e condições</a></label>
		  </div>
	        </div>
        </form>
      </fieldset>
      <section>
	<article>
	    <h1>Junte-se a família Alente</h1>
	    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
	    <p>Sed viverra elementum nisi eu finibus. Fusce aliquam dapibus mauris, nec ultrices est eleifend quis.</p>
	    <p>Um membro da família alente faz questão de dar boas vindas e atendê-lo</p>
	</article>
      </section>
    </main>
  )
}

export default Cadastro;
