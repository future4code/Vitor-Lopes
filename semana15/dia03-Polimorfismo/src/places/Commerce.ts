import { Place } from "../Place";

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }
  public geFloorsQuantity(): number {
    return this.floorsQuantity
  }
}