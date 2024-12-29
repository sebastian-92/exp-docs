#!/bin/bash

# Define the base directory where the files are located
BASE_DIR="/home/cbass/exp-docs/exp-docs-main/src/content/docs"

# Define the path to the config.mjs file
CONFIG_FILE="config.mjs"

# Function to extract slugs from config.mjs
extract_slugs() {
    # Use grep and awk to parse the slugs from the config file
    # We assume slugs are in the format of "slug": "filename"
    grep -oP '"\K[^"]+' "$CONFIG_FILE" | while read -r slug; do
        # Construct the desired filename from the slug
        # For example, remove the "kajigs/block-updates/" part and the extension
        new_filename=$(echo "$slug" | sed 's/\//-/g').md
        echo "$slug $new_filename"
    done
}

# Function to restore filenames
restore_filenames() {
    # Loop through the extracted slugs and filenames
    extract_slugs | while read -r slug new_filename; do
        # Create the path to the current file
        current_file="$BASE_DIR/$slug.md"
        
        # Check if the file exists
        if [ -f "$current_file" ]; then
            # Create the new file path
            new_file_path="$BASE_DIR/$new_filename"

            # Rename the file
            echo "Renaming: $current_file -> $new_file_path"
            mv "$current_file" "$new_file_path"
        else
            echo "File not found: $current_file"
        fi
    done
}

# Run the function to restore filenames
restore_filenames

