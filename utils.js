function getElementByXpath(xpath) {
  return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function deleteElement(xpath) {
  const target = getElementByXpath(xpath);
  if (target) {
    const parent = target.parentNode;
    parent.removeChild(target);
  }
}

function hide(xpath) {
  el = getElementByXpath(xpath)
  if (el) {
    el.style.display = 'none'
  }
}

function click(btn) {
  if (btn) {
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    btn.dispatchEvent(clickEvent);
  }
}

function block(body, ad){
  if (ad) {
    var rect = ad.getBoundingClientRect()
    mask = document.createElement('div')
    mask.style.position = 'absolute'
    mask.style.top = rect.top + 'px'
    mask.style.left = rect.left + 'px'
    mask.style.width = rect.width + 'px'
    mask.style.height = rect.height + 'px'
    mask.style.backgroundColor = '#eeeeee'
    mask.style.zIndex = '1'
    body.appendChild(mask)
  }
}