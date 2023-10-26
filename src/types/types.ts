/* 
aqui pretendo criar algumas definições de classes
por hora o objetivo é basico e a idéia é ter uma página que demonstra os principais atributos de cada personagem
aos poucos vou aprimorando para a adição de atributos por personagem de acordo com as builds de habilidades e futuramente os sets de armas e armaduas
*/
class Classe{
    nome: string;
    forca: number;
    inteligencia: number;
    destreza: number;
    determinacao: number;

    constructor(nome: string, forca: number, inteligencia: number, destreza: number, determinacao: number){
        this.nome = nome;
        this.forca = forca;
        this.inteligencia = inteligencia;
        this.destreza = destreza;
        this.determinacao = determinacao;
    }

}

