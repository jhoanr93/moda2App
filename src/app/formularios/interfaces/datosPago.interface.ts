export interface DatosPago {
    tipoTarjeta: string;
    nombreBono?: string;
    nombreBanco: string;
    nombreTarjeta: string;
    numTarjeta: number;
    FechaTarjeta: () => string;
    CVV: number;
    Cuotas: number;
    facturaElectronica: boolean;
    aceptaTerminos: boolean;
  }