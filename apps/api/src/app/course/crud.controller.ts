import { CourseEntity } from './course.entity';
import { Crud } from '@nestjsx/crud';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { CourseService } from './course.service';

@Crud({
  model: {
    type: CourseEntity
  }
})
@Controller('course')
export class CourseController {
  constructor(public service: CourseService) {}
  @Get('tree')
  asTree() {
    return this.service.asTree();
  }
  @Get('roots')
  roots() {
    return this.service.getRoots();
  }
  @Get('descendants')
  descendantsFor(@Query() query) {
    return this.service.getDescendantsFor(query);
  }
  @Get('ancestors')
  ancestorsFor(@Query() query) {
    return this.service.getAncestorsFor(query);
  }
  @Get('search')
  search(@Query('q') query) {
    console.debug(query);
    return this.service.search(query);
  }
}
