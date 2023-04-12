export class DatosTabla {
  public crypto_id: string;
  public cryptoname: string;
  public value: string;
  public asset: string;
  public stock: number;
  constructor(
    crypto_id: string,
    cryptoname: string,
    value: string,
    asset: string,
    stock: number
  ) {
    this.crypto_id = crypto_id;
    this.cryptoname = cryptoname;
    this.value = value;
    this.asset = asset;
    this.stock = stock;
  }
}
