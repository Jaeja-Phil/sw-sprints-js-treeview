var expect = chai.expect;

describe('body의 첫번째 엘리먼트인 div 안에 tree-view를 구성합니다', () => {
  const body = document.body;

  it('body의 첫번째 엘리먼트는 root 라는 id를 가져야 합니다', () => {
    // fix me
    expect(body.children[1].id).to.equal('root');
  });

  it('root라는 id를 가진 div 태그 안에 tree-view를 구현해야 합니다', () => {
    expect(body.children.length).to.equal(10);

    const root = document.getElementById('root');
    expect(root.children).to.exist;
  });
});

describe('data.js에 있는 menu를 사용해 tree-view를 구성합니다', () => {
  const root = document.getElementById('root');

  it('<div id="root"></div> 안에 음료, 음식, 굿즈, 카드 카테고리를 보관할 4개의 엘리먼트를 생성합니다', () => {
    expect(root.children.length).to.equal(4);
  });

  it('음료, 음식, 굿즈, 카드 엘리먼트 안에는 각각 자식 노드를 보여주고 감춰줄 <input type="checkbox"> 가 존재합니다', () => {
    const categories = root.children;
    let count = 0;
    for (let i = 0; i < categories.length; i++) {
      let currentCategory = categories[i].children;
      for (let j = 0; j < currentCategory.length; j++) {
        if (
          currentCategory[j].matches('input') &&
          currentCategory[j].outerHTML.includes('checkbox')
        ) {
          count++;
          break;
        }
      }
    }
    expect(count).to.equal(4);
  });

  it('음료, 음식, 굿즈, 카드 카테고리 이름(name)을 <span> 혹은 <a> 태그 사용하여 감싸주어야 합니다', () => {
    function checkSpanAndA(htmlTag, name) {
      for (let i = 0; i < htmlTag.length; i++) {
        if (htmlTag[i].matches('span') || htmlTag[i].matches('a')) {
          if (htmlTag[i].textContent === name) {
            return true;
          }
        }
      }
      return false;
    }

    const drinks = root.children[0].children;
    const foods = root.children[1].children;
    const goods = root.children[2].children;
    const cards = root.children[3].children;
    expect(checkSpanAndA(drinks, '음료')).to.equal(true);
    expect(checkSpanAndA(foods, '음식')).to.equal(true);
    expect(checkSpanAndA(goods, '굿즈')).to.equal(true);
    expect(checkSpanAndA(cards, '카드')).to.equal(true);
  });

  it('children 이라는 키값이 존재하지 않으면, <input> 과 <span>, <a> 태그는 존재하지 않아야 합니다', () => {
    // 음료, 음식, 굿즈 중 하나 확인
    // 음료
    const category = root.children[0].children;
    let flag = false;
    for (let i = 0; i < category.length; i++) {
      if (category[i].matches('span') || category[i].matches('a')) {
        flag = true;
        break;
      }
    }
    expect(flag).to.equal(true);

    // 카드 확인
    const cards = root.children[3].children[2].children;
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].matches('span') || cards[i].matches('a')) {
        flag = false;
        break;
      }
    }
    expect(flag).to.equal(true);
  });

  it('type: "item" 의 키,값 페어를 가진 객체라면 <li> 태그로 name키의 값을 감싸주어야 합니다', () => {
    function traverseDom(node) {
      for (let i = 0; i < node.length; i++) {
        if (node[i].children.length > 0) {
          traverseDom(node[i].children);
        } else {
          if (node[i].matches('li') && liNameList.includes(node[i].textContent)) {
            count++;
          }
        }
      }
    }

    const liNameList = [
      '나이트로 콜드 브루',
      '돌체 콜드 브루',
      '제주 비자림 콜드 브루',
      '콜드 브루',
      '애플 쿠키 크림 프라푸치노',
      '더블 에스프레소 칩 프라푸치노',
      '모카 프라푸치노',
      '피스타치오 크림 프라푸치노',
      '망고 바나나 블렌디드',
      '딸기 요거트 블렌디드',
      '자몽 셔벗 블렌디드',
      '피치 & 레몬 블렌디드',
      '라임 패션 티',
      '민트 블렌드 티',
      '아이스 유스베리 티',
      '아이스 캐모마일 블렌드 티',
      '한방에 쭉 감당',
      '파이팅 청귤',
      '딸기주스',
      '도와주 흑흑',
      '트러플 미니 스콘',
      '보늬밤 몽블랑 데니쉬',
      '고소한 치즈 베이글',
      '미니 클래식 스콘',
      '밀당 에그 타르트',
      '마스카포네 티라미수 케이크',
      '블루베리 쿠키 치즈 케이크',
      '부드러운 생크림 카스텔라',
      '애플 까망베르 샌드위치',
      '트리플 머쉬룸 치즈 샌드위치',
      '로스트 치킨 샐러드 밀 박스',
      'B.E.L.T 샌드위치',
      '하루 한 컵 RED',
      '한라봉 가득 핸디 젤리',
      '리저브 초콜릿 세트',
      '로스티드 아몬드 앤 초콜릿',
      '마카롱',
      '자일리톨 캔디 크리스탈 민트',
      '자바 칩 유기농 바닐라 아이스크림',
      '넛츠 초콜릿 아포가토',
      '바닐라 아포가토',
      '우리 한글 블랙 머그 473ml',
      '서울 투어 머그 355ml',
      '스타벅스 1호점 머그 400ml',
      '서울 제주 데이머그 세트',
      'SS 부산 투어 텀블러 355ml',
      'SS 블랙 헤리티지 오드리 텀블러 355ml',
      'SS 에치드 실버 텀블러 473ml',
      '리저브 오렌지 카드 홀더',
      '스타벅스 1호점 에코백',
      '스타벅스 1호점 랩탑 파우치',
      '10000원권',
      '30000원권',
      '50000원권',
      '100000원권',
    ];
    let count = 0;
    traverseDom(root.children);

    expect(count).to.equal(liNameList.length);
  });
});
