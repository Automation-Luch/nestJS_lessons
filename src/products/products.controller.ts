import { UpdateProductDto } from './dto/update-product.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Redirect,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './schema/products.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Promise<Product[]> {
    return this.productsService.getAll();
  }

  @Get(':id')
  // @Redirect('/', 301)
  getOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('origin', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  update(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.productsService.remove(id);
  }
}
