interface tagListProps {
  tags: tag[];
}

interface tag {
  heading: string | number;
  value: string | number;
  color?: "light";
}

export function TagList({ tags }: tagListProps) {
  return (
    <div className="block">
      <div className="field is-grouped is-grouped-multiline">
        {tags.map((tag: tag, key: number) => {
          const { heading, value, color } = tag;
          return (
            <div className="control" key={key}>
              <div className="tags has-addons">
                <span className="tag is-primary">{heading}</span>
                {value !== "" && <span className={`tag is-${color}`}>{value}</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
