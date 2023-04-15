set -e

npm run build

cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.Jhonatan2022/Aprendiendo-React main:gh-pages
cd -