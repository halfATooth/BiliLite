
function getElementByXpath(xpath) {
  return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function deleteElement() {
    const target = getElementByXpath('//*[@id="i_cecream"]/div[2]/main/div[2]/div/div[1]/div[1]');
    if (target) {
        const parent = target.parentNode;
        parent.removeChild(target);
    }
}

deleteElement();
