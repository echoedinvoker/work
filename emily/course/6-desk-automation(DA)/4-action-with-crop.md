## **API which combined with comparing CROP and move/click**

![alt introduing clickCrop, moveToCrop](pic/bandicam%202022-09-19%2002-41-38-367.jpg)

- **If the relative position coordinates are inside the CROP, we will get strange results**.
  - If there is such a need, use the original approach.
- When taking relative positions, remember that **the coordinates in ALL CROPS are always the coordinates used to create the CROP**.
- This can save a lot of development time when used in cases where availability is critical, but be careful with the first two points.
  - Not suitable for use in cases where speed is important, because the more times you compare CROP, the slower the speed becomes.

## **Synchronous command**

![alt add synchronous command at beginning](pic/bandicam%202022-09-19%2002-53-19-945.jpg)

- Looks like that synchronous instructions are executed after all asynchronous instructions have been executed.
  - This is very strange.

## **Clipboard API & Further Test for synchronous**

![alt prepare of further test(creat crop, get relative xy, copy filename)](pic/bandicam%202022-09-19%2003-03-03-090.jpg)
![alt write codes of further test](pic/bandicam%202022-09-19%2003-09-26-330.jpg)

- If the synchronous instruction is executed at the very end, "11111111" will be printed on the notebook, instead "Hello" will be printed.
- In DA WAP, there are three APIs about clipboard:
  - _api.clipboard.writeText(string)_
    - **Synchronous**
    - Write string value to clipboard.
  - _api.clipboard.readText()_
    - **Synchronous** (This and writeText are the only synchronous APIs in the DA WAP private API.)
    - Read string value from clipboard.
  - _api.pasteText(string)_
    - **Asynchronous** (be carful!)
    - This API is a combination of two steps:
      1. Write string value to clipboard. (**So this API will change content of clipboard, this is important!**)
      2. Paste string value from clipboard.

![alt result of further test](pic/bandicam%202022-09-19%2003-10-46-733.jpg)

- From the above result, it can be assumed that only "console.log" will be delayed until all asynchronous commands are executed.
