import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/37074720?v=4" alt="Clovijan Rocha"/>
            <div>
              <strong>Clovijan Rocha</strong>
              <span>Geografia</span>
            </div>
          </header>

          <p>
            Entusiatas das melhores tecnologias de Geografia avançada
            <br/><br/>
            Engajado com os alunos e preocupado com o apredizado de todos, buscando o máximo de experiência.
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ 90,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp"/>
              Entrar em contato 
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;