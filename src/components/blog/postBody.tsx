interface PostBodyProps {
  content: string;
}

const postBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className="prose-a:text-url prose prose-slate max-w-none lg:prose-lg">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default postBody;
