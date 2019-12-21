// 数据
const appState = {
    title: {
        text: 'Reat.js 小书',
        color: 'red',
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue',
    }
}


// 渲染函数，吧状态的数据渲染到页面上。
function renderApp (appState) {
    renderTitle(appState.title)
    renderContent(appState.content)
}
function renderTitle (title) {
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

// 修改appState
function dispatch (action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text
            break
        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color
            break
        default:
            break
    }
}

function renderContent (content) {
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}


dispatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》'})
renderApp(appState);

