import getViewport from "./getViewport"

export function handleMeta (metaContent) {
  const meta = getViewport()

  if (!meta) {
    const meta = document.createElement("meta")
    meta.name = "viewport"
    document.getElementsByTagName("head")[0].appendChild(meta)
    meta.content = metaContent
    return
  }

  meta.content = metaContent
}
