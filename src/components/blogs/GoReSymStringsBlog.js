import React from 'react';
import RawStyledBlog from './RawStyledBlog';
import stringsBlogTextUrl from './content/goresym-strings-blog.txt';

export default function GoReSymStringsBlog() {
    return <RawStyledBlog textFileUrl={stringsBlogTextUrl} />;
}
