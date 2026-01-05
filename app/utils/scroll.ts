import type { Ref, ComponentPublicInstance } from 'vue'
import { nextTick } from 'vue'

/**
 * Scrolls the active tab into view within a tabs container
 * @param tabsRef Reference to the tabs component
 */
export const scrollToActiveTab = (tabsRef: Ref<ComponentPublicInstance | null | undefined>) => {
  return new Promise<void>((resolve) => {
    nextTick(() => {
      if (tabsRef.value) {
        const tabsList = tabsRef.value.$el.querySelector('[role="tablist"]')
        const activeTabElement = tabsList?.querySelector(`[data-state="active"]`)

        if (activeTabElement && tabsList) {
          activeTabElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          })
        }
      }
      resolve()
    })
  })
}

/**
 * Scrolls any element into view
 * @param elementRef Reference to the element or component to scroll to
 * @param options Scroll options (behavior, block, inline)
 * @returns Promise that resolves when scrolling is complete
 */
export const scrollToElement = (
  elementRef: Ref<HTMLElement | ComponentPublicInstance | null | undefined>,
  options: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
  }
) => {
  console.debug('scrollToElement', elementRef.value, options)
  return new Promise<void>((resolve) => {
    nextTick(() => {
      if (elementRef.value) {
        // Handle both HTML elements and Vue components
        const element = elementRef.value instanceof HTMLElement
          ? elementRef.value
          : '$el' in elementRef.value
            ? elementRef.value.$el
            : null

        if (element && element.scrollIntoView) {
          element.scrollIntoView(options)
        }
      }
      resolve()
    })
  })
}
