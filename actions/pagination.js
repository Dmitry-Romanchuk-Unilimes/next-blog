import { useGetBlogs } from 'actions';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import { Col } from 'react-bootstrap';
import { useSWRPages } from 'swr'

export const useGetBlogsPages = ({ blogs: initialData, filter }) => {
  return useSWRPages('index-page', ({ offset, withSWR }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: blogs } = withSWR(useGetBlogs(initialData));

    if (!blogs) return 'Loading...';

    return blogs && blogs.map(blog => (
      filter.view.list === 0 ?
        <Col key={blog.slug} md="4">
          <CardItem title={blog.title} subtitle={blog.subtitle} date={blog.date} image={blog.coverImage} author={blog.author} slug={blog.slug} />
        </Col>
        :
        <Col key={`${blog.slug}-list`} md='9'>
          <CardListItem title={blog.title} subtitle={blog.subtitle} date={blog.date} author={blog.author} slug={blog.slug} />
        </Col>
    ))
  }, (SWR, index) => {
    return 0;
  }, [filter]);
}