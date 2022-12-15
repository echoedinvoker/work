![Alt ](pic/a01.jpg)

- 兩者應該是相同文件的不同版本而已，但是欄位差異大，例如新增需求影片中的關於價錢的欄位是『金額』，而 POC 提供的 CSV 中關於價錢的欄位都是『單價』，但應該提供的『原始到廠日期』在新增需求的影片中沒看到，或許只是影片帶到所有欄位的關係而已？
- 此手順圖中暫時以 input.csv 做為提供的 CSV 檔名

![Alt undefined](pic/a02.jpg)

- t = 是，f = 否，紅色 = 操作， 藍色 = 使用的資料及邏輯

![Alt undefined](pic/a03.jpg)

- 紫色 = 主線之外，分岔的操作流程
- 箭頭方向
  - 藍色到紅(紫)色 = 輸入/使用資料或邏輯
  - 紅(紫)色到藍色 = 輸出資料
- 影片及會議中人員操作時都是一次篩選所有請購單，但因為有需要要確實紀錄 CSV 中每筆項目在 apmp200 及 apmt540 的處理結果，所以此步驟使用一個一個請購單號的方式做篩選

![Alt undefined](pic/a04.jpg)

![Alt undefined](pic/a05.jpg)

![Alt undefined](pic/a06.jpg)

![Alt undefined](pic/a07.jpg)

- 因為一次篩選一筆請購單號，所以此步驟一次只產生一筆採購單號

![Alt undefined](pic/a08.jpg)

![Alt undefined](pic/a09.jpg)

![Alt undefined](pic/a10.jpg)

![Alt undefined](pic/a11.jpg)

![Alt undefined](pic/a12.jpg)

- 符號 \* 表示新增需求中新增或有變動的部份
- 新增需求的 PDF 中有提到『原始到廠日期』、『原始交貨日期』、『原始到庫日期』三者必須相同，但原本 POC 的操作是填入『原始到廠日期』後『TAB』兩次讓前者日期自動帶入系統單身中『原始交貨日期』與『原始到庫日期』的欄位，所以在系統面上三個輸入欄位中的日期一定是相同的，但或許是另一種情況是在提供的 CSV 中有這三個日期欄位，而這三個欄位的日期必須相同的意思，所以這裡加入三個日期資料的比較驗證
- 新增需求影片中 CSV 『連結』欄位提供的僅是存放資料夾路徑，並不包含檔案名稱，且檔案名稱較 POC 複雜，並未給予定名規則，所以這裡使用『連結』欄位提供的路徑去尋找該資料夾中的第一個 PDF 檔案的方式，以得到完整的上傳文件的路徑資料

![Alt undefined](pic/a13.jpg)

![Alt undefined](pic/a14.jpg)

- 此確認框有時會出現有時不會，所以必須做一個檢查的動作

![Alt undefined](pic/a15.jpg)

![Alt undefined](pic/a16.jpg)

![Alt undefined](pic/a17.jpg)

![Alt undefined](pic/a18.jpg)

![Alt undefined](pic/a19.jpg)

![Alt undefined](pic/a20.jpg)

![Alt undefined](pic/a21.jpg)

![Alt undefined](pic/a22.jpg)

![Alt undefined](pic/a23.jpg)

![Alt undefined](pic/a24.jpg)

![Alt undefined](pic/a25.jpg)

![Alt undefined](pic/a26.jpg)

![Alt undefined](pic/a27.jpg)

- 新增需求 PDF 中提到需檢查付款條件是否為 "C028" 若否則改為 "C028"，因為檢查與修改的步驟差不多，所以這裡直接做修改，省下一個判斷步驟
- 新增需求 PDF 中提到若付款條件非 "C028" 時，除了更改為 "C028" 之外，『或是可被住在 EXCEL 付款條件可以填上指定文字』
  - 上面括弧中的是 PDF 中原文，看不懂意思

![Alt undefined](pic/a28.jpg)

![Alt undefined](pic/a29.jpg)

![Alt undefined](pic/a30.jpg)

![Alt undefined](pic/a31.jpg)

![Alt undefined](pic/a33.jpg)

![Alt undefined](pic/a34.jpg)

- 無解中止 = 執行 apmp200 或 apmt540 過程中遇到例外，或提供的欄位資料無法通過檢查，導致流程無法完成
