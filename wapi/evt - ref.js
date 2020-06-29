Event
Event.bubbles
Event.cancelBubble
Event.cancelable
Event.composed
Event.currentTarget
Event.deepPath !
Event.defaultPrevented
Event.eventPhase
Event.explicitOriginalTarget !
Event.originalTarget !
Event.returnValue
Event.srcElement !
Event.target
Event.timeStamp
Event.type
Event.isTrusted
Event.composedPath()
Event.preventDefault()
Event.stopImmediatePropagation()
Event.stopPropagation()
var event = new Event(typeArg='', ?eventInit={
	bubbles:    false,
	cancelable: false,
	composed:   false
});

CustomEvent extends Event
CustomEvent.detail
var event = new CustomEvent(typeArg='', ?customEventInit={detail: null} | eventInit)

UIEvent extends Event <- MouseEvent, TouchEvent, FocusEvent, KeyboardEvent, WheelEvent, InputEvent, CompositionEvent
UIEvent.detail
! UIEvent.layerX
! UIEvent.layerY
! UIEvent.pageX
! UIEvent.pageY
UIEvent.sourceCapabilities
UIEvent.view
! UIEvent.which

MouseEvent extends UIEvent
MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN
MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN
MouseEvent.altKey
MouseEvent.button
MouseEvent.buttons
MouseEvent.clientX | X MouseEvent.x
MouseEvent.clientY | X MouseEvent.y
MouseEvent.ctrlKey
MouseEvent.metaKey
MouseEvent.movementX
MouseEvent.movementY
X MouseEvent.offsetX
X MouseEvent.offsetY
X MouseEvent.pageX
X MouseEvent.pageY
MouseEvent.region
MouseEvent.relatedTarget
MouseEvent.screenX
MouseEvent.screenY 
MouseEvent.shiftKey
MouseEvent.which !
MouseEvent.MouseEvent.mozInputSource !
MouseEvent.webkitForce !
MouseEvent.getModifierState()
'click' 'dblclick' 'mousedown' 'mouseenter' 'mouseleave' 'mousemove' 'mouseover' 'mouseout' 'mouseup' 'contextmenu' 'auxclick' 

KeyboardEvent extends UIEvent
KeyboardEvent.DOM_KEY_LOCATION_STANDARD
KeyboardEvent.DOM_KEY_LOCATION_LEFT
KeyboardEvent.DOM_KEY_LOCATION_RIGHT
KeyboardEvent.DOM_KEY_LOCATION_NUMPAD
KeyboardEvent.altKey
KeyboardEvent.code
KeyboardEvent.ctrlKey
KeyboardEvent.isComposing
KeyboardEvent.key
KeyboardEvent.locale
KeyboardEvent.location
KeyboardEvent.metaKey
KeyboardEvent.repeat
KeyboardEvent.shiftKey
KeyboardEvent.getModifierState()
'keydown' 'keyup'

FocusEvent extends UIEvent
FocusEvent.relatedTarget
'focus' 'blur' 'focusin' 'focusout'

X InputEvent extends UIEvent
InputEvent.data
InputEvent.dataTransfer
InputEvent.inputType
InputEvent.isComposing
InputEvent.getTargetRanges()

WheelEvent extends MouseEvent
'wheel'
WheelEvent.DOM_DELTA_PIXEL
WheelEvent.DOM_DELTA_LINE
WheelEvent.DOM_DELTA_PAGE
WheelEvent.deltaX
WheelEvent.deltaY
WheelEvent.deltaZ
WheelEvent.deltaMode

DragEvent extends MouseEvent
DragEvent.dataTransfer: DataTransfer
'drag' 'dragstart' 'dragleave' 'dragenter' 'dragover' 'dragexit' 'dragend' 'drop'

DataTransfer
DataTransfer.dropEffect 'none|copy|link|move'
DataTransfer.effectAllowed 'all|none|copy|copyLink|copyMove|link|linkMove|move|uninitialized'
DataTransfer.files: FileList
DataTransfer.items: DataTransferItemList
DataTransfer.types: ['','',]
DataTransfer.clearData(?format='')
DataTransfer.getData(format='')
DataTransfer.setData(format='', data='')
DataTransfer.setDragImage(img | element, xOffset=0, yOffset=0)

DataTransferItemList
DataTransferItemList.length
DataTransferItemList.add()
DataTransferItemList.remove()
DataTransferItemList.clear()
DataTransferItemList.DataTransferItem()

DataTransferItem
DataTransferItem.kind
DataTransferItem.type
DataTransferItem.getAsFile()
DataTransferItem.getAsString(callback=(dragData)=>)

TouchEvent extends UIEvent
TouchEvent.altKey
TouchEvent.changedTouches
TouchEvent.ctrlKey 
TouchEvent.metaKey
TouchEvent.shiftKey
TouchEvent.targetTouches
TouchEvent.touches
! TouchEvent.rotation
! TouchEvent.scale
'touchstart' 'touchend' 'touchmove' 'touchcancel'

mixin GlobalEventHandlers
GlobalEventHandlers.onclick
GlobalEventHandlers.onmousedown
GlobalEventHandlers.onmouseup
GlobalEventHandlers.onkeydown
GlobalEventHandlers.onkeyup
GlobalEventHandlers. ...

// ps
! = non-standard
X = experimental
R = read only