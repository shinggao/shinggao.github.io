#!/bin/bash

# Make sure to periodically check for and update rotten links
wget -i denv_serotypes_links.txt

# If download links and/or filenames change, update the following commands accordingly
gunzip *.fna.gz
mv GCF_000862125.1_ViralProj15306_genomic.fna DENV1.fa
mv GCF_000871845.1_ViralProj20183_genomic.fna DENV2.fa
mv GCF_000866625.1_ViralProj15598_genomic.fna DENV3.fa
mv GCF_000865065.1_ViralProj15599_genomic.fna DENV4.fa

for file in *.fa; do
    samtools faidx "$file"
    jbrowse add-assembly "$file" --out $APACHE_ROOT/jbrowse2 --load copy
done

