const getCardNo = (text: string) => {
  const num = /[0-9]{5}-[0-9]{7}-[0-9]{1}/g;
  const ans = num.exec(text);
  console.log('util fun\n');
  console.log('The value of regex ', ans[0]);
};

export { getCardNo };
