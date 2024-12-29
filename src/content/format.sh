#!/bin/bash

# Configuration
BASE_DIR="./docs"  # Base directory for content

# Function to sanitize filenames (remove invalid URL characters)
sanitize_filename() {
    local input="$1"
    local extension="${input##*.}"                         # Extract file extension
    local name="${input%.*}"                               # Remove extension
    local sanitized=$(echo "$name" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g' | sed -E 's/^-+|-+$//g') # Clean name
    echo "$sanitized.$extension"                           # Append extension
}

# Rename files recursively
rename_files() {
    local current_dir="$1"

    # Iterate through all files and subdirectories
    for item in "$current_dir"/*; do
        if [[ -d "$item" ]]; then
            # Recursively process subdirectories
            rename_files "$item"
        elif [[ -f "$item" ]]; then
            # Process files
            local dir=$(dirname "$item")                   # Directory path
            local filename=$(basename "$item")             # Current filename
            local sanitized=$(sanitize_filename "$filename") # Sanitized filename

            # Rename file if necessary
            if [[ "$filename" != "$sanitized" ]]; then
                mv "$item" "$dir/$sanitized"
                echo "Renamed: $item -> $dir/$sanitized"
            fi
        fi
    done
}

# Start renaming process
rename_files "$BASE_DIR"

echo "File renaming completed!"
