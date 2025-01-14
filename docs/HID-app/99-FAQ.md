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