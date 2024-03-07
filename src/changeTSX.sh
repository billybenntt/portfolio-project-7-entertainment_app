#!/bin/bash

# Change files extensions from .js to .ts
find . -type f -name "*.js" -exec sh -c 'mv "$1" "${1%.js}.ts"' _ {} \;

# Change files extensions from .jsx to .tsx
find . -type f -name "*.jsx" -exec sh -c 'mv "$1" "${1%.jsx}.tsx"' _ {} \;
