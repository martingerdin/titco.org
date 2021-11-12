export interface TagListInterface {
  tags: TagInterface[];
}

export interface TagInterface {
  heading: string | number;
  value: string | number;
  color?: "light";
}

export function TagList({ tags }: TagListInterface) {
  return (
    <div className="block">
      <div className="field is-grouped is-grouped-multiline">
        {tags.map((tag: TagInterface, key: number) => {
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
