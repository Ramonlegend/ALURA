import { Personagem } from './modules/personagem.js';
import { PersonagemView } from './components/personagem-view.js';
import { Mago } from './modules/mago.js';

const personagemPedrinho = new Personagem(
  'Pedrinho',
  100,
  50,
  1,
  'Mago',
  'Um mago iniciante.',
);

const personagemJose = new Personagem(
  'José',
  100,
  50,
  5,
  'Arqueiro',
  'Um arqueiro experiente.',
);

const personagemLoiroJose = new Mago(
  'Loiro José',
  100,
  50,
  5,
  'Mago',
  'Um mago experiente',
  'Gelo',
  10,
  100,
);
const personagens = [personagemPedrinho, personagemJose, personagemLoiroJose];

new PersonagemView(personagens).render();

console.log(personagemPedrinho.vida);
