import { Client } from "../Client";

export class ClientManager {
  private clients: Client[] = []

  public getClientsQuantity(): number {
    return this.clients.length;
  }
}