export class UsuarioDto {
    constructor(
      public nombre: string,
      public apellidos: string,
      public NIF: string,
      public email: string,
      public telefono: string,
      public sexo: string,
      public conocimientoPagina: string,
      public contrasenia: string,
      public terminos: boolean = false
    ) {}
  }
  