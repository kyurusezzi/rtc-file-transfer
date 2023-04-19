import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesModule } from './modules/files/files.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from './constants/constants';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
      }),
    }),
    JwtModule.register({
      global: true,
      secret: jwtSecret,
      signOptions: { expiresIn: '0' },
    }),
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
