import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './course.entity';
import { CourseService } from './course.service';
import { CourseController } from './crud.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  providers: [CourseService],
  exports: [CourseService],
  controllers: [CourseController]
})
export class CourseModule {}
