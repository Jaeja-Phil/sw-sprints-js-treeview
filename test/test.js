var expect = chai.expect;
describe('body의 첫번째 엘리먼트인 div 안에 tree-view를 구성합니다', () => {
  const body = document.body;

  it('body의 첫번째 엘리먼트는 root 라는 id를 가져야 합니다', () => {
    expect(body.children[0].id).to.equal('root');
  });

  it('root라는 id를 가진 div 태그 안에 tree-view를 구현해야 합니다', () => {
    expect(body.children.length).to.equal(8);
  });
});

describe('data.js에 있는 메뉴를 사용해 tree-view를 구성합니다', () => {
  const root = document.getElementById('root');
  console.log(root);
  it('<div class="root"></div> 안에 음료, 음식, 굿즈, 카드 카테고리를 보관할 4개의 엘리먼트를 생성합니다', () => {
    expect(root.children.length).to.equal(4);
  });

  it('음료를 보관하는 엘리먼트는 5개의 자식 노드를 가지고 있어야 합니다', () => {
    const drink = root.children[0].children;
    expect(drink.length).to.equal(5);
  });
});
