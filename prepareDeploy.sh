echo "clean previous build"

rm -rf build/

echo "Installing packages"

npm i
npm run build

echo "Prepearing build..."

rm -rf src/
rm -rf public/

mv build/* .

echo "Deploing..."

git branch -D gh-pages 

git checkout -b gh-pages

git add -A

git commit -m "deploy"

git push -f origin gh-pages

echo "Deployed succesfully"

git checkout main