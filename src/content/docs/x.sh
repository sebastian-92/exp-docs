#!/bin/bash

# Find all files in the current directory and subdirectories
find . -type f | while read -r file; do
    # Get the base name of the file (without the path)
    base_name=$(basename "$file")
    
    # Check if the file name is longer than 2 characters
    if [ ${#base_name} -gt 2 ]; then
        # Create a new file name by removing the first two letters
        new_name=$(echo "$base_name" | sed 's/^..//')
        
        # Rename the file (using mv command)
        mv "$file" "$(dirname "$file")/$new_name"
    fi
done

