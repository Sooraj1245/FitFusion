export default function Header() {
  return (
    <header className="flex justify-between bg-header items-center h-[70px] px-6 text-[20px] border-b-2 border-border text-text">
      <div>
        <h1 className="text-[25px] font-Mont font-medium text-accent">FitFusion</h1>
      </div>
      <div className="flex gap-4">
        <h4 className="text-text-secondary">A</h4>
        <h4 className="text-text-secondary">b</h4>
      </div>
    </header>
  );
}
