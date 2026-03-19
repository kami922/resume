import React from 'react';
import RawStyledBlog from './RawStyledBlog';
import structBlogTextUrl from './content/goresym-struct-blog.txt';

export default function GoReSymSignatureBlog() {
    return <RawStyledBlog textFileUrl={structBlogTextUrl} />;
}
