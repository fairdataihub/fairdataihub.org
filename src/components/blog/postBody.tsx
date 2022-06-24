interface PostBodyProps {
  content: string;
}

const postBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className="prose lg:prose-xl">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default postBody;
