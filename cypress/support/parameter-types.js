import { defineParameterType } from '@badeball/cypress-cucumber-preprocessor';

defineParameterType({
  name: 'linkText',
  regexp: /"([^"]*)"/,
  transformer: (s) => s,
});
