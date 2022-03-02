import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      // TCP default
      options: {
        host: 'localhost',
        port: '8877',
      },
    },
  );
  await app.listen();
}
bootstrap();
