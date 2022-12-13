import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import { AppModule } from './app.module';


async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname + '/../public'));
  app.setBaseViewsDir(join(__dirname + '/../views'));

  app.setViewEngine('ejs');

  app.enableCors();

  await app.listen(port);
  console.log('My app is running at ' + port);
  console.log(__dirname)
}
bootstrap();
