# Cloud Snapshot Residue Attack Analysis

## Project Overview

Cloud Snapshot Residue Attack Analysis is a cloud security and digital forensics project that investigates whether deleted data can remain recoverable from cloud storage snapshots.

The project focuses on understanding data persistence in cloud environments and analyzing whether information that has been deleted from active storage may still exist within previously created snapshots.

## Problem Statement

Cloud storage systems commonly use snapshots and backups for data protection and recovery. However, deleted information may potentially remain within older snapshots.

The objective of this project is to study this possibility by creating and analyzing cloud storage snapshots and examining whether previously deleted data can still be recovered.

## System Workflow

```text
Cloud Storage
      |
      v
Create Storage Snapshot
      |
      v
Delete Data
      |
      v
Analyze Snapshot
      |
      v
Recover and Examine Residual Data
      |
      v
Document Findings
```

## Technologies and Tools

* Amazon Web Services (AWS)
* Amazon Elastic Block Store (EBS)
* EBS Snapshots
* Python
* Digital Forensics
* Disk and File System Analysis
* Autopsy

## Project Structure

```text
Cloud-Snapshot-Residue-Attack-Analysis/
|
|-- backend/
|   |-- Backend application files
|
|-- frontend/
|   |-- Frontend application files
|
|-- cost_data.py
|   |-- Cloud cost-related data processing
|
|-- analyze_compressed.py
|   |-- Analysis of compressed data
|
|-- .github/
|   |-- GitHub configuration files
|
|-- README.md
|   |-- Project documentation
```

## Methodology

The project uses cloud storage snapshots to investigate data persistence after deletion.

The general process involves:

1. Creating and storing data in cloud storage.
2. Creating a snapshot of the storage volume.
3. Deleting selected data from the active storage.
4. Examining the snapshot independently from the active storage.
5. Performing forensic analysis to determine whether deleted information remains recoverable.
6. Documenting the observations and security implications.

## Key Findings

The project demonstrates the importance of considering data persistence when managing sensitive information in cloud environments.

Snapshots can serve as recovery mechanisms, but they can also preserve historical states of storage. Proper snapshot lifecycle management and access controls are therefore important when handling sensitive or confidential data.

## Security Implications

Residual data in snapshots can create additional security and privacy considerations.

Organizations should consider:

* Snapshot access control
* Snapshot retention policies
* Secure deletion requirements
* Encryption of stored data
* Lifecycle management of old snapshots
* Protection of backup and recovery infrastructure

## My Contribution

I worked on the analysis of cloud storage snapshots and the investigation of potential residual data after deletion. I also worked with the project implementation and analysis components to understand how snapshot-based recovery can affect cloud data security.

## Future Improvements

* Automate snapshot creation and analysis.
* Expand testing across different cloud storage configurations.
* Improve forensic analysis capabilities.
* Add automated reporting of recovered artifacts.
* Implement stronger snapshot lifecycle monitoring.
* Evaluate additional cloud storage services.

