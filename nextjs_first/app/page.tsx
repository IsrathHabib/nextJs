type ItemProps = {
  label: string;
  selected: boolean;
};

const leftListItems: ItemProps[] = [
  { label: "Mom", selected: true },
  { label: "Dad", selected: false },
  { label: "Sister", selected: false },
  { label: "Brother", selected: true },
];

const rightListItems: ItemProps[] = [
  { label: "Grandpa", selected: true },
  { label: "Grandma", selected: false },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-4">
      <p className="text-2xl">Transfer List</p>

      <div className="flex flex-row gap-10">
        <LeftList />

        <ControlButtons />

        <RightList />
      </div>
    </main>
  );
}
function LeftList() {
  return (
    <section>
      {leftListItems.map((item) => (
        <Item label={item.label} selected={item.selected} />
      ))}
    </section>
  );
}
function RightList() {
  return (
    <section>
      {rightListItems.map((item) => (
        <Item label={item.label} selected={item.selected} />
      ))}
    </section>
  );
}

function Item({ label, selected }: ItemProps) {
  return (
    <section className="flex flex-row gap-4">
      <input type="checkbox" checked={selected ? true : false} />
      <label>{label}</label>
    </section>
  );
}

function ControlButtons() {
  return (
    <section className="flex flex-col gap-5">
      <button className="bg-purple-400 hover:bg-purple-600 h-6 w-6 rounded">
        {">"}
      </button>

      <button className="bg-purple-400 hover:bg-blue-600 h-6 w-6 rounded">
        {"<"}
      </button>
    </section>
  );
}