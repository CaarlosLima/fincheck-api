import 'dotenv/config';
import 'tsconfig-paths/register';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({ origin: '*' });

  const port = process.env.PORT ? Number(process.env.PORT) : 3333;

  await app.listen(port, '0.0.0.0');
}
bootstrap();
