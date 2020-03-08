module.exports = {
  name: 'course-hero',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/course-hero',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
