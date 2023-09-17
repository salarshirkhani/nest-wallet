import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletController } from './wallet/wallet.controller';
import { TronService } from './tron/tron.service';

@Module({
  imports: [],
  controllers: [AppController, WalletController],
  providers: [AppService, TronService],
})
export class AppModule {}
