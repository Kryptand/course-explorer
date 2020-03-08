import { BaseEntity } from '../common/base-entity';
import { Course } from '@course-management/api-interfaces';
import {
  AfterLoad,
  Column,
  Entity,
  Tree,
  TreeChildren,
  TreeLevelColumn,
  TreeParent
} from 'typeorm';
@Entity()
@Tree('materialized-path')
export class CourseEntity extends BaseEntity implements Course {
  @Column({ nullable: false, type: 'text' })
  courseType: string;
  @Column({ type: 'text' })
  title: string;
  @Column({ type: 'text' })
  type: 'structure' | 'profile' | 'course' | 'stage';
  @TreeChildren()
  children: Course[];
  @TreeParent()
  parent: Course;
  @Column({ type: 'integer', default: 0 })
  hasChildren: boolean;
  @Column({ nullable: true })
  parentId: number;
}
