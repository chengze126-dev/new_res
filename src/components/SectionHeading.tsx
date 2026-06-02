type SectionHeadingProps = {
  number: string;
  title: string;
};

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <h2 className="section-heading">
      <span className="font-mono text-green">{number}.</span>
      {title}
    </h2>
  );
}
