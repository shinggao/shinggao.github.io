#!/bin/bash

# Make surie to periodically check for and update rotten links
# No need to execute the following wget line, gff files were retrieved
# using the same command in install_denv_genomes.sh
# wget -i denv_serotypes_links.txt

gunzip *.gff.gz

jbrowse sort-gff GCF_000862125.1_ViralProj15306_genomic.gff > denv1_genes.gff
jbrowse sort-gff GCF_000871845.1_ViralProj20183_genomic.gff > denv2_genes.gff
jbrowse sort-gff GCF_000866625.1_ViralProj15598_genomic.gff > denv3_genes.gff
jbrowse sort-gff GCF_000865065.1_ViralProj15599_genomic.gff > denv4_genes.gff

assemblies=("DENV1" "DENV2" "DENV3" "DENV4")
i=0
for file in denv*_genes.gff; do
    bgzip "$file"
    tabix "${file}.gz"
    
    assembly=${assemblies[$i]}

    # Load gene annotation track into jbrowse
    jbrowse add-track "${file}.gz" --out "$APACHE_ROOT/jbrowse2" --load copy --assemblyNames "$assembly"
    ((i++))
done

jbrowse text-index --out $APACHE_ROOT/jbrowse2

