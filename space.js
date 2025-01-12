spaceHeader = '//*[@id="bili-header-container"]/div/div'
spBgImg = '//*[@id="app"]/div[2]'
spBgDiv = '//*[@id="app"]/div[1]'

getElementByXpath(spBgDiv).style.backgroundColor = 'rgb(105 116 115)'
getElementByXpath(spBgImg).style.filter = 'brightness(50%)'
getElementByXpath(spaceHeader).style.backgroundColor = '#888888'
