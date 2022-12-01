# **_RPF4_**

## **#1~#4 匯入檔案**

![Alt all imports](pic/bandicam%202022-11-01%2020-07-45-429.jpg)

![Alt import1 inputFolder.txt](pic/bandicam%202022-11-01%2020-08-10-258.jpg)

![Alt import2 inputFileName.txt](pic/bandicam%202022-11-01%2020-08-21-057.jpg)

![Alt import3 associatedFileFolder.txt](pic/bandicam%202022-11-01%2020-08-28-985.jpg)

![Alt import4 outputFolder.txt](pic/bandicam%202022-11-01%2020-08-37-361.jpg)

- 都具備本地名稱
  - 所以使用者安裝時使用的檔案名稱可以任意

## **#5 (Script)產生輸入 CSV 檔案路徑**

![Alt (Script)generate input CSV path](pic/bandicam%202022-11-01%2020-14-51-026.jpg)

## **#6~#9 (Excel2Csv)產生 main.json，儲存主要資料**

![Alt #6~#9](pic/bandicam%202022-11-01%2020-56-50-215.jpg)

![Alt](pic/bandicam%202022-11-01%2020-57-11-190.jpg)

![Alt](pic/bandicam%202022-11-01%2020-58-44-731.jpg)

## **#10~#13 (Txt2Txt)產生 apmp200Loop.csv 跑第一個循環**

![Alt #10~#13](pic/bandicam%202022-11-01%2021-13-37-070.jpg)

![Alt codes](pic/bandicam%202022-11-01%2021-14-46-266.jpg)

## **#14~#17 (PowerShell)產生 apmp200Go.txt，當後續 apmp200 相關條件**

![Alt #14~#17](pic/bandicam%202022-11-01%2021-23-33-861.jpg)

![Alt codes](pic/bandicam%202022-11-01%2021-24-01-448.jpg)

- 注意 PowerShell 結果會有換行，而且字首大寫。

## **\<apmp200Go:True\>#18~#21 (DA)進入 apmp200 UI，並點擊放棄**

![Alt #18~#21](pic/bandicam%202022-11-01%2021-28-42-820.jpg)

![Alt codes](pic/bandicam%202022-11-01%2021-32-27-021.jpg)

## **\<apmp200Go:True\>#22 (Loop) apmp200Loop.csv**

![Alt #22](pic/bandicam%202022-11-01%2021-36-06-788.jpg)

### _#2 (Script) Validations_

![Alt #22_2](pic/bandicam%202022-11-01%2021-44-43-548.jpg)

![Alt codes](pic/bandicam%202022-11-01%2021-45-02-435.jpg)

### _#5 (DA) apmp200_

![Alt #3~6](pic/bandicam%202022-11-01%2022-02-48-643.jpg)

![Alt codes1](pic/bandicam%202022-11-01%2022-08-45-014.jpg)

![Alt codes2](pic/bandicam%202022-11-01%2022-09-00-093.jpg)

![Alt codes3](pic/bandicam%202022-11-01%2022-09-12-900.jpg)

![Alt codes4](pic/bandicam%202022-11-01%2022-09-24-296.jpg)

![Alt codes5](pic/bandicam%202022-11-01%2022-09-36-559.jpg)

![Alt codes6](pic/bandicam%202022-11-01%2022-09-46-528.jpg)

![Alt codes7](pic/bandicam%202022-11-01%2022-09-58-739.jpg)

- 考量到篩選無結果之例外，寫入 main.json
- 若成功產出系統單號，寫入 main.json
