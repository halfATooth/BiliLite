
headBar = '//*[@id="biliMainHeader"]'

function getElementByXpath(xpath) {
  return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
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

function hide(xpath) {
  el = getElementByXpath(xpath)
  if (el) {
    el.style.display = 'none'
  }
}

function deleteElement(xpath) {
  const target = getElementByXpath(xpath);
  if (target) {
    const parent = target.parentNode;
    parent.removeChild(target);
  }
}

function reLayout() {
  videoContainer = getElementByXpath('//*[@id="mirror-vdcon"]')
  videoContainer.style.justifyContent = 'left'
  videoContainer.style.padding = '0 0 0 40px'

  rightContainer = getElementByXpath('//*[@id="mirror-vdcon"]/div[2]')
  rightContainer.style.marginLeft = '400px'

  danmakuContainer = getElementByXpath('//*[@id="danmukuBox"]')
  danmakuContainer.style.marginTop = '0px'

  body = getElementByXpath('/html/body')
  ads = getElementByXpath('//*[@id="mirror-vdcon"]/div[2]/div').children
  for(var i = 2; i<ads.length-1; i++){
    block(body, ads[i])
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

let intervalId = setInterval(() => {
  parent =
    getElementByXpath('//*[@id="bilibili-player"]/div/div/div[1]/div[1]/div[13]/div[2]/div[2]/div[3]')
  widePlayBtn = parent.children[parent.children.length - 3]
  if (widePlayBtn) {
    click(widePlayBtn)
    hide(headBar)
    setTimeout(function(){
      reLayout()
    }, 0)
    clearInterval(intervalId);
  }
}, 0);
