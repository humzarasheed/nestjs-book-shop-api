import { Module,MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';

import * as cors from 'cors';

@Module({
  imports: [],
  controllers: [AppController, UsersController, BooksController],
  providers: [AppService, UsersService, BooksService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
