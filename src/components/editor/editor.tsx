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
import { DeleteIcon } from './assets/icon.tsx';
import { db } from "../../data/db.ts";
import moment from "moment";
import { useContent } from "../../hooks/useContent.tsx";
import React, { useEffect, useState } from "react";

export default function TextEditor() {
    const { context, setContext } = useContent();
    const [content, setContent] = useState<React.SetStateAction<string>>('<p></p>');
    const date = moment().format('MM.DD.YYYY HH:mm')

    console.log(content)

    useEffect(() => {
        editor?.commands?.setContent(context.body, false);
        setContent(context.body);
    }, [context, setContent])

    async function deleteNote() {
        if (context.id !== 0) {
            try {
                await db.notes.delete(context.id);
              } catch (error) {
                console.log(error)
              }
        }
    }

    const headerEditor = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContext({
            ...context,
            header: e.currentTarget.value,
        })
        addNote();
    }

    async function addNote() {
        try {
            if ((context.header !== '') && (context.body !== '')) {
                const time = date;
                const id = context.id;
                const header = context.header;
                const body = context.body;
                if (id === 0) {
                    await db.notes.add({
                        time,
                        header,
                        body
                    }).then(function (e) {
                        setContext({
                            ...context,
                            id: e
                        })
                    });
                } else {
                    await db.notes.update(id, {
                        time,
                        header,
                        body
                    });
                }
            }
        } catch(e) {
            console.log(e);
        }
    }

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
        content: content,
        onUpdate: (({ editor }) => {
            setContent(editor.getHTML());
            /*addNote();*/
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
                        <Button size="xs" color="default" variant="default" onClick={deleteNote}>
                            <DeleteIcon width="14" height="16" />
                        </Button>
                    </Flex>
                </RichTextEditor.Toolbar>
            </RichTextEditor>
            <Text ta={'center'} my={16} fw={"bold"} size="sm" opacity={0.7}>{date}</Text>
            <Textarea px={`1rem`} variant="unstyled" size="xl" value={context.header} autosize maxRows={1} placeholder="Input Header" style={{fontWeight: 'bold'}} onChange={headerEditor} />
            <RichTextEditor editor={editor} style={{ border: 0 }}>
                <RichTextEditor.Content />
            </RichTextEditor>
        </Flex>
    )
}