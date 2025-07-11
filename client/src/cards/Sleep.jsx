import CardHeader from "../components/CardHeader";

export default function Sleep() {
  return (
    <div>
      <CardHeader icon="💤" name="Sleep" />
      <div className="flex flex-col gap-1 justify-center">
        <h1 className="text-accent text-[22px] font-semibold">07:25 PM</h1>
        <h2 className="text-text font-medium text-[15px]">
          8 Hours recommended
        </h2>
        <p className="text-text-secondary font-light text-[12px]">
          You had 6 Hours of sleep yesterday
        </p>
      </div>
    </div>
  );
}
