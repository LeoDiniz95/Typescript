module tsbr{
    export interface IStudent{
        name:   string;
        email:  string;
        age?:  number; // O '?' deixa a variável como não obrigatória
        register(): void;
    }
}