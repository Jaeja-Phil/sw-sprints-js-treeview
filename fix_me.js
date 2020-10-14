const root = document.getElementById('root');

function createTreeView(menu, currentNode) {
  const hasNoChildrenUl = document.createElement('ul');

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].children) {
      const ul = document.createElement('ul');
      const input = document.createElement('input');
      input.type = 'checkbox';
      const span = document.createElement('span');
      span.textContent = menu[i].name;

      ul.append(input, span);
      currentNode.append(ul);

      createTreeView(menu[i].children, ul);
    } else {
      const li = document.createElement('li');
      li.textContent = menu[i].name;

      hasNoChildrenUl.append(li);
      currentNode.append(hasNoChildrenUl);
    }
  }
}

createTreeView(menu, root);
