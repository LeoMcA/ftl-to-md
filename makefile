install:
	npm ci
clean:
	rm output.*
md:
	node main.js $(path)
pandoc:
	$(MAKE) md
	pandoc output.md -f markdown -t $(type) -s -o output.$(extension)
odt:
	$(MAKE) pandoc type=odt extension=odt
