#!/bin/bash

# Directory to search and restore filenames
TARGET_DIR="src/content/docs/"

# Read the config.mjs file and extract slugs
slugs=$(grep -oP "(?<=slug: ').*?(?=\s*\})" config.mjs)

# Iterate over all subdirectories and files
find "$TARGET_DIR" -type f | while read -r file; do
    # Get the filename from the path
    filename=$(basename "$file")

    # Check if the filename matches the pattern (2 letters deleted from the start)
    if [[ ${#filename} -gt 2 ]]; then
        # The new filename should match the slug but with the first two characters removed
        for slug in $slugs; do
            # Extract the last part of the slug (after the last slash)
            expected_filename=$(basename "$slug")

            # Compare and restore the filename
            if [[ "${filename:2}" == "$expected_filename" ]]; then
                new_name="$TARGET_DIR/$expected_filename"
                
                # Rename the file
                mv "$file" "$new_name"
                echo "Renamed $file to $new_name"
                break
            fi
        done
    fi
done
echo 'worked'
