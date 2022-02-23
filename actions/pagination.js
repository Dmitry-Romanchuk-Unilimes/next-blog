import { useGetBlogs } from 'actions';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { useSWRPages } from 'swr'

export const useGetBlogsPages = ({ blogs, filter }) => {
  useEffect(() => {
    window.__pagination__init = true;
  }, []);

  return useSWRPages('index-page', ({ offset, withSWR }) => {
    let initialData = !offset && blogs;

    if (typeof window !== 'undefined' && window.__pagination__init) {
      initialData = null;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: paginatedBlogs } = withSWR(useGetBlogs({ offset, filter }, initialData));

    if (!paginatedBlogs) return 'Loading...';

    return paginatedBlogs && paginatedBlogs.map(blog => (
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
    if (SWR.data && SWR.data.length === 0) return null;
    return (index + 1) * 3;
  }, [filter]);
}