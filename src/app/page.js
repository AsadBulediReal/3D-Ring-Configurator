"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="flex justify-center items-center text-[5rem]">
        Go to&nbsp;
        <a href="/custom" className="font-bold hover:text-gray-700">
          /custom
        </a>{" "}
        &nbsp;in the url
      </h1>
    </main>
  );
}
