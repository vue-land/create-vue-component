import { mount } from 'vue-test-utils'
import <%= pascalCasedComponentName %> from './'

test('it works', () => {
  const wrapper = mount(<%= pascalCasedComponentName %>)
  expect(wrapper.isVueInstance()).toBe(true)
})
