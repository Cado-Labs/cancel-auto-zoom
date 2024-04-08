import getViewport from "./getViewport"

const noScalableString = "user-scalable=no"

export default function cancelAutoZoom () {
  try {
    const meta = getViewport()
    const { content } = meta

    if (content.includes(noScalableString)) return

    meta.content = `${content},${noScalableString}`
    window.top.postMessage({ event: "zoom", payload: meta.content }, "*")

    requestAnimationFrame(() => {
      meta.content = content
      window.top.postMessage({ event: "zoom", payload: content }, "*")
    })
  } catch (error) {}
}
