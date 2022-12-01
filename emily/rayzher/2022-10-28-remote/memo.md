## **更改 #4 excel2csv code**

`input.filter(cur=>!cur['apmp200'] && typeof cur['請購單號']==='string'?cur['請購單號'].trim():false).forEach(cur=>output.push(cur));`

- 增加 `&& cur['請購單號']` 部分，避免空白資料

## **更改 #22 excel2csv code**

`input.filter(cur=>cur.apmp200.startsWith('RP22-') && !(typeof cur.apmt540==='string'?cur.apmt540.trim():false)).forEach(cur=>{ output.push(cur) })`

- 增加 && 後半條件

`input.filter(cur=>cur.apmp200?.startsWith('RP22-') && !(typeof cur.apmt540==='string'?cur.apmt540.trim():false)).forEach(cur=>{ output.push(cur) })`

- startsWish 前面 . 改 ?.，因為避免 apmp200 不存在的狀況下使用 method 會造成錯誤。

## **apmp200 loop validation**

- 會使用 row- txt
  - row-請購單號.txt
    - RP12-220700357
  - row-採購人員.txt
    - R0401(呂佩螢)

## **apmp200 循環結尾增加匯出工作資料夾**

`input.forEach(file => { if(file.src==='main.csv') { output.push({ src: 'main.csv', dst: '銳澤採購模擬資料檔CSV_(2).csv' }) } })`

- 每次循環結束都把 main.csv 的資料寫到外部

## **apmp200 循環結尾增加 powershell module**

`Remove-Item 'apmp200-pass.txt' -ErrorAction SilentlyContinue`

## **apmt540 loop validation**

- 使用檔案

  - row-apmp200.txt
    - RP22-221000018
  - row-未稅單價.txt
  - row-原始到廠日期.txt

- 記錄到 apmt540-loop-validations.js 中
- 如果全 pass，創建檔案 apmt540-pass.txt = true

- 應該多檢查相關文件是否存在
  - 在之前使用檔案整理模組
    - 使用 file enu ，內容寫在 hasPDF.js
    - 必須要在循環結尾的 powershell module 中刪除 hasPDF.txt
      - 因為只會產生 hadPDF.txt = 檔案路徑
      - validation 中增加檢查 hasPDF.txt 是否存在
      - 嘗試使愈 hasPDF.txt 中的路徑內容，帶入 DA 中使用
        - 但有疑慮 hasPDF.txt 的路徑內容 slash 都是單獨存在
          - 實作可以使用進去

## **apmpt540 loop main.csv -> 外部**

- 同 apmp200 loop
  `

## **apmt540 loop powershell 刪除 pass**

- 同 apmp200 loop，但是注意檔名不同

`Remove-Item 'apmt540-pass.txt' -ErrorAction SilentlyContinue`

## **apmp200, apmt540 結束後，將 main.csv 的已完成檔案分出去之前**

- 需使用 powershell module 把 output.csv 刪除
  - 應該也是在 apmt540.txt = true 的條件中，跟 apmp200.txt = true 最後一樣

## **#46 執行腳本產生輸出完成 CSV 檔案的路徑**

- 這樣 folder path 是寫死，沒有彈性

  - 應該在前面使用匯入，然後有一個 txt 文件是提供輸出 folder path
    - finishFolder.txt

- 執行腳本套用後改成下面
  `const path = `${read('finishFolder.txt')}\\finish_${moment(new Date).format('YYMMDD')}.csv`; write('path.txt', path);`

## **修改 ##51 DA finish.csv 新舊合併部分**

- 不 mutant 很難

## **#55 repo2dir PICK 使用文件變數**

- 因為前面有匯入 finishFolder.txt，所以這個匯出模組的 PICK 可以直接使用它
  - %finishFolder%

## **apmt540 加入單身輸入日期，警告視窗錯誤例外部分**

- 應該可以同時捕捉到未稅金額輸入的例外告警，因為中間都是輸入、tab，沒有其他種類操作

- #1 import file - C:\Users\publie1\Desktop\EMILY\銳澤採購模擬資料檔 CSV\_(2).csv -> main.csv
- #4 excel2csv - main.csv
- ##11 loop -> output.csv
  - #12 repo2dir - C:\Users\publie1\Desktop\EMILY
- #22 excel2dir - main.csv
- #29 loop - output.csv
  - #4 dir2csv - C:\Users\publie1\Desktop\EMILY
  - #16 repo2dir - C:\Users\publie1\Desktop\EMILY
- #40 excel2csv - main.csv
- #44 repo2dir - C:\Users\publie1\Desktop\EMILY
- #46 import file - C:\Users\publie1\Desktop\EMILY\finishFolder.txt
- #48 import file - %path%
- #55 repo2dir - C:\Users\publie1\Desktop\EMILY

- #-2 import file -
- #-1 import file -
- #1 import file - %inputPath%
- #4 excel2csv - main.csv
- ##11 loop -> output.csv
  - #12 repo2dir - %inputFolder%
- #22 excel2dir - main.csv
- #29 loop - output.csv
  - #4 dir2csv - C:\Users\publie1\Desktop\EMILY - 不用改，這是放文件的資料夾，可以留著在安裝時直接設定
  - #16 repo2dir - %inputFolder%
- #40 excel2csv - main.csv
- #44 repo2dir - %inputFolder%
- #46 import file - C:\Users\publie1\Desktop\EMILY\finishFolder.txt
- #48 import file - %path%
- #55 repo2dir - %finishFolder%
