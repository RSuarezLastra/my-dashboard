import { SimpleWidget } from "@/app/components";



export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="text-3xl mt-2">Dashboard</h1>
      <span className="text-lg">Informacion general</span>
      <div className="flex flex-wrap m-2">
        <SimpleWidget/>
      </div>
    </div>
  );
}