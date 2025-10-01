#!/bin/bash
set -e

# Script para criar nova tag de release e enviar pro GitLab
# Uso: ./release.sh v1.0.0

VERSION=$1

if [ -z "$VERSION" ]; then
  echo "❌ Erro: informe a versão. Exemplo:"
  echo "   ./release.sh v1.0.0"
  exit 1
fi

# Verifica se a tag já existe
if git rev-parse "$VERSION" >/dev/null 2>&1; then
  echo "⚠️ A tag $VERSION já existe!"
  exit 1
fi

echo "🏷️ Criando tag $VERSION..."
git tag "$VERSION"

echo "🚀 Enviando tag para o repositório remoto..."
git push origin "$VERSION"

echo "✅ Tag $VERSION criada e enviada com sucesso!"
echo "💡 Isso vai disparar o job de release no GitLab CI/CD."
