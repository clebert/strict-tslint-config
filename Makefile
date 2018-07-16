.PHONY: test
test: README.md
	@yarn prettier --list-different '**/*.{js,json,md,ts}'

	@yarn tslint \
		--config tslint.json \
		--project . \
		--formatters-dir node_modules/custom-tslint-formatters/formatters/ \
		--format grouped \
		'**/*.ts'

.PHONY: clean
clean:
	rm -rf dist/

README.md: dist/
	node dist/create-readme.js

dist/: src/*.ts src/*/*.ts node_modules/ tsconfig.json
	@yarn tsc --project .
	@touch $@

node_modules/: package.json yarn.lock
	@yarn install --check-files
	@touch $@

yarn.lock:
	@yarn
