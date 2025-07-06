import Calculator from "./components/Calculator";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen mx-auto justify-center items-center bg-black">
      <h1 className="text-3xl text-center">Calculator</h1>
      <Calculator />
    </main>
  );
}
