# **_Question from poky.tsai_**

## **Link**

https://forum.emily.tips/t/da/268

## **Snapshot**

![alt question](pic/bandicam%202022-09-25%2002-34-04-704.jpg)

# **_Reply by myself_**

## **Script**

- **Script 跟目標網頁使用同個 runtime**，換頁時變數、函式等資料都會被清空所以才使用 txt 檔案紀錄 counter。

## **DA**

- 沒有 **Script** 的問題所以就是直接在 DA WAP 的 Editor 中用一般的 coding 的方法去做迴圈就好了。

  ### _Asynchronous_

  - 比較需要注意的是因為 DA 中幾乎都是非同步函式所以通常使用 decarative method (forEach, map...) 去跑迴圈會遇到很多狀況。

    - 所以通常我都是用 for of 去做。
