interface Props {
  list: string[];
}

export default function FeaturedChips(props: Props) {
  const { list } = props;

  return (
    <div className="pt-6 pb-6 leading-[44px]">
      {list.map((item, index) => (
        <span
          key={index}
          className="inline-block mr-2 font-normal text-sm leading-4 tracking-[0.25px] text-[#3B3B3B] bg-[#F8FAEF] border-[1.5px] border-solid border-[#DDE7B1] px-3 py-1 rounded-full"
          style={{ fontFamily: '"Apercu", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif' }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
