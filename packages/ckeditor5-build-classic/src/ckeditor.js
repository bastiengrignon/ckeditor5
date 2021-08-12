/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials";
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Autoformat,
	Bold,
	Essentials,
	Heading,
	Image,
	Indent,
	Italic,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	SpecialCharacters,
	SpecialCharactersEssentials,
	Strikethrough,
	Underline,
	WordCount
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			"heading",
			"|",
			"bold",
			"italic",
			"underline",
			"strikethrough",
			"link",
			"|",
			"outdent",
			"indent",
			"bulletedList",
			"numberedList",
			"|",
			"undo",
			"redo",
			"|",
			"mediaEmbed",
			"specialCharacters"
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'fr'
};
