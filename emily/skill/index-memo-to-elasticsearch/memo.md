# **_User fill Metadata_**

![Alt user fill step](pic/bandicam%202022-09-21%2023-33-01-763.jpg)
![Alt user fill wap](pic/bandicam%202022-09-21%2023-34-10-490.jpg)

- Some points that can be further improved:
  - "category" and "tag" should have trim processing, because users may be used to adding spaces after the comma when typing.
  - Determine whether it is no value, if this function is added, the skills will be more generic.

# **_Udemy site_**

## **Do not clean partition**

![Alt go to udemy learning site](pic/bandicam%202022-09-21%2023-35-07-549.jpg)
![Alt partition problem](pic/bandicam%202022-09-21%2023-35-31-515.jpg)

- Kibana will directly detect whether we have used cookies or not, and if not, it will run a bot test before or after login.
  - The easiest way to handle this is to **uncheck the clear browser information** section in the skill settings.
  - The **partition** set here should be different from other skills, so that it will not be changed by the settings of other skills.

## **Get metadata from Udemy learning page**

![Alt script step](pic/bandicam%202022-09-21%2023-36-02-657.jpg)
![Alt use script to get data from udemy](pic/bandicam%202022-09-21%2023-38-03-820.jpg)

## **Get Markdown source code as a Metadata**

![Alt get markdown step](pic/bandicam%202022-09-21%2023-38-29-186.jpg)
![Alt get markdown wap 1](pic/bandicam%202022-09-21%2023-40-38-432.jpg)
![Alt get markdown wap 2](pic/bandicam%202022-09-21%2023-42-23-537.jpg)

# **_Bundle all seperate Metadata to singld JSON_**

![Alt bundle all to one json step](pic/bandicam%202022-09-21%2023-42-46-611.jpg)
![Alt bundle all to one json wap](pic/bandicam%202022-09-21%2023-43-12-472.jpg)

# **_Index Metakdata on KIBANA console by DA_**

![Alt da kibana step](pic/bandicam%202022-09-21%2023-43-33-628.jpg)
![Alt da kibana 1](pic/bandicam%202022-09-21%2023-45-57-480.jpg)
![Alt da kibana 2](pic/bandicam%202022-09-21%2023-47-02-236.jpg)

- Although Kibana is a web page, I don't use **web automation** here but **DA**.
  - This is because each line of the internal editor in kibana's **Dev Tool console** is **dynamically generated**, and it may not be much easier to parse how to catch the right element than DA.
