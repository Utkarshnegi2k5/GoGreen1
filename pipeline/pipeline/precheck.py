import os

total_files = 0
total_lines = 0

for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith((".js", ".html", ".css")):
            total_files += 1
            path = os.path.join(root, file)

            with open(path, "r", encoding="utf-8", errors="ignore") as f:
                total_lines += len(f.readlines())

print("---- Project Analysis ----")
print("Total Files:", total_files)
print("Total Lines:", total_lines)
print("--------------------------")
