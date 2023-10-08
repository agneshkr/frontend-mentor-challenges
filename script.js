


const URL_MAPPINGS = {
    newbie: {
        'A product Catalog': 'product-preview-card-component-main/index.html',
        'A Result Summary Component Catalog': 'results-summary-component-main/index.html',
        'A QR CODE Component': 'qr-code-component-main/index.html',
        'A 3 Column Preview Component': '3-column-preview-card-component-main/index.html'
    }
}
const ADDRESS_CONSTANT = "https://agneshkr.github.io/frontend-mentor-challenges/"
const constructScripts = () => {
    let ele = document.getElementById('link-contents')
    Object.entries(URL_MAPPINGS).map((item) => {
        let type = item[0]
        let link = item[1]
        Object.entries(link).map((item) => {
            let label = item[0]
            let subLink = item[1]
            let divElem = document.createElement('div')
            let linkeText = document.createElement('a')
            linkeText.title = label
            linkeText.text = label
            linkeText.href = `${ADDRESS_CONSTANT}/${type}/${subLink}` 
            divElem.appendChild(linkeText)
            ele.appendChild(divElem)
        })
    })
}

