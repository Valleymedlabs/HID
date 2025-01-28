---
sidebar_position: 11
---

HID application uses scoring alogrithm to score the matching of sample to reference.  

#### Scoring algorithm has two steps
<details>
<summary>Step1: Find  **peaks** for each locus in Fragment List data</summary>

    1. Validate data
        - EST_SIZE value not null and greater than zero
        - HEIGHT value not null and greater than zero
        - LOCUS value not null or empty
    2. Sort data by LOCUS in ascending order and HEIGHT in descending order
    3. For each LOCI
        - Set the 1st peak for the LOCI to the first value
        - Use following logic to find 2nd peak
            1. The HEIGHT must be within 55% of HEIGHT of 1st peak
            2. The absolute difference between EST_SIZE of 1st peak and 2nd peak must be greater than 3.
            3. If condition **a** is met and condition **b** fails then assign the next available HEIGHT data, following the 1st peak.
            4. If condition **a** fails, then there is no 2nd peak available for that LOCUS.
</details>
<details>
<summary>Step2: Calculate **Score**</summary>

Minimum Requirements to calculate score
    1. Sample with relevant peaks
    2. Reference associated with Sample with relevant peaks

##### Score logic will not work if there is no associated reference or there are no relevant peaks identified.

#### Scoring Logic
1. Get Sample relevant peaks
2. Get Reference relevant peaks
3. Do a cartesian product by Locus
4. For each Loci
    1. Get the absolute difference of est_size of sample and reference
    2. Count as matched if the difference is less than 1
    3. restrict matched count to maximum 2 only
5. if cartesion product has only one instance of Locus that also happened to be a "Matched", then count it as **2**
6. Score = 2 * total matched count over sum of locus (ie, 2 * sum of unique sample and reference)
7. If the score is greater than 70%, then its sample is  "Matched" otherwise "Not Matched"

</details>  
  

:::info
###### scoring alogrithm was developed jointly by Ocean Deep Technologies and teams from Valley Medical and Wellness