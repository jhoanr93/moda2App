export interface Tienda {
    id: string;
    paisTienda: string;
    provinciaTienda: string;
    ciudadTienda: string;
    nombreRecoge: string;
    idRecoge: string;
    numeroRecoge: number;
    FechaEntrega: () => string;
    diaRetencion: number;
    esRegalo: boolean;
  }