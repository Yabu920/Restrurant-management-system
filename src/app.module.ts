import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { MenuModule } from './menu/menu.module';
import { OrderModule } from './orders/order.module';
import { BookingModule } from './booking/booking.module';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'public')}),
    MongooseModule.forRoot('mongodb+srv://CafeSystem:Cafe1234@cafesystem.lg8kkoy.mongodb.net/test', {
      retryWrites: true,
      appName: 'CafeSystem',
    }),
    AuthModule,
    UserModule,
    MenuModule,
    OrderModule,
    BookingModule,
  ],
})
export class AppModule {}
