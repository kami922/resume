import React from 'react';
import Style from '../casestudies/CaseStudy.module.scss';
import { Box, Grid } from "@mui/material";

export default function GoReSymStringsBlog() {
    return (
        <Box className={Style.caseStudy}>
            <Grid container display={'flex'} flexDirection={'column'} p={'2rem'}>
                <Grid item>
                    <Box component={'h1'} className={Style.title}>
                        How I Built the -strings Feature for Mandiant's GoReSym
                    </Box>
                    <Box component={'p'} className={Style.text} style={{ fontStyle: 'italic', marginTop: '1rem' }}>
                        Design notes from implementing and validating a Go string extraction pipeline against FLOSS.
                    </Box>
                </Grid>

                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>What Changed in This Contribution</Box>
                    <Box component={'p'} className={Style.text}>
                        This work added a new <code>-strings</code> capability to GoReSym. The pull request included implementation code,
                        test fixtures, and reference outputs used to compare behavior with FLOSS. The comparison phase was especially useful,
                        because it surfaced edge cases and bugs that were not obvious in early local testing.
                    </Box>
                </Grid>

                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Part 1: Infrastructure and Metadata Output</Box>
                    <Box component={'p'} className={Style.text}>
                        The metadata container was extended with a <code>Strings []string</code> field. Since JSON output is produced with
                        Go reflection, this field appeared automatically in serialized output with no custom marshal logic. The human-readable
                        formatter required explicit print logic, so a dedicated strings section was added there.
                    </Box>
                </Grid>

                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Part 2: The Extraction Pipeline</Box>
                    <Box component={'p'} className={Style.text}>
                        Go strings are not null-terminated C strings. In binaries, they are represented as pointer-length pairs that reference
                        character bytes in data sections. The extraction flow follows this path:
                    </Box>
                    <Box component={'ol'} className={Style.list}>
                        <li>Load sections and keep only candidate data regions.</li>
                        <li>Detect architecture traits (32/64-bit and endianness).</li>
                        <li>Scan raw bytes for pointer-length candidates.</li>
                        <li>Identify the most likely real string-table region.</li>
                        <li>Resolve each winning candidate into UTF-8 text and filter for printability.</li>
                    </Box>
                </Grid>

                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Key Algorithm Insight</Box>
                    <Box component={'p'} className={Style.text}>
                        The pivotal heuristic is in selecting the real string table from noisy candidates. Candidate generation intentionally keeps
                        many possibilities. The disambiguation step then finds the strongest monotonic length pattern expected from compiler-organized
                        string metadata. This quickly separates signal from random pointer-length noise.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        After selecting that window, each candidate is resolved by reading bytes at the pointer address for the candidate length,
                        followed by encoding and printability checks before final inclusion.
                    </Box>
                </Grid>

                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Validation and Debugging Value</Box>
                    <Box component={'p'} className={Style.text}>
                        FLOSS comparison was critical for correctness. It did more than benchmark output volume: it highlighted behavioral mismatches
                        and helped isolate bug patterns in the first iteration. That feedback loop drove a cleaner final pipeline and more confident
                        results on real binaries.
                    </Box>
                </Grid>

                <Grid item mt={4} mb={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Takeaway</Box>
                    <Box component={'p'} className={Style.text}>
                        The feature is not just about extracting strings. It demonstrates a practical reverse-engineering workflow: add metadata support,
                        design architecture-aware scanning, apply robust candidate filtering, and validate against a trusted tool. That combination made
                        the <code>-strings</code> addition both usable and defensible.
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
