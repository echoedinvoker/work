# **_Continous Writing Skill & Userfill_**

![Alt insert new step ](pic/bandicam%202022-09-22%2023-57-53-193.jpg)

- Continue to **insert-pics-to-memo** this skill to continue training.
  - So we already have:
    - data.txt - a JSON formatted txt file containing the relative path of each image.
    - The codes for each inserting image have been written on the VIM.

![Alt userfill project path(wsl) ](pic/bandicam%202022-09-22%2023-59-52-645.jpg)

- Because I want to automatically open the image in VS Code by entering the WSL image path, I need the WSL project folder path to rewrite the image path.
  - This path can be copied directly in VS Code, instead of opening the File Explorer copy.

# **_Convert img files paths data to CSV_**

![Alt convert txt to CSV for loop(result) ](pic/bandicam%202022-09-23%2000-01-44-577.jpg)
![Alt CSV-creator coding ](pic/bandicam%202022-09-23%2000-14-26-023.jpg)

- Use the project folder path to recreate the absolute path of the image in WSL.

![Alt rename userfill(0).txt ](pic/bandicam%202022-09-23%2001-14-57-951.jpg)

- Because Userfill is also used in the sub-skills, there will be a conflict in the file name, so you have to change the first userfill(0).txt name first. (in this case, I changed it to 'root.txt')

![Alt got CSV file for loop ](pic/bandicam%202022-09-23%2000-15-06-518.jpg)

# **_Open a sub-skill for Loop_**

![Alt open a sub-skill for loop part ](pic/bandicam%202022-09-23%2000-26-05-554.jpg)

- In fact, it seems that the function of inserting new commands does not work with loops, so we have to train another subskill to insert.

![Alt loop tool ](pic/bandicam%202022-09-23%2000-26-37-050.jpg)
![Alt choose CSV file into loop ](pic/bandicam%202022-09-23%2000-26-48-116.jpg)

![Alt loop setting & checking ](pic/bandicam%202022-09-23%2000-27-16-603.jpg)

# **_DA for Open Image(Loop)_**

![Alt enter DA WAP ](pic/bandicam%202022-09-23%2000-28-00-082.jpg)
![Alt add CROP 'EXPLORER' in VS Code ](pic/bandicam%202022-09-23%2000-29-22-488.jpg)
![Alt DA coding for open image ](pic/bandicam%202022-09-23%2000-47-17-855.jpg)

- Press F1 in VS Code to open the image path in the loop by typing.

![Alt DA opened imag(result) ](pic/bandicam%202022-09-23%2000-48-18-010.jpg)

# **_Userfill Alt content for each image_**

![Alt userfill alt content ](pic/bandicam%202022-09-23%2000-50-07-228.jpg)

- This allows the user to look at the images in the loop and enter the desired ALT content.

# **_DA for writing ALT in VIM automatically_**

![Alt DA coding for auto write alt in vim ](pic/bandicam%202022-09-23%2001-10-23-055.jpg)

- Here's how to automatically key in the user input in VIM.
- VIM control is really compatible with api.keyboard.type, the only thing you have to pay attention to is whether the input method is correct or not.

![Alt DA writen alt(result) ](pic/bandicam%202022-09-23%2001-11-29-154.jpg)
