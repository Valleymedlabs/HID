---
sidebar_position: 12
---

##### Fragment list validation has a 4 criteria  

#### Requirement
Application identifies all the relevant peaks from the fragment list and run following rules on relevant peaks items.  
If the sample/reference has no relevant peaks, fragment list validation is skipped.  
#### Rules
1: Avearage height of relevant peak must be greater than 5000 rfu  
2: There has to be minimum of 10 unique loci in Fragment list  
3: 50% of Allele must have height greater than 5000 rfu  
4: less than 4 Allele is allowed with height less than 1000 rfu  

#### Example
Relevant Peak Data
| Locus | Height | Height > 5000 | Height < 1000 |
| :----- | --------: | :------------: | :-----: |
| AMELOGENIN | 17327 | Yes | No |
| AMELOGENIN | 11841 | Yes | No |
| CSF1PO | 10597 | Yes | No |
| D13S317 | 3712 | No | No |
| D13S317 | 5402 | Yes | No |
| D16S539 | 6058 |  Yes | No |
| D18S51 | 2501 | No | No |
| D18S51 | 2547 | No | No |
| D3S1358 | 53961 | Yes | No |
| D7S820 | 3743 | No | No |
| D8S1179 | 1402 | No | No |
| D8S1179 | 1220 | No | No |
| PENTA D | 4321 | No | No |
| PENTA E | 782 | No | Yes |
| PENTA E | 497 | No | Yes |
| TH01 | 12458 | Yes | No |
| TH01 | 12364 | Yes | No |
| TPOX | 25285 | Yes | No |
| TPOX | 21658 | Yes | No |
<br></br>
#### Data points  
| Data | Value |
|:-------| ------: |
| No of relevant peaks | 19 |
| No of unique Allele | 12 |
| No of Allele with height > 5000 | 10 |
| % Of Allele with height > 5000 | 53% |
| Average Height of Allele | 10404 |
| No Of Allele having height < 1000 | 2 |
<br></br>
#### Status
| Validation Rule | Status |
| :---------------- | :---------- |
| 1: Avearage height of relevant peak must be greater than 5000 | Passed |
| 2. There has to be minimum of 10 unique Allele in Fragment list | Passed |
| 3. 50% of Allele must have height greater than 5000 | Failed |
| 4. less than 4 Allele is allowed wih height less than 1000 | Passed |
| OVERALL OUTCOME | **FAILED** |