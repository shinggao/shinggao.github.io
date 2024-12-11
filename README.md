# BioE131-Final-Project

JBrowse2 general setup instructions based on BioE 131 Lab 8 directions, found below:

https://github.com/bioe131/lab-8-shinggao/tree/main

This README gives Linux instructions for installing JBrowse2 plugins and dengue virus genomes on an AWS instance and assumes JBrowse2 and related dependencies have already been installed per the directions in the above link. To preview what a local setup setup should look like, you can visit https://shinggao.github.io/jbrowse2

## Terminal Setup
In your root directory, download all files from this repo. If you choose to organize your files into a different location or directory, make sure to prepend all path variables in all bash scripts (below, in the scripts folder) with the corresponding new filepaths.

Navigate to `scripts` and run the following bash script to set up the jbrowse2 folder in the proper location (filepath stored in `APACHE_ROOT`). Make sure to `source` the script to update the terminal session with the new permissions and exported variables.

```
source initialize_terminal_session.sh
```

## Load and process dengue virus genome data

Make sure you are still in the `scripts` directory, then run the following scripts. The links used to retrieve data (both .fna and .gff files) are stored in `denv_serotypes_links.txt`. Should any of these links stop working, you can find the updated download link by searching for the NCBI RefSeq number in the filename. Each number corresponds to a dengue virus serotype.

Make sure to replace any outdated links and filenames in all affected scripts.
```
./install_denv_genomes.sh
./install_denv_annotations.sh
```

## Install the Protein3d JBrowse2 plugin
This plugin is available on the [JBrowse2 plugin store](https://jbrowse.org/jb2/plugin_store/) and allows us to visualize the 3D structure of proteins coded by the dengue virus genomes we uploaded. Navigate to the `config.json` file for JBrowse2:
```
cd ~/var/www/html/jbrowse2
vim config.json
```

Add the following plugin configuration to the file
```
"plugins": [
    {
      "name": "Protein3d",
      "url": "https://unpkg.com/jbrowse-plugin-protein3d/dist/jbrowse-plugin-protein3d.umd.production.min.js"
    }
  ]
```

## Launch JBrowse2 locally
Open `http://yourhost/jbrowse2/` in your web browser, replacing `yourhost` with the most up-to-date IP address of your AWS instance. There should now be several options in the main menu. Follow the guide in the "Launch the JBrowse 2 application and search for a gene in the linear genome view" section to verify the genome data was installed correctly. You should be able to search for DENV1, DENV2, DENV3, and DENV4, corresponding to all serotypes of dengue virus.

When viewing a genome, note any features of interest/coding regions. Select the ID attribute from the right-hand side of the screen and search for its corresponding PDB ID online. Some examples are 1ok8, which corresponds to the trimeric spike conformation of serotype 2's envelope glycoprotein, and 3lkw, which is an NS2B/NS3 protease active site mutant coded by serotype 1. 

Open a new Protein View session and input the found PDB ID (click on the wrench icon on the right > input PDB ID on the left > Assembly 1 > Apply Action > 3D Representation > Apply. The 3D protein view should show up for the feature's corresponding protein.

