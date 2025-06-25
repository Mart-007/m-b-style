.PHONY: install

bld:
	npm run build

ptf:
	npm version patch

pub:
	npm publish

link:
	npm link