import Head from 'next/head'
import Styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={Styles.Container}>
      <Head>
        <title>Canva De Sucesso</title>
      </Head>
      <main className={Styles.Main}>
        <div className={Styles.LogoProduct} >
          <Image src='/logo-cds.png' width='230px' height='230px' />
        </div>
        <div className={Styles.DescriptionProduct}>
          <p>Inscrições abertas para o Canva De Sucesso:</p>
          <p>Destaque-se para seu público com publicações mais atraentes e profissionais</p>
        </div>
        <div className={Styles.DescriptionVideo}>
          <p>Assista ao vídeo e entenda tudo que será aprendido.</p>
          <div></div>
        </div>
        <div className={Styles.DescriptionPayButton}>
          <a href="#">Sim, Eu quero me destacar!!</a>
          <p>De <span>R$197,00</span> por <span>R$97,90</span></p>
          <p>Em até 12x no cartão ou 10% de desconto no boleto</p>
        </div>
      </main>
      <div className={Styles.AboutMe}>
        <div className={Styles.AboutMeContent}>
          <h2>Sobre o professor</h2>
          <div className={Styles.AboutMeDescription}>
            <div className={Styles.AboutMeText}>
              <p><span>Erick Vasconcelos</span> é um jovem empreendedor que aprendeu Design totalmente sozinho. Aos 16 anos ele começou a buscar conhecimento sobre a área e de pouco em pouco foi aperfeiçoando suas técnicas. Hoje ele criou o "Canva de Sucesso", um treinamento onde você vai aprender como criar designs profissionais para sua empresa ou negócio, designs que se destacam aonde são vistos, e assim, aumentar a visibilidade da sua empresa ou negócio.</p>
            </div>
            <div className={Styles.Image}>
              <Image src='/author.png' width='470' height='470' />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.SatisfiedStudents}>
        <p>Alunos Satisfeitos!</p>
        <p>Depoimentos de quem fez o curso</p>
        <div className={Styles.SatisfiedImages}>
          <div className={Styles.Sat1}>
            <div>
              <Image className={Styles.Tes} src='/Sat1.png' width='324' height='230' />
            </div>
            <div>
              <Image src='/Sat2.png' width='324' height='230' />
            </div>
            <div>
              <Image src='/Sat3.png' width='324' height='230' />
            </div>
          </div>
          <div className={Styles.Sat2}>
            <div>
              <Image src='/Sat4.png' width='324' height='230' />
            </div>
            <div>
              <Image src='/Sat5.png' width='324' height='230' />
            </div>
            <div>
              <Image src='/Sat6.png' width='324' height='230' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
