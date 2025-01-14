---
sidebar_position: 91
---

GeXP data elements. Data from GeXP comes in "General", "Analysis Parameters", "Locustag", "Method", "Consumables" and "Fragment List" sections.  
Data from "General" and "Fragment List" are used in HID application. Data for all other sections are stored for future reference.

<details>
<summary>**General**</summary>
|Column| Description| Sample data|
|:---|:------------|:--------------|
|Name|File name|24093EX0049.C08_24040307YR|
|Type|Content type|Fragment Result|
|Database|GeXP db|HUMAN ID RUNS_12|
|Project|project name| HUMAN ID RUNS_12|
|Modified|Run date|Wednesday, April 03, 2024 07:58:26|
|Sample Plate|Plate ID|HID_20240402_01+RND|
|Sample Name|Sample|4093EX0049.C08_24040306RF|
|Sample Plate barcode||
|Sample Subject ID||
|Sample Position|Location on the plate|C08|
|Instrument|GeXP Instrument|GenomeLab System (Ver. 11.0.24)|
|Operator Name|Lab Technitian|KS|
</details>
<details>
<summary>**Analysis Parameters**</summary>

|Column| Description| Sample data|
|:---|:------------|:--------------|
|Name|name|Custom_HumanID_Parameters|
|Dye Mobility Calibration||NoCorrection(1)|
|Standard||SizeStandard-600(1)|
|Slope Threshold||7
|Include Peaks||95|
|Identify Alleles||Yes|
|Dye Used||D1|
|Model Used||Quartic|
|Axes||Fragment Size (nt) vs. Migration time|
|Std. Fragments Used:||60, 70, 80, 90, 100, 120, 140, 160 ..,620, 640|
</details>

<details>
<summary>**Locustag**</summary>
|Column| Description| Sample data|
|:---|:------------|:--------------|
|Name| |CSF1PO (C),  D3S1358 (C),  D16S539 (C),  D13S317 (C),  D7S820 (C),  D18S51 (C),  D8S1179 (C),  Penta D (C),  Penta E (C),  TPOX (C),  AMEL (c),  TH01 (C)|
</details>

<details>
<summary>**Method**</summary>

|Column| Description| Sample data|
|:---|:------------|:--------------|
|Name||Frag-4|
|Capillary Temperature||50.0|
|Wait for Temperature||Yes|
|Denature Duration||120|
|Inject Voltage||2.0|
|Inject Duration||30|
|Stage 1 Separate Voltage||4.8|
|Stage 1 Ramp Duration||2.0v
|Stage 2 Separate Voltage||4.8|
|Stage 2 Start Time||10.0|
|Stage 2 Ramp Duration||5.0|
|Total Separate Duration||60.0|
</details>

<details>
<summary>**Consumables**</summary>

|Column| Description| Sample data|
|:---|:------------|:--------------|
|Capillary Array Serial Number||1016230087
|Capillary Array Part Number||608087|
|Total Length of Capillary||33.0|
|Length of Capillary to Detector||30.0|
|Internal Diameter of Capillary||75.0|
|Number of Runs||33|
|Days on Instrument||6.3|
|Gel Part Number||391438|
|Gel Lot Number||M401312|
|Gel Algorithm Type||0|
|Hours on Instrument||11|
|Buffer Part Number||608012|
|Buffer Lot Number||CEQ Sequencing Separation Buffer|
</details>

<details>
<summary>**Fragment List**</summary>

Multiple rows of data comes in Fragment list for the Sample. On an average there will be around 255 records in this section for the sample.  
##### Only highligted columns are used in the HID application.  
|Column| Description| Sample data|
|:---|:------------|:--------------|
|Std ||* or blank|
|Peak#||1,2,3,...|
|**DyeName**||D1, or D2, or D3, or D4|
|MigTime|||
|StdSize|||
|**EstSize**|||
|**Height**|||
|Area|||
|Width|||
|Mobility|||
|Efficiency|||
|Resolution|||
|**Locus**|||
|**AlleleID**|||
|NumRepeat|||
|**Comment**|||
|unknown||needed to correctly parse data|
</details>

