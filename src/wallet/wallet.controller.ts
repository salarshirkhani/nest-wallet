import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TronService } from '../tron/tron.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly tronService: TronService) {}

  @Get('create')
  async createWallet(): Promise<any> {
    const newWallet = await this.tronService.createWallet();
    return newWallet;
  }

  @Get('balance/:address')
  async getBalance(@Param('address') address: string): Promise<number> {
    const balance = await this.tronService.getBalance(address);
    return balance;
  }

  @Post('send')
  async sendTRX(@Body() body): Promise<any> {
    const { sender, recipient, amount } = body;
    const transaction = await this.tronService.sendTRX(sender, recipient, amount);
    return transaction;
  }
}
