export const config = {
  runner: 'local',
  specs: ['./features/*.feature'],
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: ['./features/step-definitions/*.ts']
  },
  capabilities: [{
    browserName: 'chrome'
  }]
}