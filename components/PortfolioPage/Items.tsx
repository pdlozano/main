type ItemProps = {
    title: string;
    tech: ("SQL" | "JavaScript" | "Python")[];
}

function Item(props: ItemProps) {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}

function Items() {
    return (
        <div>
            <Item title="Pokemon Team Stats and Coverage App" tech={["JavaScript"]}/>
        </div>
    );
}

export default Items;