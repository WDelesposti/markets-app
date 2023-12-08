import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MarketsService } from '../services/markets.service';
import { MarketsController } from '../controllers/markets.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';
import { PriceService } from '../services/price.service';
import { PriceController } from '../controllers/price.controller';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import { LocalStrategy } from '../auth/strategies/local.strategy';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { LoginValidationMiddleware } from '../auth/middlewares/login-validation.middleware';

@Module({
  controllers: [MarketsController, ProductController, PriceController, UserController, AuthController],
  providers: [MarketsService, ProductService, PriceService, UserService, AuthService, LocalStrategy, JwtStrategy],
  imports: [PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),],
  exports: [UserService]
})

export class MarketsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('login');
  }
}


