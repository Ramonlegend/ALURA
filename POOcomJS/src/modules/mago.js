export class Mago {
  elementoMagico;
  levelMagico;
  inteligencia;

  constructor(
    nome,
    vida,
    mana,
    level,
    tipo,
    descricao,
    elementoMagico,
    levelMagico,
    inteligencia,
  ) {
    this.nome = nome;
    this.vida = vida;
    this.mana = mana;
    this.level = level;
    this.tipo = tipo;
    this.descricao = descricao;
    this.elementoMagico = elementoMagico;
    this.levelMagico = levelMagico;
    this.inteligencia = inteligencia;
  }
  obterInsignea() {
    return `Insignea de ${this.tipo}`;
  }
}
