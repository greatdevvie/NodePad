import { Button, Flex, Text, Textarea } from "@mantine/core";
import '@mantine/tiptap/styles.css';
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import Placeholder from '@tiptap/extension-placeholder';
import Link from "@tiptap/extension-link";
import { useContext, useState } from "react";
import { DeleteIcon } from './assets/icon.tsx';
import MainContext from "../../context/MainContext.ts";

interface EditorType {
    date: string,
    value: string,
}

export default function TextEditor({ date }: EditorType) {
    const content = useContext(MainContext);

    const [value, setValue] = useState({
        header: '',
        body: ''
    })

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Placeholder.configure({ placeholder: 'Input Body' })
        ],
        content: '',
        onUpdate: (({ editor }) => {
            setValue({
                ...value,
                body: editor.getHTML()
            })
        })
    })

    return (
        <Flex direction={`column`} w={`100%`} py={8}>
            <RichTextEditor editor={editor} style={{border: 0}}>
                <RichTextEditor.Toolbar sticky stickyOffset={60}>
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Bold />
                        <RichTextEditor.Italic />
                        <RichTextEditor.Underline />
                        <RichTextEditor.Strikethrough />
                        <RichTextEditor.ClearFormatting />
                        <RichTextEditor.Highlight />
                        <RichTextEditor.Code />
                    </RichTextEditor.ControlsGroup>
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.H1 />
                        <RichTextEditor.H2 />
                        <RichTextEditor.H3 />
                        <RichTextEditor.H4 />
                    </RichTextEditor.ControlsGroup>
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Blockquote />
                        <RichTextEditor.Hr />
                        <RichTextEditor.BulletList />
                        <RichTextEditor.OrderedList />
                        <RichTextEditor.Subscript />
                        <RichTextEditor.Superscript />
                    </RichTextEditor.ControlsGroup>
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Link />
                        <RichTextEditor.Unlink />
                    </RichTextEditor.ControlsGroup>
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.AlignLeft />
                        <RichTextEditor.AlignCenter />
                        <RichTextEditor.AlignJustify />
                        <RichTextEditor.AlignRight />
                    </RichTextEditor.ControlsGroup>
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Undo />
                        <RichTextEditor.Redo />
                    </RichTextEditor.ControlsGroup>
                    <Flex justify={`end`} align={`end`}>
                        <Button size="xs" color="default" variant="default">
                            <DeleteIcon width="14" height="16" />
                        </Button>
                    </Flex>
                </RichTextEditor.Toolbar>
            </RichTextEditor>
            <Text ta={'center'} my={16} size="sm" opacity={0.7}>{date}</Text>
            <Textarea px={`1rem`} variant="unstyled" size="xl" value={value.header} autosize maxRows={1} placeholder="Input Header" style={{fontWeight: 'bold'}} onInput={(e) => {
                    setValue({
                        ...value,
                        header: e.currentTarget.value
                    })
                }} />
            <RichTextEditor editor={editor} style={{ border: 0 }}>
                <RichTextEditor.Content />
            </RichTextEditor>
        </Flex>
    )
}