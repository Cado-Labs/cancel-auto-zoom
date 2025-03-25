import getViewport from "./getViewport"
import { postZoom } from "./postZoom"

const noScalableString = "user-scalable=no"

export default function cancelAutoZoom () {
  try {
    const meta = getViewport()
    const { content } = meta

    if (content.includes(noScalableString)) return

    meta.content = `${content},${noScalableString}`
    postZoom(meta.content)

    requestAnimationFrame(() => {
      meta.content = content
      postZoom(content)
    })
  } catch (error) {}
}
