const TOC = 'toc'

function generate_list({list, title, type}, depth=0, defaultType='numeric', prefix=[]) {
  var type = type ? type : defaultType

  var listNode = document.createElement('div');
  switch(type) {
    case 'numeric':
      listNode = document.createElement('ol')
      break;
    default:
      listNode = document.createElement('ul')
  }
  if(type=='blank') {
    listNode.style.listStyle = "none"
  }

  list.forEach((element, index) => {
    var elementNode;
    if (typeof element == "object") {
      elementNode = document.createElement('li')
      elementNode.appendChild(generate_list(element, depth+1, type, prefix.concat([index])))
    }
    else if (typeof element == "string") {
      elementNode = document.createElement('li')
      elementNode.style.marginBottom = '2px'
      elementNode.appendChild(document.createTextNode(element))
    }
    listNode.appendChild(elementNode)
  })


  var titleNode = document.createElement('div')
  if(title) {
    var titleNode = document.createElement('p')
    titleNode.style.marginTop = '0px'
    titleNode.id = TOC + prefix.join('.')
    titleNode.appendChild(document.createTextNode(title))
  }

  var wrapperNode = document.createElement('div');
  wrapperNode.appendChild(titleNode)
  wrapperNode.appendChild(listNode)

  return wrapperNode
}


function generate_links({list, title, type}, depth=0, defaultType='numeric', prefix=[]) {
  if (depth >= 3) {
    return undefined
  }

  var type = type ? type : defaultType

  var listNode = document.createElement('div');
  var titleNode = document.createElement('div')

  switch(type) {
    case 'numeric':
      listNode = document.createElement('ol')
      break;
    default:
      listNode = document.createElement('ul')
  }

  if(title) {

    list.forEach((element, index) => {
      var elementNode = document.createElement('div');
      if (typeof element == "object") {
        elementNode = document.createElement('li')
        var children = generate_links(element, depth+1, type, prefix.concat([index]))
        if (children) {
          elementNode.appendChild(children)
          listNode.appendChild(elementNode)
        }
      }
    })


    var titleNode = document.createElement('p')
    titleNode.style.marginTop = '0px'
    var a = document.createElement("a")
    a.href= '#' + TOC + prefix.join('.')
    a.appendChild(document.createTextNode(title))
    titleNode.appendChild(a)
  }

  var wrapperNode = document.createElement('div');
  wrapperNode.appendChild(titleNode)
  wrapperNode.appendChild(listNode)

  return wrapperNode
}
