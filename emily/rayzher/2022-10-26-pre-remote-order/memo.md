## **1. 精簡 Crops(已完成)**

- 精簡前 60 Crops，後 30 Crops，完成
- 確認 code 中每個 crop.png 都有顯示圖形，完成
- RPF-1.1.1

## **2. 增加 apmp200, apmpt540 欄位(done)**

- 使用 Excel 打開增加欄位後存檔，記得先備份

## **3. 匯入 CSV 檔案(done)**

- 匯入後檔案名稱 main.csv

## **4. 篩選出 apmp200 欄位為空的資料另存 CSV(done)**

- 使用 excel2csv(表格處理)
- 只能存成 output.csv
- 如果沒有任何資料，output.csv 不會產生

## **5. 使用有無 output.csv 產生判斷結果(done)**

- 在 script(執行腳本)) 中使用 try catch + read 判斷
- 結果為 boolean 寫在 apmp200.txt 中

## **6. (apmp200.txt=true) 打開 apmp200 介面(done)**

## **7. (apmp200.txt=true) 循環 output.csv -> apmp200 DA(done)**

### _7.1 循環結束到下一個循環中間的連接(done)_

### _7.2 若有彈窗需直接點擊確認，改 ENTER(done)_

### _7.2 每次迴圈最後得到結果後都將其寫入 main.csv (done)_

### _7.3 考慮篩選結果沒有東西的形況(done)_

- 用什麼判斷沒有東西？
- 判斷出沒有東西以後，要寫入失敗情況到 main.csv 此筆資料中的 apmp200 欄位
- 結束此循環，進入下一次循環

## **8. (apmp200.txt=true) 關閉 apmp200 介面(done)**

### _8.1 考慮到不小心直接關閉 ERP 的情況(done)_

### _8.2 刪除 output.csv_

- 才有辦法使用是否有 output.csv 判斷是否有做 apmt540 操作的需求

## **9. 篩選出 apmp200 有單號且 apmt540 為空的資料另存 CSV**

- 同 4.

## **10. 使用有無 output.csv 產生判斷結果**

- 同 5.，但結果寫入 apmt540.txt 中

## **11. (apmt540.txt=true) 打開 apmt540 介面**

## **12. (apmt540.txt=true) 循環 output.csv -> apmt540 DA**

### _12.1 若有彈窗需直接點擊確認，改 ENTER_

### _12.2 每次迴圈最後得到結果後都將其寫入 main.csv (缺測試)_

### _12.3 考慮單號輸入後沒帶出資料的情況_

### _12.4 考慮日期卡住情況_

## **13. 將 main.csv 中 apmt540 有值的資料移動到另一個 csv 檔案**

- 另一個 csv 檔案使用日期當作檔名
- 使用 try catch 分成當日已經有或尚未有檔案的兩種情況
  - 還沒有，直接寫入
  - 已經有
    - 每筆單號查詢
      - 有單號，覆蓋過去
      - 無單號，增加該筆資料

## **14. 使用 main.csv 的內容覆蓋原本 CSV 檔案**

- 這裡要編寫 main.csv 的欄位，否則沒有值的欄位可能會被省略掉

## **15. Validation**

- 應該寫到 apmp200 與 apmt540 個別的 DA 中
- 若有 Validation failed 的情況
  - 寫入 main.csv
  - return 跳出 DA 進入下次循環
