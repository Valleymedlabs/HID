---
sidebar_position: 1
---

![dataflow](../../static/img/hid-dataflow.png)

This diagram shows how data flows from GeXP machine to HiD web application.

- Data file from GeXP machine is transmitted every hour to SQL1 server's "**Automation**" folder
- SQL1 server runs batch script to transmit file from "Automation" folder to application server under folder "process"
- Background process runs with interval of 30 minutes at 15 and 45 minutes
- Data ingestion program, does followings:
    - parse the data in [General] [FragmentList] [Analysis Parameters] [Lucas Tag] [Method] and [Consumables] section
    - if there is no **General** section, ingestion of that data file stops with error "Invalid data file".
    - finds the 2 peaks for every loci in fragment list
    - save data in respective tables
    - assign patient id, name and dob, if sample and patient id is found in VPR database, patient id is assigned to sample
    - Runs the Fragment List Validation criteria
    - if data file is sample
        - if patient id is found, app will find and assign validated reference
        - if reference is assigned, app calculate matching score using pre-defined matching logic.
    - Send notification to HID frontend
