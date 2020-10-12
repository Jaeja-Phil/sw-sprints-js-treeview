const menu = [
  {
    type: 'group',
    name: '음료',
    children: [
      {
        type: 'group',
        name: '콜드 브루',
        children: [
          {
            type: 'drink',
            name: '나이트로 콜드 브루',
            img: '',
            price: 2000
          },
          {
            type: 'drink',
            name: '돌체 콜드 브루',
            img: '',
            price: 1000
          }
        ]
      },
      {
        type: 'group',
        name: '프라푸치노',
        children: []
      }
    ],
  },
  {
    type: 'group',
    name: '디저트',
    children: []
  }
]

const menu = {
  drinks: {
    coldBrew: ['나이트로 콜드 브루', '돌체 콜드 브루', '제주 비자림 콜드 브루', '콜드 브루'],
    frappuccino: [
      '애플 쿠키 크림 프라푸치노',
      '더블 에스프레소 칩 프라푸치노',
      '모카 프라푸치노',
      '피스타치오 크림 프라푸치노',
    ],
    blended: [
      '망고 바나나 블렌디드',
      '딸기 요거트 블렌디드',
      '자몽 셔벗 블렌디드',
      '피치 & 레몬 블렌디드',
    ],
    tea: ['라임 패션 티', '민트 블렌드 티', '아이스 유스베리 티', '아이스 캐모마일 블렌드 티'],
    juice: ['한방에 쭉 감당 190ml', '파이팅 청귤 190ml', '딸기주스 190ml', '도와줘 흑흑 190ml'],
  },
  foods: {
    bread: ['트러플 미니 스콘', '보늬밤 몽블랑 데니쉬', '고소한 치즈 베이글', '미니 클래식 스콘'],
    cake: [
      '밀당 에그 타르트',
      '마스카포네 티라미수 케이크',
      '블루베리 쿠키 치즈 케이크',
      '부드러운 생크림 카스텔라',
    ],
    sandwich: [
      '애플 까망베르 샌드위치',
      '트리플 머쉬룸 치즈 샌드위치',
      '로스트 치킨 샐러드 밀 박스',
      'B.E.L.T 샌드위치',
    ],
    fruit: ['하루 한 컵 RED', '한라봉 가득 핸디 젤리'],
    snack: [
      '리저브 초콜릿 세트',
      '로스티드 아몬드 앤 초콜릿',
      '마카롱',
      '자일리톨 캔디 크리스탈 민트',
    ],
    iceCream: ['자바 칩 유기농 바닐라 아이스크림', '넛츠 초콜릿 아포가토', '바닐라 아포가토'],
  },
  products: {
    mug: [
      '우리 한글 블랙 머그 473m',
      '서울 투어 머그 355ml',
      '스타벅스 1호점 머그 400ml',
      '서울 제주 데미머그 세트',
    ],
    tumbler: [
      'SS 부산 투어 텀블러 355m',
      'SS 블랙 헤리티지 오드리 텀블러 355ml',
      'SS 에치드 실버 텀블러 473ml',
    ],
    accessory: ['리저브 오렌지 카드 홀더', '스타벅스 1호점 에코백', '스타벅스 1호점 랩탑 파우치'],
  },
  cards: ['10000원', '30000원', '50000원', '100000원'],
};

const menu = [
  {
    type: 'group',
    name: '음료',
    children: [
      {
        type: 'group', name: '콜드 브루', children: [
          { type: 'item', name: '나이트로 콜드 브루' },
          { type: 'item', name: '돌체 콜드 브루' },
          { type: 'item', name: '제주 비자림 콜드 브루' },
          { type: 'item', name: '콜드 브루' },
        ]
      },
      {
        type: 'group', name: '프라푸치노', children: [
          { type: 'item', name: '애플 쿠키 크림 프라푸치노' },
          { type: 'item', name: '더블 에스프레소 칩 프라푸치노' },
          { type: 'item', name: '모카 프라푸치노' },
          { type: 'item', name: '피스타치오 크림 프라푸치노' },
        ]
      },
      {
        type: 'group', name: '블렌디드', children: [
          { type: 'item', name: '망고 바나나 블렌디드' },
          { type: 'item', name: '딸기 요거트 블렌디드' },
          { type: 'item', name: '자몽 셔벗 블렌디드' },
          { type: 'item', name: '피치 & 레몬 블렌디드' },
        ]
      },
      {
        type: 'group', name: '티', children: [
          { type: 'item', name: '라임 패션 티' },
          { type: 'item', name: '민트 블렌드 티' },
          { type: 'item', name: '아이스 유스베리 티' },
          { type: 'item', name: '아이스 캐모마일 블렌드 티' },
        ]
      },
      {
        type: 'group', name: '주스', children: [
          { type: 'item', name: '한방에 쭉 감당' },
          { type: 'item', name: '파이팅 청귤' },
          { type: 'item', name: '딸기주스' },
          { type: 'item', name: '도와주 흑흑' },
        ]
      }
    ]
  },
  {
    type: 'group',
    name: '음식',
    children: [
      {
        type: 'group', name: '빵', children: [
          { type: 'item', name: '트러플 미니 스콘' },
          { type: 'item', name: '보늬밤 몽블랑 데니쉬' },
          { type: 'item', name: '고소한 치즈 베이글' },
          { type: 'item', name: '미니 클래식 스콘' }
        ]
      },
      {
        type: 'group', name: '케이크', children: [
          { type: 'item', name: '밀당 에그 타르트' },
          { type: 'item', name: '마스카포네 티라미수 케이크' },
          { type: 'item', name: '블루베리 쿠키 치즈 케이크' },
          { type: 'item', name: '부드러운 생크림 카스텔라' }
        ]
      },
      {
        type: 'group', name: '샌드위치', children: [
          { type: 'item', name: '애플 까망베르 샌드위치' },
          { type: 'item', name: '트리플 머쉬룸 치즈 샌드위치' },
          { type: 'item', name: '로스트 치킨 샐러드 밀 박스' },
          { type: 'item', name: 'B.E.L.T 샌드위치' },
        ]
      },
      {
        type: 'group', name: '과일', children: [
          { type: 'item', name: '하루 한 컵 RED' },
          { type: 'item', name: '한라봉 가득 핸디 젤리' },
        ]
      },
      {
        type: 'group', name: '스낵', children: [
          { type: 'item', name: '리저브 초콜릿 세트' },
          { type: 'item', name: '로스티드 아몬드 앤 초콜릿' },
          { type: 'item', name: '마카롱' },
          { type: 'item', name: '자일리톨 캔디 크리스탈 민트' },
        ]
      },
      {
        type: 'group', name: '아이스크림', children: [
          { type: 'item', name: '자바 칩 유기농 바닐라 아이스크림' },
          { type: 'item', name: '넛츠 초콜릿 아포카토' },
          { type: 'item', name: '바닐라 아포가토' },
        ]
      }
    ]
  },
  {
    type: 'group',
    name: '굿즈',
    children: [
      {
        type: 'group', name: '머그', children: [
          { type: 'item', name: '우리 한글 블랙 머그 473ml' },
          { type: 'item', name: '서울 투어 머그 355ml' },
          { type: 'item', name: '스타벅스 1호점 머그 400ml' },
          { type: 'item', name: '서울 제주 데이머그 세트' },
        ]
      },
      {
        type: 'group', name: '텀블러', children: [
          { type: 'item', name: 'SS 부산 투어 텀블러 355ml' },
          { type: 'item', name: 'SS 블랙 헤리티지 오드리 텀블러 355ml' },
          { type: 'item', name: 'SS 에치드 실버 텀블러 473ml' },
        ]
      },
      {
        type: 'group', name: '악세사리', children: [
          { type: 'item', name: '리저브 오렌지 카드 홀더' },
          { type: 'item', name: '스타벅스 1호점 에코백' },
          { type: 'item', name: '스타벅스 1호점 랩탑 파우치' },
        ]
      },
    ]
  },
  {
    type: 'group',
    name: '굿즈',
    children: [
      {
        type: 'group', name: '카드', children: [
          { type: 'item', name: '10000원권' },
          { type: 'item', name: '30000원권' },
          { type: 'item', name: '50000원권' },
          { type: 'item', name: '100000원권' },
        ]
      },
    ]
  },
]

const root = document.getElementById('root');

function createTreeView(menu) {
  for (key in menu) {
    if (!Array.isArray(menu[key])) {
      createTreeView(menu[key]);
    } else {
      console.log(menu[key]);
    }
  }
}

createTreeView(menu);
