window.onload = function() {
  var index, item, items, nextItem;
  return;
  index = 0;
  item = null;
  items = document.querySelectorAll('.flasher__item');
  nextItem = function() {
    if (item != null) {
      item.classList.remove('show');
    }
    item = items[index++ % items.length];
    return item.classList.add('show');
  };
  setInterval(nextItem, 4000);
  return nextItem();
};
