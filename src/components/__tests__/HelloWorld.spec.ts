import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWordle', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Wordle' } })
    expect(wrapper.text()).toContain('Hello Wordle')
  })
})
