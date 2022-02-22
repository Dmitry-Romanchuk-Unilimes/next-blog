import Image from 'next/image';

export default function BlogHeader({ title, subtitle, coverImage, date, author }) {
  return (
    <div className="blog-detail-header">
      <p className="lead mb-0">
        <Image
          src={author?.avatar}
          className="rounded-circle mr-3"
          height={50}
          width={50}
          alt="avatar" />
        {author?.name}
        {', '} {date}
      </p>
      <h1 className="font-weight-bold blog-detail-header-title mb-0">{title}</h1>
      <h2 className="blog-detail-header-subtitle mb-3">{subtitle}</h2>
      <Image
        className="img-fluid rounded"
        src={coverImage} alt={title} width={800} height={600} />
    </div>
  )
}