# ftl-to-md
*Convert Mozilla Fluent files to Markdown (and more!)*

## Rationale

Allows for the proofreading and commenting on fluent files in a tool such as Google Docs, by exporting the fluent file to ODT, then uploading that to Google Drive.

## Installation

Requires [`pandoc`](https://pandoc.org/) to be installed to convert from markdown to other formats.

Install the node dependencies:

```
make install
```

## Usage

### Convert to Markdown

To convert from fluent file to markdown:

```
make md path=../path/to/file.ftl
```

The markdown will be generated in output.md

### Convert to ODT

```
make odt path=../path/to/file.ftl
```

The odt file will be created at output.odt

### Convert to any format pandoc supports

For example, html5:

```
make pandoc type=html5 extension=html path=../path/to/file.ftl
```

The html file will be created at output.html

### Cleaning up output files

To clean up all output files:

```
make clean
```

## Licence

[MPL-2.0](https://www.mozilla.org/en-GB/MPL/2.0/)
