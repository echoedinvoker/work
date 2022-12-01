# **_Skill: Insert Bandicam Images to VIM_**

## **Original Version**

- https://github.com/echoedinvoker/emily/blob/master/skill/insert-pics-to-memo/memo.md

## **use DA to replace userfill**

![Alt check if VSCode on the top logic ](pic/bandicam%202022-09-24%2014-53-00-078.jpg)

- More robust way to enter VSCode Interface.

![Alt check if VSCode on top logic (VSCode UI) ](pic/bandicam%202022-09-24%2014-55-42-322.jpg)

- Every waitFor API now uses area boundaries to increase reliability.
  - The disadvantage is that before using skill, VSCode must be opened and presented in full screen by default.

![Alt get picPath and projPath by parsing VSCode current project path ](pic/bandicam%202022-09-24%2014-59-08-180.jpg)

- We can use VSCode's currently open project folder path to resolve the paths we need, so we don't need the userfill WAP here.
  - The disadvantage is that VSCode must be opened with the correct project before using skill.
- Combine some of the find, waitFor results that generate meaningful returns in the console log.
  - Not only in the development process is very good, if you need to debug will feel its benefits more, because if there are bugs out, writing any more codes will feel annoyed.

## **Update Original DA**

![Alt add empty line between images ](pic/bandicam%202022-09-24%2015-05-06-378.jpg)

- If there are more than one DA in a skill, the CROP captured by the previous DA can be used by the subsequent DA directly, so there is no need to set the CROP repeatedly.
  - CROP in fact is also a workspace folder of the picture file, so what CROP can be used at present, you can look directly at the workspace folder.

## **Expand Sub-Skill**

- I have expanded the original part of inserting a sub-skill at the end, meaning that the steps inside become the steps of the main skill, so that we do not need this sub-skill in the app in the future.
  - So I just delete sub-skill in Emily app to keep my skill list clean.

# **_Skill: Index Metadata of memo to Elasticsearch_**

## **Original Version**

- https://github.com/echoedinvoker/emily/blob/master/skill/index-memo-to-elasticsearch/memo.md

## **Update Userfill**

![Alt new userfill ](pic/bandicam%202022-09-24%2015-11-03-120.jpg)

- You can choose not to enter any values for "video link" and "lecturer".

## **Add condition to Udemy DA**

![Alt condition logic(script wap) ](pic/bandicam%202022-09-24%2015-13-36-840.jpg)
![Alt step condition flow ](pic/bandicam%202022-09-24%2015-13-21-416.jpg)

## **Add getting github link function to DA which only get markdown before**

![Alt get github link from VSCode current path(code) ](pic/bandicam%202022-09-24%2015-17-32-059.jpg)

## **Bundle script update**

![Alt (script) userfill or result from udemy website DA ](pic/bandicam%202022-09-24%2015-21-57-749.jpg)

- Because now udemy course link and lecturer first name and last name have two sources, user input or DA, so you can see the use of many ternary operators in the script.
  - Thanks to the ternary operator, even though the logic is more complex, the codes still look very simple.
