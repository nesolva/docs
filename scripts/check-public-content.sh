#!/usr/bin/env bash
# Blocks content that must never appear on the public help site.
# Usage: scripts/check-public-content.sh [--no-stubs]
#   --no-stubs  also fail on pages that are still stubs ({/* stub */}).
set -uo pipefail

cd "$(dirname "$0")/.."

no_stubs=false
[ "${1:-}" = "--no-stubs" ] && no_stubs=true

dirs=()
for d in es en snippets; do [ -d "$d" ] && dirs+=("$d"); done
[ ${#dirs[@]} -eq 0 ] && { echo "No content folders found."; exit 0; }

forbidden=(
  'fingerprint' 'huella digital' 'vpn' 'inc[oó]gnito'
  '\bbots?\b' 'heur[ií]stic' 'umbral' 'threshold' 'puntaje de riesgo' 'risk score'
  'src/' '/api/' 'localStorage' 'sessionStorage' 'cookie' 'httponly' 'jwt'
  'access token' 'refresh token'
  '[0-9]+ *(intentos|attempts|minutos|minutes|horas|hours|d[ií]as|days|segundos|seconds)\b'
  '\bTODO\b' '\bPENDIENTE\b'
)
$no_stubs && forbidden+=('\{/\* stub \*/\}')

status=0
for pattern in "${forbidden[@]}"; do
  if matches=$(grep -rniE --include='*.mdx' --include='*.md' -e "$pattern" "${dirs[@]}"); then
    echo "Forbidden pattern /$pattern/:"
    echo "$matches" | sed 's/^/  /'
    status=1
  fi
done

if [ $status -eq 0 ]; then
  echo "Public content check passed."
else
  echo
  echo "Public content check failed. The help site documents only what users and administrators see and do."
fi
exit $status
