export interface Empleado {
    id: number;
    nombre: string;
    apellidos: string;
    correo: string;
    clave: string;
    tipo: number;
    activo: number;
}

export interface Tipo {
    id: number;
    nombre: string;
}