/*
https://wcc723.github.io/development/2020/02/02/jest-intro/
https://www.youtube.com/watch?v=7r4xVDI2vho
輸入 npm install jest --save-dev 安裝 Jest
打開 package.json 內將 script 內新增方法並加入 jest

測試的目標為何？ -> test('...', ()=>{})
導入要測試的函式 -> employee.makeChange()
測試的期望是什麼？ -> expect(...).toBe(...);

|- fn.js          原始的測試檔案
|- fn.test.js     測試的腳本
|- jest.config.js 新增的 Jest 設定檔案

expect(...).toBe(...); 中的 toBe 就屬於 matchers，作為各種不同條件的驗證使用
tb -> expect().toBe();
tblt -> expect().toBeLessThan();
tblte -> expect().toBeLessThanOrEqual();

在做物件比對時，必須使用另一個方法 toEqual 才能比對兩個物件內的值是否相同
toBe 是使用 Object.is 作為判斷，並非使用 ===
toEqual 是屬於深度比對（deep equality），一一使用 Object.is 比對物件或陣列內的純值；也由於是深度比對，就如同在物件內將值一一取出重新比對，效能上會較差一些。
toMatch 搭配正規表達式進行驗證
toContain 檢視陣列中是否有包含特定值

定義成一個群組
describe('僱員的行為測試', () => {
  test('點餐內容與顧客需求相符', () => {});
  test('結帳金額正確', () => {});
});
*/
const axios = require('axios');
const fns = {
  add: function(a, b) {
    return a + b;
  },
  createUser: () => {
    return {
      name: '小明'
    }
  },
  makeChange: function(bill, price) {
    return bill - price;
  },
  isNull: () => null,
  checkValue: x => x,
  isUndefined: () => undefined,
  fetchData: (num = 1) => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/todos/${num}`)
      .then(res => res.data)
      .catch(err => 'error');
  }
}
//require export for testing
module.exports = fns;  //將函式給予匯出
