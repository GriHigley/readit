function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function findArticle(locator, action){
    var article = null;
    var articleFound = false;
    while(!articleFound){
        console.log(`Searching for ${locator}`);
        article = document.querySelector(locator);
        if (article) {
            action(article)
            console.log(`Found ${locator}`);
            console.log(article.innerHTML);
            articleFound = true;
        }
        await delay(2000);
    }
}
function remove(element){
    element.remove();
}
function updateUss(element){
    element.style.position = 'relative';
    element.style.overflow = 'scroll';
}
findArticle('[data-testid="onsite-messaging-unit-gateway"]', remove);
findArticle('div.css-gx5sib', remove);
findArticle('[data-testid="vi-gateway-container"]', updateUss);
