import cancelAutoZoom from "./cancelAutoZoom"
import { tagNames } from "./constants"
import deepListenerWrapper from "./deepListenerWrapper"

const isInteractive = element =>
  tagNames.includes(element.tagName.toLowerCase())

const blockZoomForMouseDown = ({ target }) => {
  if (target && isInteractive(target)) {
    cancelAutoZoom()

    deepListenerWrapper("blur", cancelAutoZoom, isInteractive)(target)
  }
}

export default function cancelAutoZoomInInputs () {
  document.addEventListener("mousedown", blockZoomForMouseDown)
}
