import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'
import { VICTORY_MESSAGE } from '@/settings'
import { DEFEAT_MESSAGE } from '@/settings'

describe('HelloWordle', () => {
  let wordOfTheDay = "TESTS"
  let wrapper: ReturnType<typeof mount>;
  beforeEach(() => {
    wrapper = mount(WordleBoard, { props: { wordOfTheDay } })
  })

  async function playerSubmitsGuess(guess: string) {
    const guessInput = wrapper.find("input[type='text']")
    await guessInput.setValue(guess)
    await guessInput.trigger("keydown.enter")
  }

  test("a victory message appears when the user makes a guess that matches the word of the day", async() => {
    await playerSubmitsGuess(wordOfTheDay)

    expect(wrapper.text()).toContain(VICTORY_MESSAGE)
  })

  test("a defeat message appears if the user makes a guess that is incorrect", async() => {
    await playerSubmitsGuess("WRONG")

    expect(wrapper.text()).toContain(DEFEAT_MESSAGE)
  })

  test("no end-of-game message appears if the user has not yet made a guess", async() => {
    expect(wrapper.text()).not.toContain(VICTORY_MESSAGE)
    expect(wrapper.text()).not.toContain(DEFEAT_MESSAGE)
  })

  test("If a word of the day provided does not have exactly 5 characters, a warning is emitted", async() => {
    console.warn = vi.fn()

    mount(WordleBoard, { props: { wordOfTheDay: "FLY" }})

    expect(console.warn).toHaveBeenCalled();
  })

  test("If the word of the day is not all in uppercase, a warning is emitted", async() => {
    console.warn = vi.fn()

    mount(WordleBoard, { props: { wordOfTheDay: "teste" } })

    expect(console.warn).toHaveBeenCalled()
  })
})
