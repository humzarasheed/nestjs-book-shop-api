import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService:BooksService) {}

    @Get()
    getAllBooks () {
        
        // console.log("All Books ::: ",this.bookService.allBooks());
        return this.bookService.allBooks();
    }
}
