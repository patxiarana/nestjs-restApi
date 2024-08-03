import { Controller, Get,Post,Body, Param,Put, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBoockDTO } from './dto/create-book.dto';
import { updateBoockDTO } from './dto/update-book.dto';
@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get() 
    async getAllBooks(): Promise<Book[]> {
      return this.bookService.findAll();
    }

   @Post()
   async createBook(
    @Body()
    book : CreateBoockDTO
   ) : Promise<Book> { 
   return this.bookService.create(book);
   }

   @Get(':id') 
   async getBook(@Param('id') id:string): Promise<Book> {
     return this.bookService.findById(id);
   }

   @Put(':id')
   async updateBook(
    @Param('id') id:string,
    @Body()
    book : updateBoockDTO
   ) : Promise<Book> { 
   return await this.bookService.updateById(id,book);
   }

   @Delete(':id') 
   async deleteBook(@Param('id') id:string): Promise<Book> {
     return this.bookService.deleteById(id);
   }

}
