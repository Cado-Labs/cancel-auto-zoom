import getViewport from "./getViewport"

const noScalableString = "user-scalable=no"

export default function cancelAutoZoom () {
  try {
    const meta = getViewport()
    const { content } = meta

    if (content.includes(noScalableString)) return

    meta.content = `${content},${noScalableString}`

    requestAnimationFrame(() => {
      meta.content = content
    })
  } catch (error) {}
}
