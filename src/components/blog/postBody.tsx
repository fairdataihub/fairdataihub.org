interface PostBodyProps {
  content: string;
}

const postBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className="prose prose-slate lg:prose-base prose-a:text-primary prose-img:mx-auto prose-img:rounded-md prose-img:shadow-xl max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default postBody;
