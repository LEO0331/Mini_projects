//fn.test.js 這個測試檔案將匯入函式檔案，並且開始進行測試
const fn  = require('./fn');

test('adder', () => {
  expect(fn.add(5, 5)).toBe(10);
});

test('adder', () => {
  expect(fn.add(5, 5)).toBe(11);
});

test('object compare', () => {
  expect(fn.createUser()).toBe({
    name: '小明'
  });
});

test('object compare', () => {
  expect(fn.createUser()).toEqual({
    name: '小明'
  });
});

test('take 200 hunders and return 73', () => {
  const bill = 200;  
  const price = 127; 
  expect(fn.makeChange(bill, price)).toBe(73); //expectation
});

test('less than 2000', () => {
  const num1 = 1000;
  const num2 = 900;
  expect(num1 + num2).toBeLessThan(2000);
});

test('less equal than 2000', () => {
  const num1 = 1000;
  const num2 = 1000;
  expect(num1 + num2).toBeLessThanOrEqual(2000);
});

test('email format', () => {
  expect('gres@gmail.com').toMatch(
    /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
  );
});

test('email format', () => {
  expect('gres@gmail').toMatch(
    /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
  );
});

test('contain Casper', () => {
  const newArray = ['Bob', 'Someone', 'Casper'];
  expect(newArray).toContain('Casper');
});

test('is fn null', () => {
  expect(fn.isNull()).toBeNull();
});

test('is fn undefined', () => {
  expect(fn.isUndefined()).toBeUndefined();
});

test('fn falsy', () => {
  expect(fn.checkValue(0)).toBeFalsy();
});

test('fn falsy', () => {
  expect(fn.checkValue(null)).toBeFalsy();
});

test('fn falsy', () => {
  expect(fn.checkValue(undefined)).toBeFalsy();
});

test('fn truthy', () => {
  expect(fn.checkValue(1)).toBeTruthy();
});

test('should 返回值必定為 "delectus aut autem"（沒有正確套用 Promise）', () => {
  let data = {}; //非同步必定需要加上 return，才能正確驗證結果
  fn.fetchData(1).then(res => { //最後才執行
    data = res;
  });
  expect(data.title).toEqual('delectus aut autem'); //expect無法正確取得值: 結果必定為 failed
});
// 非同步：Promise 寫法
test('should 返回值必定為 "delectus aut autem"', () => {
  expect.assertions(1); // 斷言，確保非同步有正確取得資料; 移除 expect.assertions 還是可以正確運作
  return fn.fetchData(1).then(data => { //The assertion for a promise must be returned
    expect(data.title).toEqual('delectus aut autem');
  })
});

test('assertions', () => {//Promise 直接進入 Catch 則會通過驗證;因為 catch 回傳的 'error' 與期望值一致
  //expect.assertions(1); //必須使用 resolve 的結果才能通過驗證
  return fn.fetchData(1).catch(e => expect(e).toMatch('error'));
});

test('should 回傳值必定為 "delectus aut autem"（async）', async () => {
  expect.assertions(1);
  const data = await fn.fetchData(1); //async 函式下，await 會確保取得遠端資料後才繼續往下運行
  expect(data.title).toEqual('delectus aut autem');
});

test('驗證非同步 特定屬性是否已被定義', async () => {
  expect.assertions(1);
  const data = await fn.fetchData(1);
  expect(data.title1).toBeDefined(); //特定欄位是否存在
});
