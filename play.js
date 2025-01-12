
headBar = '//*[@id="biliMainHeader"]'

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
