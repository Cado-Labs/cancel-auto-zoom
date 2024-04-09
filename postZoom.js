export function postZoom (metaContent) {
  window.top.postMessage({ event: "zoom", payload: metaContent }, "*")
}
