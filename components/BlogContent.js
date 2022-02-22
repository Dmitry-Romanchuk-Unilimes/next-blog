import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/HighlightCode';
import { urlFor } from 'lib/api';

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <HighlightCode language={language}>
          {code}
          &lt;div className=&apos;code-filename&apos;&gt;{filename}&lt;/div&gt;
        </HighlightCode>
      )
    },
    image: ({ node: { asset, alt, position = 'center' } }) => {

      return (
        <div className={`blog-image blog-image-${position}`}>
          <img src={urlFor(asset.url).height(300).fit('max')} alt={alt} />
          <div className='image-alt'>{alt}</div>
        </div>
      )
    }
  }
}

const BlogContent = ({ content }) =>
  <BlockContent
    blocks={content}
    serializers={serializers} />

export default BlogContent;