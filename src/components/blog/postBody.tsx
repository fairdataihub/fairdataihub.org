interface PostBodyProps {
  content: string;
}

const postBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className="prose prose-slate max-w-none lg:prose-base prose-a:text-primary prose-img:mx-auto prose-img:rounded-md prose-img:shadow-xl">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default postBody;
