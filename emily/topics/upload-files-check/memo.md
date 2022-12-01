# **_Check File/Folder Exist_**

## **#1 Input Configuration file as JSON**

![Alt #1 input settings](pic/bandicam%202022-10-31%2014-33-26-483.jpg)

- As usual.
- Be careful **not** to end the last data in json with a **comma**.
  - stuck by this fault for a long time...
- The path to test in settings does not have anything, this is for the test.

## **#2 Create .txt for each property**

![Alt #2 Script to create .txt each property](pic/bandicam%202022-10-31%2014-38-08-580.jpg)

- .txt files are for **Powershell** module.

## **Use Powershell module to check if file/folder exist**

![Alt powershell check file/folder exist](pic/bandicam%202022-10-31%2014-46-42-706.jpg)

- **Advantages**
  - Compared to the dir2csv module, the Powershell module can verify the **existence of multiple files or folders in one go**.
- Always remember to use **utf-8** for the encoding used in the result output by **Out-File**.

## **Use Powershell Result**

> The **Powershell** module above only produces **.txt files** containing the results, which can be further used by other steps to **throw errors** or **write to csv** as follows.

### _throw error in main flow_

![Alt throw error](pic/bandicam%202022-10-31%2015-06-54-787.jpg)

- Must use **'includes'**, using '===' can not be correctly determined.
- Note that the contents of the Powershell output text files are **strings of words with uppercase prefixes**.

### _write into CSV in loop_

![Alt write into csv](pic/bandicam%202022-10-31%2015-11-55-891.jpg)
