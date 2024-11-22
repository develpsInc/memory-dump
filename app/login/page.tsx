import LoginPage from "@/components/login-page";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <LoginPage />
      </div>
    </div>
  );
}
