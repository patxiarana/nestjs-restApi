import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";

export enum  Category{
   ADVENTURE = 'Adventure',
   ClASSICS = "Classics",
   FANTASY = "Fantasy",
   HISTORY = "History",
}

@Schema({
    timestamps:true,

})

export class Book {
   @Prop()
    title: string;

    @Prop()
    description: string;
    
    @Prop()
    author: string;
    
       
    @Prop()
    price: number;
    
    @Prop()
    category: Category; 

        
    @Prop({type: mongoose.Schema.Types.ObjectId , ref:"user"})
    user: User; 
}

export const BookSchema = SchemaFactory.createForClass(Book);