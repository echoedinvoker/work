## **Analyze**

- **Low-code** can only interact with files in **workspace**, not with external files.
- Only the **module's PICK** and some **tools** can interact with **external files**.
  - Both of these methods will add **setup items** to the installation once the external file is specified. _(increase user confuse)_
  - In addition to specifying **external files**, we can use **document variables** so that they do not add to the **setup items** during installation.
    - But the **document variable** must be a **.txt file** with a value written in it.
      - This way if you need a lot of **document variables** will prepare a lot of **.txt files**. _(increase user confuse)_

## **Goal**

- Reduce the number of **setup items** during installation.
- Reduce the number of **.txt files** to be prepared.

## **Practice Example**

### _user write configuration file_

![Alt write settings by nodepad](pic/bandicam%202022-10-29%2016-28-24-965.jpg)

- This settings.txt is left for users to write.
  - So instead of saving it as .json, here is .txt to avoid confusing users.

### _Step1: import configuration file_

![Alt import btn](pic/bandicam%202022-10-29%2016-29-30-005.jpg)

- The first step must be to import the configured text file into.

![Alt import UI](pic/bandicam%202022-10-29%2016-31-09-552.jpg)

- It is better to have the second step in the above picture, if you have it, you don't need to care about the file name written by the user, because it will become the name set in step 2 after importing into the working folder.
- We can directly convert the expension of the file into json by step 2.

### _Step2: create document variable_

![Alt script btn](pic/bandicam%202022-10-29%2016-33-29-685.jpg)

![Alt script contents](pic/bandicam%202022-10-29%2016-39-26-127.jpg)

- The configuration files that have been imported into workspace can be called directly by low-code, but some fields in module and tool can't be filled it directly, so you have to use script to generate **document variables** for them.

### _Use Document variables in modules_

![Alt excel module](pic/bandicam%202022-10-29%2016-44-35-210.jpg)

![Alt excel UI](pic/bandicam%202022-10-29%2016-58-59-312.jpg)

### _Add calling settings from low-code_

![Alt export module](pic/bandicam%202022-10-29%2016-59-16-865.jpg)

![Alt export ui](pic/bandicam%202022-10-29%2017-19-41-337.jpg)

- The **PICK** field in this module can only use the **document variable**, but the following **low-code** part can be directly called in the **workspace** configuration file content.

### _Result_

![Alt result](pic/bandicam%202022-10-29%2017-20-05-111.jpg)

![alt](pic/bandicam%202022-10-29%2017-25-22-500.jpg)

- Because our **module** or **tool(except 1st import)** does not point directly to external files, but uses **document variables**, only the first import tool will generate the **setup item**.
