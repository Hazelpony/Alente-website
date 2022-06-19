import "./index.css";
import {Link} from "react-router-dom";

const SobreNos = () => {
  //JavaScript aqui se precisar
  return(
    <>
      <main>
	<section className="secaosobrecima">
	  <article>
	    <h1 className="tituloart"><img src="https://cdn-icons.flaticon.com/png/512/1323/premium/1323780.png?token=exp=1655500186~hmac=c03eb8e6012c60f17e6b7844da13185c" alt="foguete"/>Missão</h1>
	    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla purus vel neque lacinia viverra. Cras quis velit fermentum, blandit elit feugiat, tincidunt ipsum.</p>
	  </article>
	  <article className="visao">
	    <h1 className="tituloart"><img src="https://cdn-icons-png.flaticon.com/512/31/31624.png" alt="olho"/>Visão</h1>
	    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla purus vel neque lacinia viverra. Cras quis velit fermentum, blandit elit feugiat, tincidunt ipsum.</p>
	  </article>
	  <article>
	    <h1 className="tituloart"><img src="https://cdn-icons-png.flaticon.com/512/1786/1786971.png" alt="aperto de mãos"/>Valores</h1>
	    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla purus vel neque lacinia viverra. Cras quis velit fermentum, blandit elit feugiat, tincidunt ipsum.</p>
	  </article>
	</section>
	<section className="secaosobrebaixo">
	  <article>
	    <h1>Sobre nós</h1>
	    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget tempor libero. Pellentesque fermentum sodales interdum. Nunc dictum accumsan est at auctor. Cras tincidunt.</p>
	  </article>
	  <article className="ondetudocomecou">
	    <h1>Onde tudo começou</h1>
	    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget tempor libero. Pellentesque fermentum sodales interdum. Nunc dictum accumsan est at auctor. Cras tincidunt.</p>
	    <Link className="linkhistoria" to="/nossahistoria">Saiba mais <img src="https://cdn-icons.flaticon.com/png/512/3047/premium/3047106.png?token=exp=1655569198~hmac=87b8abb8873b5f9013c9a7a9caa146b5" alt="seta"/></Link>
	  </article>
	</section>
      </main>
    </>
  )
}

export default SobreNos;
