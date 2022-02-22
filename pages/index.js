import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import FilteringMenu from 'components/FilteringMenu';
import { getAllBlogs } from 'lib/api';
import { useState } from 'react';
import { useGetBlogs } from 'actions';


export default function Home({ blogs: initialData }) {
  const [filter, setFilter] = useState({ view: { list: 0 } });

  const { data: blogs, error } = useGetBlogs(initialData);

  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu filter={filter} onChange={(option, value) => { setFilter({ ...filter, [option]: value }) }} />
      <hr />
      <Row className="mb-5">
        {/* <Col md="10">
          <CardListItem />
        </Col> */}

        {blogs && blogs.map(blog => (
          filter.view.list === 0 ?
            <Col key={blog.slug} md="4">
              <CardItem title={blog.title} subtitle={blog.subtitle} date={blog.date} image={blog.coverImage} author={blog.author} slug={blog.slug} />
            </Col>
            :
            <Col key={`${blog.slug}-list`} md='9'>
              <CardListItem title={blog.title} subtitle={blog.subtitle} date={blog.date} author={blog.author} slug={blog.slug} />
            </Col>
        ))}
      </Row>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const blogs = await getAllBlogs({ offset: 0 });
  return {
    props: {
      blogs
    }
  }
}