import Container from "./components/Container"

export default function App() {
  return (
    <Container>
      <div>
          <h1>Olá bem vindo ao meu portfólio</h1>
          <p>Aqui vou falar um pouco sobre mim, minha experiência e objetivos que possuo para o futuro</p>

          <p>Para dar uma leve apresentação para vocês aqui vai:</p>

          <p>Meu nome é Jhonatan e tenho 20 anos completos, Estou atualmente cursando o meu 2° semestre indo para o 3° semestre na Faculdade Impacta, no curso de Análise e Desenvolvimento de Sistemas.</p>

          <p>Possuo experiência com algumas linguagens tais como:</p>
          
          <div>
            <h3>Front-End</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>NextJs</li>
            </ul>
          </div>

          <div>
            <h3>Back-End</h3>
            <ul>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>PHP</li>
              <li>Python</li>
            </ul>
          </div>

          <div>
            <h3>Banco de Dados</h3>
            <ul>
              <li>MySQL</li>
              <li>PhpMyAdmin</li>
            </ul>
          </div>

          <div>
            <h3>Outros</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Figma</li>
              <li>Postman</li>
              <li>Insomnia</li>
            </ul>
          </div>
      </div>
    </Container>
  )
}