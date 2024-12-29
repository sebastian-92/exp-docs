#!/bin/bash

# Configuration
BASE_DIR="./docs"          # Base directory for content
OUTPUT_FILE="sidebarConfig.js"  # Output file
ROOT_LABEL="Docs"          # Top-level label in the sidebar

# Function to sanitize slugs (remove invalid URL characters)
sanitize_slug() {
    local input="$1"
    echo "$input" | \
        tr '[:upper:]' '[:lower:]' | \
        sed -E 's/[^a-z0-9]+/-/g' | \
        sed -E 's/^-+|-+$//g'  # Replace invalid characters, trim hyphens
}

# Recursive function to generate sidebar items
generate_sidebar_items() {
    local current_dir="$1"
    local parent_label="$2"

    # Start group
    echo "  {" >> "$OUTPUT_FILE"
    echo "    label: '$parent_label'," >> "$OUTPUT_FILE"
    echo "    items: [" >> "$OUTPUT_FILE"

    # Process files and directories
    for item in "$current_dir"/*; do
        if [[ -d "$item" ]]; then
            # Subdirectory -> Recursive call
            local dir_name=$(basename "$item")
            generate_sidebar_items "$item" "$dir_name"
        elif [[ -f "$item" ]]; then
            # File -> Generate slug
            local file_name=$(basename "$item")
            local file_base_name="${file_name%.*}"  # Remove extension
            local sanitized_slug=$(sanitize_slug "$file_base_name")

            # Relative slug from docs directory
            local relative_slug="${item#$BASE_DIR/}"
            relative_slug=$(sanitize_slug "${relative_slug%.*}")  # Remove extension and sanitize

            # Add file entry
            echo "      { label: '$file_base_name', slug: '$relative_slug' }," >> "$OUTPUT_FILE"
        fi
    done

    # End group
    echo "    ]," >> "$OUTPUT_FILE"
    echo "  }," >> "$OUTPUT_FILE"
}

# Create output file and write the header
cat <<EOF > "$OUTPUT_FILE"
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'exp-docs',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
EOF

# Generate top-level files in ./docs
echo "  {" >> "$OUTPUT_FILE"
echo "    label: '$ROOT_LABEL'," >> "$OUTPUT_FILE"
echo "    items: [" >> "$OUTPUT_FILE"

# Process top-level files first
for item in "$BASE_DIR"/*; do
    if [[ -f "$item" ]]; then
        # File -> Generate slug
        file_name=$(basename "$item")
        file_base_name="${file_name%.*}"
        sanitized_slug=$(sanitize_slug "$file_base_name")
        relative_slug=$(sanitize_slug "${item#$BASE_DIR/}")
        relative_slug="${relative_slug%.*}" # Remove extension

        # Add top-level file
        echo "      { label: '$file_base_name', slug: '$relative_slug' }," >> "$OUTPUT_FILE"
    fi
done

echo "    ]," >> "$OUTPUT_FILE"
echo "  }," >> "$OUTPUT_FILE"

# Process ./docs/kajigs as nested groups
generate_sidebar_items "$BASE_DIR/kajigs" "kajigs"

# Finalize the output
cat <<EOF >> "$OUTPUT_FILE"
      ],
    }),
  ],
});
EOF

# Notify user
echo "Sidebar config generated in $OUTPUT_FILE"
