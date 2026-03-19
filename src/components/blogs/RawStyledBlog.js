import React, { useEffect, useState } from 'react';
import Style from '../casestudies/CaseStudy.module.scss';
import { Box, Grid } from "@mui/material";

function getLineType(line) {
    const trimmed = line.trim();

    if (!trimmed) return 'empty';
    if (/^Title:/.test(trimmed)) return 'title';
    if (/^Part\s+\d/.test(trimmed)) return 'section';
    if (/^Better blog structure:/.test(trimmed)) return 'section';
    if (/^[A-Za-z0-9'().\- ]{2,90}:$/.test(trimmed)) return 'section';

    if (
        /^func\s/.test(trimmed) ||
        /^type\s/.test(trimmed) ||
        /^\/\//.test(trimmed) ||
        /^\d+\.\s/.test(trimmed) ||
        trimmed.includes('struct {') ||
        trimmed.includes('->') ||
        trimmed.includes('()') ||
        trimmed.includes('{') ||
        trimmed.includes('}') ||
        trimmed.includes('[]') ||
        trimmed.includes('`')
    ) {
        return 'code';
    }

    return 'text';
}

export default function RawStyledBlog({ textFileUrl }) {
    const [content, setContent] = useState('');

    useEffect(() => {
        let isMounted = true;

        fetch(textFileUrl)
            .then((res) => res.text())
            .then((text) => {
                if (isMounted) setContent(text);
            })
            .catch(() => {
                if (isMounted) setContent('');
            });

        return () => {
            isMounted = false;
        };
    }, [textFileUrl]);

    const lines = content ? content.split('\n') : [];

    return (
        <Box className={Style.caseStudy}>
            <Grid container display={'flex'} flexDirection={'column'} p={'2rem'}>
                {lines.length === 0 ? (
                    <Grid item>
                        <Box component={'p'} className={Style.text}>Loading blog content...</Box>
                    </Grid>
                ) : (
                    lines.map((line, index) => {
                        const type = getLineType(line);
                        const trimmed = line.trim();

                        if (type === 'empty') {
                            return (
                                <Grid item key={index}>
                                    <Box component={'p'} className={Style.text} style={{ margin: 0 }}>&nbsp;</Box>
                                </Grid>
                            );
                        }

                        if (type === 'title') {
                            return (
                                <Grid item key={index} mt={2}>
                                    <Box component={'h2'} className={Style.sectionTitle} style={{ marginTop: 0 }}>
                                        {trimmed}
                                    </Box>
                                </Grid>
                            );
                        }

                        if (type === 'section') {
                            return (
                                <Grid item key={index} mt={1}>
                                    <Box component={'h3'} className={Style.subsectionTitle} style={{ marginTop: 0 }}>
                                        {trimmed}
                                    </Box>
                                </Grid>
                            );
                        }

                        if (type === 'code') {
                            return (
                                <Grid item key={index}>
                                    <Box
                                        component={'pre'}
                                        className={Style.mermaidDiagram}
                                        style={{ margin: '0.25rem 0', whiteSpace: 'pre-wrap' }}
                                    >
                                        {line}
                                    </Box>
                                </Grid>
                            );
                        }

                        return (
                            <Grid item key={index}>
                                <Box component={'p'} className={Style.text} style={{ margin: '0.35rem 0' }}>
                                    {trimmed}
                                </Box>
                            </Grid>
                        );
                    })
                )}
            </Grid>
        </Box>
    );
}
