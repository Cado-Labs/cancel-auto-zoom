const defaultContent = "width=device-width,initial-scale=1,maximum-scale=1"

export function setViewport (metaContent = defaultContent) {
  window.top.postMessage({ event: "zoom", payload: metaContent }, "*")
}
