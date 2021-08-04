import { useState } from 'react';
import './App.css';

function App() {
  const [link, setLink] = useState('https://vivinicius.github.io/performanceResults/users_200_9/index.html');
  const [showResults, setShowResult] = useState(false);

  function handleLink(params) {
    !showResults && setShowResult(true);
    setLink(`https://vivinicius.github.io/performanceResults/${params}/index.html`);
  };

  return (
    <>
    <div class="tittle">
      <h1>RESULTADOS DOS TESTES DE PERFORMANCE MAXXIFORGE</h1>
    </div>

    <div class="container"> 
<div class="allTest"> 
<div class="test1">
  <div class="hardware1">
      <strong>HARDWARE 1:</strong><br /><br />
      API- 0,5x (CPU) 1GB(RAM) <br />
      REDIS T3.MICRO - 0,5GB(RAM) <br />
      BANCO DE DADOS- 2xCPU 2GB(RAM) <br />
    <div class="testTittle1">
      <strong>Teste 1:</strong>
    </div>
    <div class="testDescription1">
      <br />Esse teste foi executado da forma que mantemos X usuarios<br />
      conectados na aplicação durante 5 minutos, os usuarios ficaram <br />
      realizando toda a jornada em looping durante todo o tempo de<br />
      execução dos testes.<br /> <br />
    </div>
  </div>

  <div class="links1">
  <button onClick={() => handleLink('10_usrs_5_min_11')} className="linkButton">10 Usuários</button>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>

  
  </div>
  <div class="testTittle2">
    <strong>Teste 2:</strong>
  </div>
  <div class="testDescription2">
    <br />Esse teste foi executado da forma que subimos X usuarios de uma<br />
    só vez na aplicação, a jornada toda é executada apenas uma vez.<br /> <br />
  </div>

  <div class="links2">
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  
  </div>
</div>
<br />
<div class="test2">
  <div class="hardware1">
      <strong>HARDWARE 2:</strong><br /><br />
      API- 1x (CPU) 2GB(RAM) <br />
      REDIS T3.MICRO - 0,5GB(RAM) <br />
      BANCO DE DADOS- 2xCPU 4GB(RAM) <br />
    <div class="testTittle1">
      <strong>Teste 1:</strong>
    </div>
    <div class="testDescription1">
      <br />Esse teste foi executado da forma que mantemos X usuarios<br />
      conectados na aplicação durante 5 minutos, os usuarios ficaram <br />
      realizando toda a jornada em looping durante todo o tempo de<br />
      execução dos testes.<br /> <br />
    </div>
  </div>

  <div class="links1">
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  </div>

  <div class="testTittle2">
    <strong>Teste 2:</strong>
  </div>
  <div class="testDescription2">
    <br />Esse teste foi executado da forma que subimos X usuarios de uma<br />
    só vez na aplicação, a jornada toda é executada apenas uma vez.<br /> <br />
  </div>

  <div class="links2">
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>
  <a href="https://vivinicius.github.io/performanceResults/10_usrs_5_min_11/index.html"><button className="linkButton">10 Usuários</button></a>

  </div>
  </div>
</div>   
{showResults && (
  <div class="linkGatling">
    <iframe src={link} width="40%" height="500px" />
  </div>
)}
</div>
</>
  );
}

export default App;
