import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductsSchema } from './schema/products.shema';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductsSchema }]),
  ],
})
export class ProductsModule {}
