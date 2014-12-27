window.onload = ->
  index = 0
  item = null
  items = document.querySelectorAll '.flasher__item'
  nextItem = ->
    item?.classList.remove 'show'
    item = items[index++ % items.length]
    item.classList.add 'show'

  setInterval nextItem, 4000
  nextItem()
