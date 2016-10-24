BUILD_DIR=./build
BIN=node_modules/.bin
CSS=build/assets/styles/app.css

node_modules: package.json
	npm install

build: node_modules
	rm -rf $(BUILD_DIR)
	$(BIN)/wintersmith build
	$(BIN)/postcss --use autoprefixer --replace $(CSS)

deploy: build
	$(BIN)/gh-pages -d build

preview: node_modules
	$(BIN)/wintersmith preview

.PHONY: build deploy preview
