interface projectLevelProps {
  levelItems: { [key: string]: string | number }[];
  isSmall?: boolean;
}

export function ProjectLevel({ levelItems, isSmall = false }: projectLevelProps) {
  return (
    <nav className="level">
	{levelItems.map((item, key) => {
          return (
            <div className="level-item has-text-centered" key={key}>
		<div>
		    <p className={`heading ${isSmall && "is-size-6"}`}>{Object.keys(item)}</p>
		    <p className={`title ${isSmall && "is-size-4"}`}>{Object.values(item)}</p>
		</div>
            </div>
          );
	})}
    </nav>
  );
}
