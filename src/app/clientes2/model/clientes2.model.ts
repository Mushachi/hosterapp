export interface Cliente {
    id: number;
    nombre: string;
    correo: string;
    tel: string;
    grupo: number;
}

export interface Grupo {
    id: number;
    nombre: string;
}