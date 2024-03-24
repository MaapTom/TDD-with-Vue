import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'

describe('HelloWordle', () => {
  it('renders properly', () => {
    const wrapper = mount(WordleBoard, { props: { msg: 'Hello Wordle' } })
    expect(wrapper.text()).toContain('Hello Wordle')
  })
})
