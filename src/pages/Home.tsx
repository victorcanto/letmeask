import illustrationImage from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

export function Home() {
  return (
    <div>
      <aside>
        <img
          src={illustrationImage}
          alt='Ilustração simbolizando perguntas e respostas'
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <div>
        <img src={logoImage} alt='Logo Letmeask' />
        <button>
          <img src={googleIcon} alt='Icone do Google' />
          Crie uma sala com o Google
        </button>
        <div>ou entre em uma sala</div>
        <form>
          <input type='text' placeholder='Digite o código da sala' />
          <button type='submit'>Entrar na sala</button>
        </form>
      </div>
    </div>
  );
}
