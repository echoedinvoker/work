# **_Question bystrekarson_**

## **Link**

https://forum.emily.tips/t/web-automation-mouse-clickleft/324

## **Snapshot**

![Alt question](pic/bandicam%202022-09-25%2003-19-01-955.jpg)

# **_Reply by Myself_**

- mouse.clickLeft 是非同步函式，會回傳 promise。

  - Script 中如果沒撰寫 comsuming promise 的部分 (return, then ...)，Script 就不會等待 promise 的結果，而是直接結束。

    - 這樣就有機會發生你說的這種狀況：

      - **測試時正常**，因為測試的狀態是一直在 Script 裡面，除非你手動離開才結束 Script。

      - **實際上線跑失敗**，因為 Script 跑完所有 instruction 就直接關閉了，沒有等待 promise 結果，因此造成異常。

上面是我自己也有遇到你講的情況，追溯到的原因，不過 case by case，不一定是你遭遇到的狀況 .\_.
