export default function CardHeader(props) {
  return (
    <div className="flex items-center gap-2 mb-3">
      {props.icon ? (
        <span className="text-[20px] text-accent">{props.icon}</span>
      ) : null}
      <h2 className="text-[14px] font-Mont font-semibold text-text-secondary">
        {props.name}
      </h2>
    </div>
  );
}
