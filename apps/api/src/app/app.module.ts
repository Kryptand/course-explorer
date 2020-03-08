import { Module } from '@nestjs/common';
import { withCache } from './orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from './course/course.module';

@Module({
  imports: [TypeOrmModule.forRoot(withCache), CourseModule],
  controllers: [],
  providers: []
})
export class AppModule {}
