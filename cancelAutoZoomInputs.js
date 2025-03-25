import cancelAutoZoom from "./cancelAutoZoom"
import { tagNames } from "./constants"
import deepListenerWrapper from "./deepListenerWrapper"
import { setupZoomListener } from "./setupZoomListener"
import { postZoom } from "./postZoom"

const isInteractive = element =>
  tagNames.includes(element.tagName.toLowerCase())

const blockZoomForMouseDown = ({ target }) => {
  if (target && isInteractive(target)) {
    cancelAutoZoom()

    deepListenerWrapper("blur", cancelAutoZoom, isInteractive)(target)
  }
}

function initiateCancelAutoZoomInInputs () {
  document.addEventListener("mousedown", blockZoomForMouseDown)
}

function removeCancelAutoZoomInInputs () {
  document.removeEventListener("mousedown", blockZoomForMouseDown)
}

export {
  initiateCancelAutoZoomInInputs,
  removeCancelAutoZoomInInputs,
  postZoom,
  setupZoomListener,
}
