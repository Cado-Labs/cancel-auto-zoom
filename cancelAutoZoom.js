import getViewport from "./getViewport"
import { setViewport } from "./setViewport"

const noScalableString = "user-scalable=no"

export default function cancelAutoZoom () {
  try {
    const meta = getViewport()
    const { content } = meta

    if (content.includes(noScalableString)) return

    meta.content = `${content},${noScalableString}`
    setViewport(meta.content)

    requestAnimationFrame(() => {
      meta.content = content
      setViewport(content)
    })
  } catch (error) {}
}
