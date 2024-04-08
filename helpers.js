import getViewport from "./getViewport"

function handleMeta (metaContent) {
  const meta = getViewport()

  meta.content = metaContent
}

function addWindowListener () {
  window.addEventListener("message", e => {
    if (e.data.event === "zoom") {
      handleMeta(e.data.payload)
    }
  })
}

function setInitalMetaContent () {
  window.top.postMessage({
    event: "zoom",
    payload: "width=device-width,initial-scale=1,maximum-scale=1",
  }, "*")
}

export {
  addWindowListener,
  setInitalMetaContent,
}
