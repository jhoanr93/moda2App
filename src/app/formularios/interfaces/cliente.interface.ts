export interface Cliente {
    id: string;
    nombre: string;
    apellido: string;
    dni: number;    
    tipo_dni: TipoDocumento;
    email: string;
    pais_residencia: TipoPais;
    codigo_postal: number;
    extension: string;
    telefono: number;
}

export enum TipoDocumento {
    CC = "Cedula de Ciudadania",
    TI = "Tarjeta de Identidad",
    CE = "Cedula de Extranjeria"
}

export enum TipoPais {
    COL = "Colombia",
    ARG = "Argentina",
    PER = "Peru",
    MEX = "Mexico"
}

