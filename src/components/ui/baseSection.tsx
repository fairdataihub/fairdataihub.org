interface BaseSectionTypes {
  children: React.ReactNode;
}

const BaseSection: React.FC<BaseSectionTypes> = ({ children }) => {
  return (
    <section>
      <main>{children}</main>
    </section>
  );
};

export default BaseSection;
