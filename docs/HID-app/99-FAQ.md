---
sidebar_position: 99
---
<details>
<summary>**Sample has missing patient ID, how do I get the score for the sample?**</summary>

HID app will attempt 7 days to find a patient ID for the sample or reference. After 7 days, it will set the message as "**Too many attempts to assign Patient ID.**" and will no longer atempt to assing patient id.
Patient ID is the common link for the HID app to find and assign reference. Reference is needed for the scoring.

Even if the patient ID is missing, you can manually assign the reference to the sample. Just click Add Reference icon and find/select the reference.
</details>

<details>
<summary>**Sample has missing reference**</summary>

HID app uses **patient ID** of sample to find and assign reference to the sample. If it cannot locate the reference, it will keep attempting to find the reference for next 7 days. After 7 days, HID app will set the message to "**Too many attempts to assign reference to sample**" and will no longer assign it.  
If you happen to know the reference sanple, you can manually assign it by clicking "Add Reference" icon and find/select the reference.

:::note
You can search the "Reference" using the patient ID to verify if the reference exists or not. Alternatively, you can also use Patient name to check if the patient reference is under different patient id. 
:::
</details>

<details>
<summary>**How is reference assigned to Sample?**</summary>

HID app uses **patient ID** of sample to find and assign reference to the sample. App looks for matching patient ID in reference general data and assigns it if found and the referende is a valid reference. If there are multiple references for the same patient ID, HID app will assign the most recent reference to sample and then do the score calculation. 


:::note
Once reference is assigned to sample, you cannot unassign it.
:::
</details>

<details>
<summary>**There is a patient whose swab was reported, it's not showing up in the app**</summary>

Most likely the data didn't come to HID app. You can verify by going to **Import Log** option and search for the reference number. If the reference number didn't show-up, the data never made it to HID app. In this scenario you can  
1. manually import the data  
2. Manually assign it to Sample, if data is older than 7 days  

you can also check by logging in to SQL1 server and then go to  
1. /Users/Public/Automation_File_Backup folder and  
2. search for the file using reference number.  
</details>

<details>
<summary>**Reference with bad data got assigned to Sample. How do I reassign new reference to sample?**</summary>

In order to reassign new reference to the sample, do following.  
1. Select "Reference" from the left navigation bar and search the reference with bad data.
2. Once located, click "Invalidate" under Actions and invalidate the reference. This will unlink this reference from all the Samples and reset the score and status.

Now go back to Sample and search the sample then, 
1. Click "Add Reference", find and select the reference.
 
</details>