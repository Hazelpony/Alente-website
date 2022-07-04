import "./index.css";
import bebemamando from "../../../Imagens/IMG-20220702-WA0011.jpg";
import alente1 from "../../../Imagens/IMG-20220702-WA0020.jpg";
import alente2 from "../../../Imagens/IMG-20220702-WA0021.jpg";

const HistInicio = () => {
  
  const imgs = [alente1, alente2, alente1, alente2]

  return(
    <>
	<main>
	  <section className="secaohistoria">
	    <article className="imagem1"><img src={bebemamando} alt="bebê mamando"/></article>
	    <article className="historia">
		<h1>Nossa história</h1>
		<p>O Instituto Alente inicialmente nasceu de uma necessidade do banco de leite em diversas regiões de pernambuco, principalmente no Recife, onde foi detectado uma grande escacez de leite materno para bebês prematuros, mães impossibilitadas de amamentar, puérperias e afins. Com isso,</p>
		<p>Veja mais sobre nosso começo: <a href="http://globoplay.globo.com/v/8476809" target="_blank" rel="noreferrer noopener">http://globoplay.globo.com/v/8476809</a></p>
	    </article>
	    <article className="imagem2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqbAtzSK8QupsEEbmjFr4NT43Ml7uzdiT-wA&usqp=CAU" alt="bebê mamando"/></article>
	  </section>
	  <section className="secaoimagem">
	    <article>{imgs.map((img) => {return(<img src={img} alt="instituto alente"/>)}}</article>
	  </section>
	</main>
    </>
  )
}

export default HistInicio;
