const ReadingBooksTitle = (isTablet: boolean) => {
  if (isTablet) {
    return `실시간 방송 형태로 제공되는\n 신개념 책 읽기`;
  } else {
    return `실시간 방송 형태로\n 제공되는\n 신개념 책 읽기`;
  }
};

const ReadingBooksText = (isTablet: boolean) => {
  if (isTablet) {
    return `방송 중이라면 언제든 접속하세요.\n 수강신청, 수업예약 없이 편하게 수업참여가 가능해요.`;
  } else {
    return `방송 중이라면 언제든 접속하세요.\n 수강신청, 수업예약 없이\n 편하게 수업참여가 가능해요.`;
  }
};

const ReadingDiaryTitle = (isTablet: boolean) => {
  if (isTablet) {
    return `매일 매일\n알아서 기록하는 독서 일기`;
  } else {
    return `매일 매일 알아서\n기록하는 독서 일기`;
  }
};

const ReadingDiaryText = (isTablet: boolean, isPc: boolean) => {
  if (isPc) {
    return `오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 독서일기를 통해 확인해보세요.\n읽기만 해도 자동으로 기록되고, 공유도 가능해요.`;
  } else if (isTablet) {
    return `오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지\n독서일기를 통해 확인해보세요.\n읽기만 해도 자동으로 기록되고, 공유도 가능해요.`;
  } else {
    return `오늘은 아이가 어떤 책을 읽었는지,\n어떤 활동에 참여했는지\n독서일기를 통해 확인해보세요.\n읽기만 해도 자동으로 기록되고,\n공유도 가능해요.`;
  }
};

const BestSellerTitle = (isTablet: boolean) => {
  if (isTablet) {
    return `입학 전 1000권 읽기!\n땅콩스쿨로 도전해보세요.`;
  } else {
    return `입학 전 1000권 읽기!\n땅콩스쿨로\n도전해보세요.`;
  }
};

const BestSellerText = (isTablet: boolean) => {
  if (isTablet) {
    return `매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요.\n독서를 통해 배움의 즐거움을 알아가 보세요.`;
  } else {
    return `매달 새로운 32권의\n어린이 베스트 셀러를 만날 수 있어요.\n독서를 통해 배움의 즐거움을 알아가 보세요.`;
  }
};

const CardFirstText = (isPc: boolean, isTablet: boolean) => {
  if (isPc)
    return `휴대폰이나 태블릿으로\n시간이나 장소 관계없이\n편하게 수업을 들어보세요.`;
  else if (isTablet)
    return `휴대폰이나 태블릿으로 시간이나 장소 관계없이\n편하게 수업을 들어보세요.`;
  else
    return `휴대폰이나 태블릿으로\n시간이나 장소 관계없이\n편하게 수업을 들어보세요.`;
};

const CardSecondText = (isPc: boolean, isTablet: boolean) => {
  if (isPc)
    return `화면에 그림도 그려보고,\n읽은 책으로 선생님과\n퀴즈도 풀어보는 양방향\n수업을 경험해보세요.`;
  else if (isTablet)
    return `화면에 그림도 그려보고, 읽은 책으로 선생님과\n퀴즈도 풀어보는 양방향수업을 경험해보세요.`;
  else
    return `화면에 그림도 그려보고, 읽은 책으로\n선생님과 퀴즈도 풀어보는\n양방향 수업을 경험해보세요.`;
};

const CardThirdText = (isPc: boolean, isTablet: boolean) => {
  if (isPc) return `친숙한 캐릭터와\n목소리로 수업에 대한\n부담을 낮춰보세요.`;
  else if (isTablet)
    return `친숙한 캐릭터와 목소리로 수업에 대한\n부담을 낮춰보세요.`;
  else return `친숙한 캐릭터와 목소리로\n 수업에 대한 부담을 낮춰보세요.`;
};

const LiveVideoTitle = (isPc: boolean) => {
  if (isPc) {
    return `랜선 라이브\n북클래스`;
  } else {
    return `랜선 라이브 북클래스`;
  }
};

const LiveVideoText = (isPc: boolean) => {
  if (isPc) {
    return `친구들과 함께\n그림 그리기, 퀴즈 풀기,\n선생님과 대화하며 경험해요!`;
  } else {
    return `친구들과 함께 그림 그리기, 퀴즈 풀기,\n선생님과 대화하며 경험해요!`;
  }
};

export {
  ReadingBooksTitle,
  ReadingBooksText,
  ReadingDiaryTitle,
  ReadingDiaryText,
  BestSellerTitle,
  BestSellerText,
  CardFirstText,
  CardSecondText,
  CardThirdText,
  LiveVideoTitle,
  LiveVideoText,
};
