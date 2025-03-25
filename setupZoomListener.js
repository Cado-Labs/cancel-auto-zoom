import { handleMeta } from "./handleMeta"

export function setupZoomListener () {
  window.addEventListener("message", e => {
    if (e.data?.event === "zoom") {
      handleMeta(e.data.payload)
    }
  })
}
