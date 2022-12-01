# **_User/Coach Accounts_**

- User and coach accounts are separate, but can be used under one Emily app.

# **_UiPath/Emily PDF proccess comparison_**

## **Customer Needs**

![alt pdf1](pic/bandicam%202022-09-19%2013-06-31-094.jpg)
![alt pdf2](pic/bandicam%202022-09-19%2013-06-57-534.jpg)
![alt pdf3](pic/bandicam%202022-09-19%2013-07-21-466.jpg)

- Convert the above PDF blue box part into excel.

## **Emily Result**

![alt emily pdf result](pic/bandicam%202022-09-19%2013-19-40-314.jpg)

- The module was parsed and aligned without any difficulties.
- When each item is a single row from left to right, Emily can parse it directly into a table without any trouble.

## **UiPath Result**

![alt uipath pdf result](pic/bandicam%202022-09-19%2013-23-47-862.jpg)

- The above picture blue box part of the string glued together.
  - Need to do more in-depth processing for this problem.

## **Extended question: the position of the table will change**

- Even if the format is the same as the PDF file, but also because of the amount of content may lead to changes in the position of the table.
- Each table usually has its own title, using this title to locate the table at the beginning.
  - It is worse to directly frame the content, this method will fail when the position of the table changes.
  - It doesn't have to be a title, as long as there is a fixed string relative to the table, it can be used to anchor the bounding box of the table.
    - The left and right boundaries of the bounding box are usually not a problem, what we are looking for is where the top and bottom boundaries are.
      - So the left and right borders can be defined using constant values.
      - But the upper and lower boundaries must be defined by appropriate anchors.

## **Boundary Object**

`boundary = { left: 0.118, right: 0.434, top: 6.176, bottom: 6.334 }`

`boundary = { left: 0.118, right: 0.434, top: 0.176, bottom: 0.334, page: 7 }`

The above two boundaries are equal, page can be written in the top, bottom or written out independently.

# **_Novatech Demo_**

## **Horizon Scroll**

![alt horizon scroll](pic/bandicam%202022-09-19%2014-27-10-285.jpg)
![alt horizon scroll APIs](pic/bandicam%202022-09-19%2014-27-43-541.jpg)

## **Selecting files in the network neighborhood**

![alt select files in network neighbor](pic/bandicam%202022-09-19%2014-30-24-214.jpg)

- In fact, it is exactly the same as selecting a normal file.
- We can write the path of the file to the clipboard and paste it directly to the arrow location to select the file.
  - This way you can save several steps of DA recording.

# **_Business Model suggestions by Jerry_**

## **Two Roles**

Emily's people usually have two roles in a business.

### _Account Manager_

- Track the progress of the project.
- Contact Customer.

### _Coach_

- Training Emily skills.
- Answer technical questions from customers.
- Education and training for customers.
- Deploy.

## **POC**

- Request customers to make an illustration of the operation process or directly record the actual operation screen.
  - In this way it is easy to judge which is point of POC, POC should only focus on the key points to do.
  - Only implementing points that may be difficult, such as whether the data in the PDF of the customer work order can be imported into the EDR system.
    - The purpose is to make the customer confirm that there is no problem as fast as possible. So we only do the points.
    - The other purpose of only doing key points is to save everyone's time.
      - Engineer's time is valuable, and some customers often say they don't want it in the middle of the process.

## **Four Meetings**

### _1. Introducing Emily_

### _2. Understanding customer needs_

- Evaluate what are the key points where Emily's automation may be difficult.
- Advice to customers.

### _3. POC_

- Install the skills for the POC directly on the customer's computer and run it.

# **_Error Notification_**

## **Email Notification(Default)**

![alt email notify 1](pic/bandicam%202022-09-19%2015-24-09-807.jpg)
![alt email notify 2](pic/bandicam%202022-09-19%2015-24-33-813.jpg)

- This is the default method for the Emily app, but notifications are limited to the mailboxes that the app is registered to use.
  - If you want to notify other users:
    - Append an extra step to the skill for it.
    - Create another skill for notifying others and set the mail trigger so that the mail sent by the app triggers it.

### _How to answer customers' questions about this?_

1. "Our app has four notification modes by default..."
   - Starting with the functions of the build-in.
2. "If you want other notification methods, we can customize them in the process."
   - Assure to customers that we can do customization.
     - But you(customers) have to provide logic and rules.

# **_Iteration Error_**

## **Does it stop the skill?**

- No, it will jump to the next iteration to continue to do.

## **Does it show error result?**

- No, but it will write a text file - **row-error-index.txt**.
  - We can trigger the failure-specific steps based on **the presence or absence of a row-error file**.
- Another iteration failure is that the waitFor API in DA low-code fails to find the CROP.
  - In this case, **null** is returned, so you can use **fulcy** directly in the DA low-code to trigger the code that should be executed in case of failure.

## **Real World Example**

- In the work order entry DA case of DingXin ERP, after the work order is entered, you can add APIs like **find** or **waitFor** to confirm if the work order is received correctly.
  - And write the work order entry failure procedure so that ERP can go back to entering the next work order.

# **_Google Cloud API_**

## **Visual**

- OCR

## **Auditory**

- Give a file like mp3 or wav and then get the text.

## **Text**

- Give text files to be translated into other languages.
- Giving text files, interpreting text emotions.

## **Machine Learning**

- If the customer's requirements are not above, they may have photos of good and bad products and need our Emily to be able to automatically determine good or bad products from the pictures, then we can use this.

## **GCP cloud service, not website**

- Because the website blocks the same IP from doing routine work, we use the GCP cloud.
  - Because website services are expected to be seen by real human, their source of revenue is advertising.
  - If you find a web page that translates fast and well and doesn't detect if the user is a robot, then you can just use Emily's web automation to use it for translation.
- GCP cloud services are pay-per-use. Google is charging customers directly, not through us.

## **Many modules are done but not implemented**

- Because Jerry wanted to make sure the customer really needed to use it, then he will implement the module into Emily.
  - Keep Emily's module numbers from exploding.
  - Customers often ask what features are available, Jerry will say I have them, would you like to pay for them, and if you do, Emily will add the module tomorrow.

# **_reCAPTCHA_**

![alt reCAPTCHA](pic/bandicam%202022-09-19%2016-20-45-961.jpg)

- Jerry suggested that we should let the skill stop here and notify user to enter an answer so that the skill can continue to run.

  - Because having people input can usually be performed for a period of time.
  - If Emily use OCR or something like that to crack it, it will usually get a more difficult or another type of reCAPTCHA next time.
    - Then you will find that customers keep coming to harass you and you will need to keep retraining this part without getting any additional fees.

- The strongest OCR in the world is Google, if you take this picture to Google ORC web page verification, if even Google ORC are failed, then do not need to think to deal with it.
- And ORC verification will definitely have a chance of failure.
