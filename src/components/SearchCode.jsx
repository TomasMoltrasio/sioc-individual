import { TiArrowRightThick } from "react-icons/ti";

export default function SearchCode() {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text font-semibold text-base">Codigo</span>
      </label>

      <div className="join">
        <input className="input join-item border-slate-300 rounded-r-none text-slate-900" />
        <button className="btn join-item rounded-r-full bg-primary text-base-100">
          <TiArrowRightThick />
        </button>
      </div>
    </div>
  );
}
