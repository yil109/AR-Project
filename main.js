window.addEventListener('load', () => {
  const libraryModel = document.getElementById('libraryModel');
  const arrowSpecial = document.getElementById('arrowSpecial');
  const arrowPublic = document.getElementById('arrowPublic');
  const blackboard = document.getElementById('blackboard');
  const boardText = document.getElementById('boardText');
  const backArrow = document.getElementById('backArrow');

  // 点击专门图书馆箭头
  arrowSpecial.addEventListener('click', () => {
    libraryModel.setAttribute('visible', false);
    arrowSpecial.setAttribute('visible', false);
    arrowPublic.setAttribute('visible', false);

    blackboard.setAttribute('visible', true);
    boardText.setAttribute('value', "专门图书馆规则：\n1. 不喧哗\n2. 保持桌面整洁\n3. 使用专用座位");

    backArrow.setAttribute('visible', true);
  });

  // 点击公共图书馆箭头
  arrowPublic.addEventListener('click', () => {
    libraryModel.setAttribute('visible', false);
    arrowSpecial.setAttribute('visible', false);
    arrowPublic.setAttribute('visible', false);

    blackboard.setAttribute('visible', true);
    boardText.setAttribute('value', "公共图书馆规则：\n1. 不喧哗\n2. 归还图书到原位\n3. 不饮食");

    backArrow.setAttribute('visible', true);
  });

  // 点击返回箭头
  backArrow.addEventListener('click', () => {
    blackboard.setAttribute('visible', false);
    backArrow.setAttribute('visible', false);

    libraryModel.setAttribute('visible', true);
    arrowSpecial.setAttribute('visible', true);
    arrowPublic.setAttribute('visible', true);
  });
});
