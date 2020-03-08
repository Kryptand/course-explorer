import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CourseEntity } from './course/course.entity';

export const withCache: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'db',
  synchronize: true,
  logging: true,
  cache: {
    type: 'redis',
    options: {
      host: '127.0.0.1',
      port: 6379
    }
  },
  entities: [CourseEntity]
};
