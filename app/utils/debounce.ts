export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay = 500
): T {
  let timeout: ReturnType<typeof setTimeout> | null
  return function (this: object, ...args: unknown[]) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(this, args), delay)
  } as T
}
