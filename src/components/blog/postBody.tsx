interface PostBodyProps {
  content: string;
}

const postBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className="prose prose-slate max-w-none  prose-a:text-primary lg:prose-base">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default postBody;
