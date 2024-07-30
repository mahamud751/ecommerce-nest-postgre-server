import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SubCategoryService } from './subCategory.service';
import { SubCategoryController } from './subCategory.controller';

@Module({
  imports: [],
  controllers: [SubCategoryController],
  providers: [SubCategoryService, PrismaService],
})
export class SubCategoryModule {}
