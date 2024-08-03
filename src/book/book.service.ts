import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import * as  mongoose from 'mongoose';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ) {}

    async findAll() : Promise<Book[]> {
        const books = await this.bookModel.find();
        return books;
    }
    async create(book: Book): Promise<Book> { 
        const res = await this.bookModel.create(book);
        return res; 
    }

    async findById(id: string): Promise<Book> { 
         try {
        const book = await this.bookModel.findById(id);
        return book
      } catch (error) {
        throw new NotFoundException(error.message)
      }
       
    }

    async updateById(id: string, book:Book): Promise<Book> { 
        try {
       const res = await this.bookModel.findByIdAndUpdate(id,book, {new:true});
       return res
     } catch (error) {
       throw new NotFoundException(error.message)
     }
      
   }
}

