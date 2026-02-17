import os
import sys

total_files = 0
total_lines = 0
todo_count = 0

for root, dirs, files in os.walk("."):
    # Skip node_modules folder
    if "node_modules" in root:
        continue

    for file in files:
        if file.endswith((".js", ".html", ".css")):
            total_files += 1
            path = os.path.join(root, file)

            line_count = 0

            with open(path, "r", encoding="utf-8", errors="ignore") as f:
                for line in f:
                    line_count += 1
                    total_lines += 1

                    if "TODO" in line:
                        todo_count += 1

            # Warn if file is too large
            if line_count > 300:
                print(f"Warning: Large file detected -> {file} ({line_count} lines)")

print("---- Project Analysis ----")
print("Total Files:", total_files)
print("Total Lines:", total_lines)
print("TODO Comments:", todo_count)
print("--------------------------")

# Fail pipeline if no source files found
if total_files == 0:
    print("ERROR: No source files found!")
    sys.exit(1)
