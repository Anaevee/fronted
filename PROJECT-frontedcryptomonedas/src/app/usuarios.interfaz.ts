export class Usuario {
  public nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
export class registro {
  public nombre: string;
  public email: string;
  public password: number;
  constructor(nombre: string, email: string, password: number) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }
}
