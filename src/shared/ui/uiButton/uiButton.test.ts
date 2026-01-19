import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UIButton from './UiButton.vue'
import UiSvg from '@/shared/ui/uiSvg/UiSvg.vue'

const renderButton = (props = {}) => {
  return mount(UIButton, {
    props: {
      variant: 'default',
      icon: '',
      iconSize: '30',
      disabled: false,
      ...props,
    },
    slots: {
      default: 'Button text',
    },
    global: {
      components: {
        UiSvg,
      },
    },
  })
}

describe('UIButton', () => {
  it('renders button with text content', () => {
    const wrapper = renderButton()
    expect(wrapper.text()).toContain('Button text')
    expect(wrapper.find('button').classes()).toContain('rounded-xl')
    expect(wrapper.find('button').classes()).not.toContain('rounded-full')
  })

  it('renders button with icon', () => {
    const wrapper = renderButton({
      icon: 'outline/shuffle',
      iconSize: '40',
    })
    const svgProps = wrapper.findComponent(UiSvg).props()
    expect(svgProps.name).toBe('outline/shuffle')
    expect(svgProps.size).toBe('40')
  })

  it('applies correct variant classes', () => {
    const defaultWrapper = renderButton()
    expect(defaultWrapper.find('button').classes()).toContain('bg-green-400')

    // primary variant
    const primaryWrapper = renderButton({ variant: 'primary' })
    expect(primaryWrapper.find('button').classes()).toContain('bg-purple-500')
  })

  it('applies disabled state', () => {
    const wrapper = renderButton({ disabled: true })
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    expect(wrapper.find('button').classes()).toContain('cursor-not-allowed')
    expect(wrapper.find('button').classes()).toContain('bg-slate-700')
  })

  it('emits click event when not disabled', async () => {
    const wrapper = renderButton()
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click when disabled', async () => {
    const wrapper = renderButton({ disabled: true })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('passes aria-label correctly', () => {
    const wrapper = renderButton({
      'aria-label': 'Test button',
      icon: 'test-icon',
    })
    expect(wrapper.find('button').attributes('aria-label')).toBe('Test button')
  })

  it('handles different icon sizes', () => {
    const wrapper = renderButton({
      icon: 'test',
      iconSize: '50',
    })
    expect(wrapper.findComponent(UiSvg).props('size')).toBe('50')
  })

  it('applies correct padding based on icon presence', () => {
    // with icon
    const iconWrapper = renderButton({ icon: 'test' })
    expect(iconWrapper.find('button').classes()).toContain('p-5')

    // without icon
    const textWrapper = renderButton()
    expect(textWrapper.find('button').classes()).toContain('px-4')
    expect(textWrapper.find('button').classes()).toContain('py-3') // ← py-3, не py-3.5
  })
})
