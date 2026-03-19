import React from 'react';
import Style from '../casestudies/CaseStudy.module.scss';
import { Box, Grid } from "@mui/material";

export default function GoReSymSignatureBlog() {
    return (
        <Box className={Style.caseStudy}>
            <Grid container display={'flex'} flexDirection={'column'} p={'2rem'}>
                <Grid item>
                    <Box component={'h1'} className={Style.title}>
                        Contributing to GoReSym: Go Function Signature Reconstruction
                    </Box>
                    <Box component={'p'} className={Style.text} style={{ fontStyle: 'italic', marginTop: '1rem' }}>
                        A contribution write-up for issue #14: reconstructing function signatures from Go binaries and exporting IDA-friendly typedefs.
                    </Box>
                </Grid>

                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Background</Box>
                    <Box component={'p'} className={Style.text}>
                        GoReSym already reconstructed many Go types from runtime metadata, including structs, slices, arrays, pointers,
                        interfaces, and scalar aliases. However, function types were treated as opaque values. The previous logic returned
                        a generic void pointer for every function type, which meant IDA could not consume meaningful signatures from the output.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        Issue #14 asked for full function signature extraction: parameter types, return types, and variadic support.
                    </Box>
                </Grid>

                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Core Idea</Box>
                    <Box component={'p'} className={Style.text}>
                        In Go binaries, function type metadata stores parameter and result counts, plus references to type descriptors.
                        By following those references and recursively reconstructing each type, we can emit C-style function typedefs that
                        map much closer to the original Go intent.
                    </Box>
                </Grid>

                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Implementation Walkthrough</Box>
                    <Box component={'ol'} className={Style.list}>
                        <li><strong>Locate metadata counts:</strong> find the memory offsets for input and output counts after the base type header.</li>
                        <li><strong>Read counts safely:</strong> parse values with proper endianness handling.</li>
                        <li><strong>Decode variadic flag:</strong> extract and clear the flag bit embedded in the output-count field.</li>
                        <li><strong>Resolve parameter list:</strong> walk the pointer list to each parameter type descriptor.</li>
                        <li><strong>Resolve returns:</strong> continue in the same list for return type descriptors.</li>
                        <li><strong>Emit typedef:</strong> generate C-style output with parameter list, return type, and variadic marker.</li>
                    </Box>
                </Grid>

                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Output Behavior</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Zero returns:</strong> emitted as <code>void</code>.</li>
                        <li><strong>Single return:</strong> emitted as the concrete reconstructed type.</li>
                        <li><strong>Multiple returns:</strong> represented in a C-compatible way, with additional context noted for analysis.</li>
                        <li><strong>Variadic functions:</strong> emitted with <code>...</code> in the final parameter list.</li>
                    </Box>
                </Grid>

                <Grid item mt={4} mb={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Next Step in IDA Integration</Box>
                    <Box component={'p'} className={Style.text}>
                        A follow-up helper in the renaming script introduces a placeholder entry point for applying recovered function types
                        directly in IDA. The intended flow is to extract IDA-discovered signatures, match against reconstructed type data,
                        and apply the best type definition to each function automatically.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        This contribution closed the gap between broad type recovery and practical function-level analysis, making GoReSym output
                        significantly more useful for reverse engineering workflows.
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
