import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    private books = [
        {name:"C programming",price:"$300"},
        {name:"C programming",price:"$300"},
        {name:"C programming",price:"$300"},
        {name:"C programming",price:"$300"},
        {name:"C programming",price:"$300"},
        {name:"C programming",price:"$300"},
        {name:"C programming",price:"$300"},
        {name:"C programming",price:"$300"},
        {name:"C programming",price:"$300"},
        {name:"C programming",price:"$300"},
    ]
    public allBooks = () => {
        return this.books;
    }
}
