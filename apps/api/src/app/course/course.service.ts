import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from './course.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Like, TreeRepository } from 'typeorm';
import { isNullOrUndefined } from 'util';
@Injectable()
export class CourseService extends TypeOrmCrudService<CourseEntity> {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseEntityTreeRepository: TreeRepository<CourseEntity>
  ) {
    super(courseEntityTreeRepository);
  }
  asTree() {
    return this.courseEntityTreeRepository.findTrees();
  }
  getRoots() {
    return this.courseEntityTreeRepository.findRoots();
  }

  getDescendantsFor(id: any) {
    if (JSON.stringify(id) === '{}') {
      return this.getRoots();
    }
    return this.courseEntityTreeRepository.findDescendants(id);
  }
  getAncestorsFor(id: any) {
    return this.courseEntityTreeRepository.findAncestors(id);
  }

  async search(query: string) {
    return this.courseEntityTreeRepository
      .createQueryBuilder('treeEntity')
      .where(qb => {
        const subQuery = qb
          .subQuery()
          // tslint:disable-next-line:no-non-null-assertion
          .select(
            `${this.courseEntityTreeRepository.metadata.targetName}.${
              // tslint:disable-next-line:no-non-null-assertion
              this.courseEntityTreeRepository.metadata.materializedPathColumn!
                .propertyPath
            }`,
            'path'
          )
          .from(
            this.courseEntityTreeRepository.metadata.target,
            this.courseEntityTreeRepository.metadata.targetName
          )
          .where({ title: Like(`%${query}%`) });

        qb.setNativeParameters(subQuery.expressionMap.nativeParameters);

        return `${subQuery.getQuery()} LIKE CONCAT(${'treeEntity'}.${
          // tslint:disable-next-line:no-non-null-assertion
          this.courseEntityTreeRepository.metadata.materializedPathColumn!
            .propertyPath
        }, '%')`;
      })
      .getMany();
  }
}
