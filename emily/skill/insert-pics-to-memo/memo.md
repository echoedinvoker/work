## **User filling the Path where to store PICS**

![Alt userfill step](pic/bandicam%202022-09-21%2017-02-45-677.jpg)
![Alt userfill wap](pic/bandicam%202022-09-21%2017-03-09-341.jpg)

- Because the path to the image folder is different every time you need it, you can use **user fill** to enter the folder path.

### _How to get Correct WSL Path?_

> Because Emily is installed on Windows, the path to the folder must be viewed from a Windows perspective.
> ![Alt reveal in exploere](pic/bandicam%202022-09-21%2017-03-52-200.jpg) > ![Alt window folder](pic/bandicam%202022-09-21%2017-04-20-674.jpg)

- So you must actually open the **Windows Explorer** and get the path instead of getting it directly from VS Code.

## **Check PICS folder and Convert to Paths CSV**

![Alt dir2csv step](pic/bandicam%202022-09-21%2017-04-55-170.jpg)
![Alt dir2csv wap](pic/bandicam%202022-09-21%2017-08-01-433.jpg)

- If you push the processed data directly into the array **data**, the order will be messed up.
  - So there must be a **timestamp** property for sorting.
- Regular expression use **|** to represent **OR**.
  - How about **AND**? This issue is discussed in the following links.
    - https://stackoverflow.com/questions/469913/regular-expressions-is-there-an-and-operator.

## **DA**

![Alt desktop step](pic/bandicam%202022-09-21%2017-08-36-626.jpg)
![Alt desktop wap 1](pic/bandicam%202022-09-21%2017-11-14-882.jpg)

- Because the image is fixed at the bottom, if you want to make it better, you should add the boundary parameter to limit the scope of CROP search.
- **memo.md** There are several similar images in the VS Code interface, so it is easy to catch the wrong.
  - I found that even with **the same confidence parameter value**, the find API tends to immediately grab an image even if it's wrong, whereas with the waitFor API it waits.
    - This is not what I expected.

![Alt desktop wap 2](pic/bandicam%202022-09-21%2017-12-31-377.jpg)

- Using **api.pasteText** under vim is very smooth, too.
- In fact, vim was found to be very suitable for automating the use of DA's **api.keyboard.type**.
- Currently, you need to run the skill with **memo.md already opened and minimized in VS Code** to run properly.
  - There is still a lot of room for improvement to make this skill more robust.
