import os
import re

directories = [
    '/home/ameen/ameen/projects/grad/Haze_clue_website/app/pages/dashboard',
    '/home/ameen/ameen/projects/grad/Haze_clue_website/app/components/dashboard'
]

pattern = re.compile(r'>\s*([^<{]*[A-Za-z][^<}]*)\s*<')

results = []
for directory in directories:
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.vue'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    matches = pattern.findall(content)
                    clean_matches = [m.strip() for m in matches if m.strip() and not m.strip().startswith('{{')]
                    if clean_matches:
                        results.append(f"{os.path.relpath(file_path, '/home/ameen/ameen/projects/grad/Haze_clue_website/app')}:\n  " + "\n  ".join(clean_matches))

with open('/home/ameen/ameen/projects/grad/Haze_clue_website/scratch/hardcoded_dashboard.txt', 'w', encoding='utf-8') as f:
    f.write("\n\n".join(results))

print(f"Found {len(results)} files with hardcoded text.")
