
const cache = {}

const deepListenerWrapper = (
  event,
  handler,
  validation,
) => {
  if (!cache[event]) {
    cache[event] = new Map()
  }

  function addDeepListener (target) {
    const wrappedHandler = ({ target: prevTarget }) => {
      handler()
      cache[event].delete(prevTarget)

      requestAnimationFrame(() => {
        const activeElement = document.activeElement

        if (activeElement && validation(activeElement)) {
          addDeepListener(activeElement)
        }
      })
    }

    if (validation(target) && !cache[event].has(target)) {
      cache[event].set(target, wrappedHandler)
      target.addEventListener(event, wrappedHandler, { once: true })
    }
  }

  return addDeepListener
}

export default deepListenerWrapper
