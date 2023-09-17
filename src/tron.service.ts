import { Injectable } from '@nestjs/common';
import { TronWeb } from 'tronweb';

@Injectable()
export class TronService {
  private tronWeb: TronWeb;

  constructor() {
    // Initialize TronWeb with a full node API URL and a solidity node API URL
    this.tronWeb = new TronWeb({
      fullHost: 'https://api.trongrid.io',
      solidityNode: 'https://api.trongrid.io',
      headers: { "TRON-PRO-API-KEY": '95f06e03-63c8-4254-b135-e84679285e41' },
    });
  }

  async createWallet(): Promise<any> {
    const newWallet = await this.tronWeb.createAccount();
    return newWallet;
  }

  async getBalance(address: string): Promise<number> {
    const balance = await this.tronWeb.trx.getBalance(address);
    return balance;
  }

  async sendTRX(sender: string, recipient: string, amount: number): Promise<any> {
    const transaction = await this.tronWeb.trx.sendTransaction(
      recipient,
      amount,
      sender,
    );
    return transaction;
  }
}
