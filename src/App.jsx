import { useState } from "react";
import "./App.css";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp, FaMailchimp, FaMailBulk } from "react-icons/fa";
import { useRef } from "react";
import logo from '/src/assets/logogotas_final.png'
import perfil from '/src/assets/isabela2.jpg'
import bach from '/src/assets/bach.jpg'
import bach2 from '/src/assets/bach2.png'
import abertura from '/src/assets/abertura.png'
import conste from '/src/assets/const.png'
import pono from '/src/assets/pono.png'
import reiki from '/src/assets/reiki.png'
import mandala from '/src/assets/mandalas.png'
import access from '/src/assets/access.png'
import face from '/src/assets/face.png'
import radiestesia from '/src/assets/radiestesia.png'
import mesa from '/src/assets/mesa.png'

function App() {
  const tabs = [0,1,2,3,4,5,6,7,8,9,10];
  const totalTabs = tabs.length -1;
  const [tabAtiva, setTabAtiva] = useState(0);
  const tabsRef = useRef(null);
  const scrollLeft = () => {
    tabsRef.current.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = () => {
    tabsRef.current.scrollBy({ left: 150, behavior: "smooth" });
  };

  return (
    <div className="container">

      <header className="header">
        <div className="header_left">
          <h2>Isabella Gomes</h2>
          <p>Terapeuta Integrativa</p>
        </div>

        <div className="header_center">
          <img src={logo} alt="Logo" className="logo" />
          <p className = "logo_text">Gotas de Amor</p>
        </div>

        <div className="header_right">
          <a href="https://instagram.com/isabelaaparecidagomesda"><FaInstagram className="icon" /><span>Instagram</span></a>
          <a href="https://www.facebook.com/igomesdacruz"><FaFacebook className="icon" /><span>Facebook</span></a>
          <a href="https://www.youtube.com/@isabelagomes-gotasdeamor-f6218"><FaYoutube className="icon" /><span>YouTube</span></a>
          <a href="https://wa.me/qr/MADETGSB22NPC1"><FaWhatsapp className="icon" /><span>WhatsApp</span></a>
          <a href=""><FaMailBulk className="icon" /><p>iagomescruz2@gmail.com</p></a>
        </div>
      </header>

      {/* Tabs */}
      <div className="tabs_wrapper">
        <button className="arrow" onClick={()=>(scrollLeft(), setTabAtiva((prev) => (prev) === 0 ? totalTabs : (prev) - 1))}>
          <p> ⏪ </p>
        </button>

        <div className="tabs_scroll" ref={tabsRef}>
          <button className={tabAtiva === 0 ? "active" : ""} onClick={() => setTabAtiva(0)}>
            Sobre Terapias Integrativas
          </button>
          <button
            className={tabAtiva === 1 ? "active" : ""}
            onClick={() => setTabAtiva(1)}
          >
            Sobre mim
          </button>
          <button
            className={tabAtiva === 2 ? "active" : ""}
            onClick={() => setTabAtiva(2)}
          >
            Florais de Bach
          </button>
          <button
            className={tabAtiva === 3 ? "active" : ""}
            onClick={() => setTabAtiva(3)}
          >
            Constelação Familiar
          </button>
          <button
            className={tabAtiva === 4 ? "active" : ""}
            onClick={() => setTabAtiva(4)}
          >
            Ho'oponopono
          </button>
          <button
            className={tabAtiva === 5 ? "active" : ""}
            onClick={() => setTabAtiva(5)}
          >
            Mandalas
          </button>
          <button
            className={tabAtiva === 6 ? "active" : ""}
            onClick={() => setTabAtiva(6)}
          >
            Reiki
          </button>
          <button
            className={tabAtiva === 7 ? "active" : ""}
            onClick={() => setTabAtiva(7)}
          >
            Barras de Access
          </button>
          <button
            className={tabAtiva === 8 ? "active" : ""}
            onClick={() => setTabAtiva(8)}
          >
            Facelift Energético
          </button>
          <button
            className={tabAtiva === 9 ? "active" : ""}
            onClick={() => setTabAtiva(9)}
          >
            Radiestesia Terapêutica
          </button>
          <button
            className={tabAtiva === 10 ? "active" : ""}
            onClick={() => setTabAtiva(10)}
          >
            Mesa Radiônica AOV
          </button>
        </div>

        <button className="arrow" onClick={()=>(scrollRight(), setTabAtiva((prev) => prev === totalTabs ? 0 : prev + 1))}>
          <p>⏩</p>
        </button>
      </div>

      {/* Conteúdo da tab */}
      <div className="tab_content_box">
        {tabAtiva === 0 && (
          <div>
            <h2>Sobre as terapias...</h2>
            <p><br/>As Terapias Integrativas são cuidados que olham para você como um todo - corpo, mente, emoções e energia. 
Elas oferecem abordagens complementares que trazem mais equilíbrio, bem-estar, autoconhecimento, de forma natural, para promover o bem-estar físico, mental e emocional.
 Ao invés de focar apenas nos sintomas, as Terapias Integrativas auxiliam a  encontrar e cuidar da causa raiz do sintoma ou do desafio para  tratar a pessoa como um todo, buscando o equilíbrio e a harmonia.
Essas práticas podem ser utilizadas em conjunto com a medicina convencional para otimizar os resultados e melhorar a qualidade de vida. 
</p>
          <img src={abertura} className="perfil"></img>
<h2><br/>Todas as práticas integrativas que ofereço estão nesta página! Sinta-se à vontade para explorar, aprender e entrar em contato para agendar uma sessão!</h2>
          <p><br/>!! Não substituem tratamentos médicos, contudo,  complementam, apoiam e otimizam processos de melhora e transformação !!</p>
          </div>
        )}
        {tabAtiva === 1 && (
          <div>
            <h2>Sobre mim...</h2>
            <p><br/>Prazer! Meu nome é Isabella Gomes. 

Filha, Esposa, Mãe, Profissional...

O que mais é possível?

Amo estar em contato com a natureza!

Adoro desenhar, pintar, ler e passear com a família.

Minha formação: Pedagogia, com especialização em
Psicopedagogia.

Fui professora de Ensino Fundamental e Educação
Infantil por mais de duas décadas, quando atendi às
crianças e suas famílias.

Sou praticante e facilitadora de Práticas Integrativas. </p>
            <img src={perfil} className="perfil"></img> 
          </div>
          )}
        {tabAtiva === 2 && (
          <div>
            <h2>Sobre os Florais de Bach...</h2>
            <img src={bach} className="perfil"></img>
            <p><br/>Florais de Bach são essências extraídas de flores, que ajudam a equilibrar as emoções e a lidar com diferentes estados mentais e emocionais. São 38 florais diferentes, cada um associado a uma emoção específica. 
Ao relatar a situação que está incomodando, o terapeuta floral indicará as essências ideais para tratar o cliente.</p>
            <img src={bach2} className="perfil"></img>
          </div>
          )}
        {tabAtiva === 3 && (
          <div>
            <h2>Sobre Constelação Familiar...</h2>
            <p><br/>A constelação familiar é uma abordagem terapêutica que busca identificar e resolver padrões de comportamento e dinâmicas familiares disfuncionais, que podem estar causando sofrimento no presente.  Visa trazer à tona as dinâmicas ocultas que influenciam nossos relacionamentos e a nossa vida. 
A partir do momento que a raiz desta dinâmica funcional vem para a consciência, é possível ressignificar, mudar comportamentos e encontrar uma solução para o sistema familiar e para a pessoa que busca auxílio.</p>
            <img src={conste} className="perfil"></img>
          </div>
          )}
        {tabAtiva === 4 && (
          <div>
            <h2>Sobre o Ho'oponopono...</h2>
            <p><br/>O Ho'oponopono é uma técnica havaiana de cura e reconciliação, baseada na repetição de frases como "Sinto muito", "Me perdoe", "Eu te amo" e "Sou grato".  Ajuda a limpar memórias e crenças limitantes, promovendo o perdão, a aceitação e a paz interior.
Além das frases que podem ser utilizadas repetidas vezes, como um mantra, ou repetidas pelo número de vezes que o seu coração desejar, o  Ho’oponopono tem outras ferramentas que auxiliam as pessoas a encontrar a paz.</p>
            <img src={pono} className="perfil"></img>
          </div>
          )}
        {tabAtiva === 5 && (
          <div>
            <h2>Sobre as Mandalas...</h2>
            <p><br/>Mandalas são desenhos geométricos que possuem um significado simbólico e podem ser utilizados para meditação, autoconhecimento e cura.
A criação ou contemplação de mandalas pode promover o relaxamento, a concentração e a expressão criativa.</p>
            <img src={mandala} className="perfil"></img>
          </div>
          )}
        {tabAtiva === 6 && (
          <div>
            <h2>Sobre o Reiki...</h2>
            <p><br/>O Reiki é uma terapia de imposição de mãos que canaliza energia universal para promover o equilíbrio energético do corpo, aliviando o estresse, a dor e outros sintomas. O Reiki pode ser utilizado para complementar outros tratamentos médicos e terapêuticos.</p>
            <img src={reiki} className="perfil"></img>
          </div>
          )}
        {tabAtiva === 7 && (
          <div>
            <h2>Sobre as Barras de Access...</h2>
            <p><br/>As Barras de Access são uma técnica que envolve tocar suavemente em 32 pontos na cabeça, que correspondem a diferentes áreas da vida, como dinheiro, relacionamentos, saúde e criatividade.  O objetivo é liberar padrões de pensamento, crenças e emoções limitantes.</p>
            <img src={access} className="perfil"></img>
          </div>
          )}
        {tabAtiva === 8 && (
          <div>
            <h2>Sobre o FaceLift Energético...</h2>
            <p><br/>O FaceLift Energético é um processo de imposição de mãos que visa rejuvenescer e revitalizar o rosto e o corpo, sem cirurgia ou procedimentos invasivos.  Atua liberando tensões e bloqueios energéticos, promovendo a renovação celular e a melhora da aparência.</p>
            <img src={face} className="perfil"></img>
          </div>
          )}
        {tabAtiva === 9 && (
          <div>
            <h2>Sobre Radiestesia Terapêutica...</h2>
            <p><br/>A radiestesia terapêutica é uma ténica que utiliza instrumentos como o pêndulo e os gráficos para detectar desequilíbrios energéticos no corpo e no ambiente, identificando as causas e oferecendo as soluções para os desequilíbrios. Pode ser utilizada para identificar a causa  e tratar diversos problemas de pessoas, animais e ambientes.</p>
            <img src={radiestesia} className="perfil"></img>
          </div>
          )}
        {tabAtiva === 10 && (
          <div>
            <h2>Sobre as Mesas Radiônicas...</h2>
            <p><br/>Uma Mesa Radiônica combina radiestesia, radiônica e outras técnicas para promover a harmonia e o equilíbrio em diferentes níveis (físico, mental, emocional e espiritual). A Mesa Radiônica pode ser utilizada para limpar energias negativas, desbloquear potenciais e manifestar objetivos. Na mesa “A Origem da Vida” vamos cuidar das memórias de gestação e nascimento.</p>
            <img src={mesa} className="perfil"></img>
          </div>
          )}
      </div>
      <footer className="footer">
        <div className="footer_content">
          <p>Página desenvolvida por Gustavo Gomes da Cruz: <a>gustavo.g.cruz003@gmail.com</a></p>
        </div>
      </footer>
    </div>
    
  );
}

export default App;
