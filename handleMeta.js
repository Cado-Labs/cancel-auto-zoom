import getViewport from "./getViewport"

export function handleMeta (metaContent) {
  let meta = getViewport()

  if (!meta) {
    meta = document.createElement("meta")
    meta.name = "viewport"
    document.head.appendChild(meta)
  }

  meta.content = metaContent
}
